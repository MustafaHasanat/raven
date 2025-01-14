import { readFile } from "fs/promises";
import { ConfiguratorProps, RavenConfigType } from "../types/configurator.js";
import Ajv, { ValidationError } from "ajv";
import { Validator } from "./Validator.js";
import { configFileSchema } from "../schemas/configurator.js";

export class Configurator {
    protected configFileObject: RavenConfigType | undefined;
    protected envFile: string | undefined;
    protected validator: Validator;

    protected constructor() {
        const validator = new Validator();
        this.validator = validator;
    }

    /**
     * Reads the config file and return its contents
     *
     * @returns RavenConfigType
     */
    protected async readConfigFile(): Promise<RavenConfigType> {
        try {
            const configFileObject: RavenConfigType = JSON.parse(
                await readFile("raven.config.json", "utf8")
            );

            this.configFileObject = configFileObject;

            return configFileObject;
        } catch (error) {
            throw Error(
                `Error while reading 'raven.config.json' file: ${error}`
            );
        }
    }

    /**
     * Reads the '.env' file and return its contents
     *
     * @returns RavenConfigType
     */
    protected async readEnvFile(): Promise<string> {
        try {
            const envFile: string = await readFile(".env", "utf8");

            this.envFile = envFile;

            return envFile;
        } catch (error) {
            throw Error(`Error while reading '.env' file: ${error}`);
        }
    }

    /**
     * Validate the given config file against the json-schema for the configs
     */
    protected async validateConfigFile() {
        const ajv = new Ajv();
        const validate = ajv.compile(configFileSchema);

        if (!this.configFileObject)
            throw new Error("Config object is not defined");

        const result = validate(this.configFileObject);

        if (!result) {
            console.error(validate.errors);
            throw new ValidationError(
                validate.errors
                    ? Object.values(validate.errors).map((error) => error)
                    : []
            );
        }
    }

    protected throwValidationError(
        isErrorOccurred: boolean,
        message?: string | null
    ) {
        if (isErrorOccurred) throw new Error(message || "");
    }

    /**
     * Get the configFileObject
     *
     * @returns ConfiguratorProps
     */
    getConfigFileObject = (): ConfiguratorProps => this.configFileObject || {};
}

import { readFile } from "fs/promises";
import { ConfiguratorProps, RavenConfigType } from "../types/configurator";
import Ajv, { ValidationError } from "ajv";
import { configFileSchema } from "../utils/constants/configurator";

export class Configurator {
    protected configFileObject: RavenConfigType | undefined;

    protected constructor() {}

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

            return configFileObject;
        } catch (error) {
            throw Error(
                `Error while reading 'raven.config.json' file: ${error}`
            );
        }
    }

    /**
     * Validate the given config file against the json-schema for the configs
     */
    protected async validator() {
        const ajv = new Ajv();
        const validate = ajv.compile(configFileSchema);
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

    /**
     * Get the configFileObject
     *
     * @returns ConfiguratorProps
     */
    getConfigFileObject = (): ConfiguratorProps => this.configFileObject || {};
}

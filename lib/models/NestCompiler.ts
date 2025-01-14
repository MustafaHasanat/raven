import { specialLog } from "../utils/helpers/logHelpers.js";
import { Configurator } from "./Configurator.js";

export class NestCompiler extends Configurator {
    constructor() {
        super();
    }

    private async compileMainFiles() {
        // TODO: the main file
        // TODO: the .env file
        // TODO: all public directory files
        // TODO: all views directory files
        // TODO: constants
        // TODO: initial DTOs
        // TODO: initial enums
        // TODO: guards
        // TODO: helpers
        // TODO: middlewares
        // TODO: pipes
        // TODO: responses
        // TODO: types
    }

    private async compileSchemaFiles() {
        // TODO: app files (module, controller, and service)
        // TODO: schemas files (tables)
        // TODO: entities' files
        // TODO: tables' enum files
        // TODO: tables' DTO files
    }

    /**
     * Validate your local '.env' file against what has been specified in the config in the 'env' section
     */
    private async validateEnvConfig() {
        if (!this.configFileObject || !this.envFile) return;

        Object.entries(this.configFileObject.env).map(([mainKey, objValue]) => {
            Object.entries(objValue).map(([key, value]) => {
                if (this.envFile?.indexOf(`${value}=`) === -1)
                    throw new Error(
                        `'${mainKey}.${key}': No value was found for '${value}' in the '.env' file`
                    );
            });
        });
    }

    async compile() {
        specialLog({
            message: "Compiling",
            situation: "PROCESS",
        });

        // read the local files
        await this.readConfigFile();
        await this.readEnvFile();
        // validate the config file
        await this.validateConfigFile();
        await this.validateEnvConfig();
        // build the app
        await this.compileMainFiles();
        await this.compileSchemaFiles();

        specialLog({
            message: "Compilation is done",
            situation: "RESULT",
        });
    }
}

import { Configurator } from "./Configurator";

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

    // TODO: validate the project data
    private async validateProjectConfig() {}

    // TODO: validate the database data
    private async validateDatabaseConfig() {}

    // TODO: validate the services data
    private async validateServicesConfig() {}

    // TODO: validate the swagger data
    private async validateSwaggerConfig() {}

    async compile() {
        // read the config file
        await this.readConfigFile();
        // validate the config file
        await this.validator();
        await this.validateProjectConfig();
        await this.validateDatabaseConfig();
        await this.validateServicesConfig();
        await this.validateSwaggerConfig();
        // build the app
        await this.compileMainFiles();
        await this.compileSchemaFiles();
    }
}

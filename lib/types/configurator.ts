export type FrameworkType = "nest.js";

export type ColumnType =
    | "string"
    | "enum"
    | "number"
    | "array"
    | "object"
    | "date";

export type RavenConfigType = {
    project: {
        framework: FrameworkType;
        name: string;
        outDir: string;
        debugger: boolean;
    };
    database: {
        configs: {
            host: string;
            port: string;
            user: string;
            password: string;
            name: string;
        };
        tables: {
            [tableName: string]: {
                [columnName: string]: {
                    type: ColumnType;
                    description?: "";
                    validations?: {
                        isRequired?: boolean;
                        isEmail?: boolean;
                        isUrl?: boolean;
                        isUnique?: boolean;
                        isLatLong?: boolean;
                        isPhoneNumber?: boolean;
                        isDecimal?: boolean;
                        isInteger?: boolean;
                        isPercentage?: boolean;
                        minLength?: number;
                        maxLength?: number;
                        min?: number;
                        max?: number;
                        enum?: string;
                    };
                };
            };
        };
        relations: string[];
        enums: {
            [enumName: string]: string[];
        };
    };
    services: {
        jwt: {
            secret: string;
        };
        mailer?: {
            email: string;
            password: string;
            provider: string;
        };
        aws?: {
            accessKey: string;
            secretKey: string;
            region: string;
            bucketName: string;
        };
    };
    swagger: {
        allowedUrls: string;
        url: string;
        port: string;
    };
};

export interface ConfiguratorProps {}

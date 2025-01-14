export type FrameworkType = "nest.js" | "next.js" | "django";

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
        tables?: {
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
        relations?: string[];
        enums?: {
            [enumName: string]: string[];
        };
    };
    services: {
        mailer?: boolean;
        aws?: boolean;
    };
    env: {
        swagger: {
            allowedUrls: string;
            url: string;
            port: string;
        };
        database: {
            host: string;
            port: string;
            user: string;
            password: string;
            name: string;
        };
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
};

export interface ConfiguratorProps {}

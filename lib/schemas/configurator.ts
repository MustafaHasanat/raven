// Regex
const snakeCaseRegex = "^[a-z]+(_[a-z]+)*$";
const relationsRegex = "^[a-z]+(_[a-z]+)*(>|-|<>)[a-z]+(_[a-z]+)*$";
// Enums
const frameworkTypes = ["nest.js", "next.js", "django"];
const columnTypes = ["string", "enum", "number", "array", "object", "date"];

export const configFileSchema = {
    type: "object",
    properties: {
        project: {
            type: "object",
            properties: {
                framework: {
                    type: "string",
                    enum: frameworkTypes,
                },
                name: { type: "string", minLength: 1 },
                outDir: { type: "string", minLength: 1 },
                debugger: { type: "boolean" },
            },
            required: ["framework", "name", "outDir"],
        },
        database: {
            type: "object",
            properties: {
                tables: {
                    type: "object",
                    patternProperties: {
                        //* Table names
                        // Regex for snake_case keys
                        "^[a-z]+(_[a-z]+)*$": {
                            type: "object",
                            patternProperties: {
                                //* Column names
                                // Regex for snake_case keys
                                "^[a-z]+(_[a-z]+)*$": {
                                    type: "object",
                                    properties: {
                                        type: {
                                            type: "string",
                                            enum: columnTypes,
                                        },
                                        description: { type: "string" },
                                        validations: {
                                            type: "object",
                                            properties: {
                                                isRequired: { type: "boolean" },
                                                isEmail: { type: "boolean" },
                                                isUrl: { type: "boolean" },
                                                isUnique: { type: "boolean" },
                                                isLatLong: { type: "boolean" },
                                                isPhoneNumber: {
                                                    type: "boolean",
                                                },
                                                isDecimal: { type: "boolean" },
                                                isInteger: { type: "boolean" },
                                                isPercentage: {
                                                    type: "boolean",
                                                },
                                                minLength: { type: "number" },
                                                maxLength: { type: "number" },
                                                min: { type: "number" },
                                                max: { type: "number" },
                                                enum: { type: "string" },
                                            },
                                        },
                                    },
                                    required: ["type"],
                                },
                            },
                        },
                    },
                },
                relations: {
                    type: "array",
                    items: {
                        type: "string",
                        minLength: 1,
                        pattern: relationsRegex,
                    },
                },
                enums: {
                    type: "object",
                    patternProperties: {
                        // Regex for PascalCase keys
                        "^[A-Z][a-zA-Z0-9]*$": {
                            type: "array",
                            items: { type: "string", pattern: snakeCaseRegex },
                        },
                    },
                },
            },
        },
        services: {
            type: "object",
            properties: {
                mailer: { type: "boolean" },
                aws: { type: "boolean" },
            },
        },
        env: {
            type: "object",
            properties: {
                swagger: {
                    type: "object",
                    properties: {
                        allowedUrls: { type: "string", minLength: 1 },
                        url: { type: "string", minLength: 1 },
                        port: { type: "string", minLength: 1 },
                    },
                    required: ["allowedUrls", "url", "port"],
                },
                database: {
                    type: "object",
                    properties: {
                        host: { type: "string", minLength: 1 },
                        port: { type: "string", minLength: 1 },
                        user: { type: "string", minLength: 1 },
                        password: { type: "string", minLength: 1 },
                        name: { type: "string", minLength: 1 },
                    },
                    required: ["host", "port", "user", "password", "name"],
                },
                jwt: {
                    type: "object",
                    properties: {
                        secret: { type: "string", minLength: 1 },
                    },
                    required: ["secret"],
                },
                mailer: {
                    type: "object",
                    properties: {
                        email: { type: "string" },
                        password: { type: "string" },
                        provider: { type: "string" },
                    },
                    required: ["email", "password", "provider"],
                },
                aws: {
                    type: "object",
                    properties: {
                        accessKey: { type: "string" },
                        secretKey: { type: "string" },
                        region: { type: "string" },
                        bucketName: { type: "string" },
                    },
                    required: [
                        "accessKey",
                        "secretKey",
                        "region",
                        "bucketName",
                    ],
                },
            },
            required: ["swagger", "database", "jwt"],
        },
    },
    required: ["project", "database", "env"],
};

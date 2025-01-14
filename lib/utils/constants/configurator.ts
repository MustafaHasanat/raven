export const configFileSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        framework: {
            type: "string",
        },
        projectName: {
            type: "string",
        },
        tables: {
            type: "object",
            additionalProperties: {
                type: "object",
                additionalProperties: {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                        },
                        description: {
                            type: "string",
                        },
                        validations: {
                            type: "object",
                            properties: {
                                isRequired: {
                                    type: "boolean",
                                },
                                maxLength: {
                                    type: "number",
                                },
                                isEmail: {
                                    type: "boolean",
                                },
                                isUrl: {
                                    type: "boolean",
                                },
                                isUnique: {
                                    type: "boolean",
                                },
                                isLatLong: {
                                    type: "boolean",
                                },
                                isPhoneNumber: {
                                    type: "boolean",
                                },
                                isDecimal: {
                                    type: "boolean",
                                },
                                isInteger: {
                                    type: "boolean",
                                },
                                isPercentage: {
                                    type: "boolean",
                                },
                                min: {
                                    type: "number",
                                },
                                max: {
                                    type: "number",
                                },
                                enum: {
                                    type: "string",
                                },
                            },
                            additionalProperties: false,
                        },
                    },
                    required: ["type", "validations"],
                    additionalProperties: false,
                },
            },
        },
        relations: {
            type: "array",
            items: {
                type: "string",
            },
        },
        enums: {
            type: "object",
            additionalProperties: {
                type: "array",
                items: {
                    type: "string",
                },
            },
        },
    },
    required: ["framework", "projectName", "tables", "relations", "enums"],
    additionalProperties: false,
};

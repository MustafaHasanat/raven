export class Validator {
    constructor() {}

    /**
     * Returns true if the string is not empty, otherwise returns false
     *
     * @param str the targeted string
     * @returns boolean
     */
    nonEmptyString(
        str: string | null | undefined,
        scope?: string
    ): string | null {
        const scopeString = scope ? `"${scope}" ` : "";
        return !!str && str !== ""
            ? null
            : `String ${scopeString}must not be empty`;
    }
}

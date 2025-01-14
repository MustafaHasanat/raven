import { NestCompiler } from "../models/NestCompiler.js";
import { specialLog } from "../utils/helpers/logHelpers.js";

export default async function buildAction() {
    try {
        const compiler = new NestCompiler();
        await compiler.compile();
    } catch (error) {
        specialLog({
            message: `${error}`,
            situation: "ERROR",
            scope: "buildAction",
        });
    }
}

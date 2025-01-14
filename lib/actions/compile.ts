import { NestCompiler } from "../models/NestCompiler";
import { specialLog } from "../utils/helpers/logHelpers.js";

export default async function compileAction() {
    try {
        const compiler = new NestCompiler();
        await compiler.compile();

        specialLog({
            message: "Process finished",
            situation: "RESULT",
        });
    } catch (error) {
        specialLog({
            message: `${error}`,
            situation: "ERROR",
            scope: "dockerizeAction",
        });
        return;
    }
}

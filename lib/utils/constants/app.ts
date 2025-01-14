import { AppProps } from "app";
import { join } from "path";

const appConstants: AppProps = {
    program: {
        name: "raven",
        description: "Build common blocks and files insanely faster!",
        version: {
            number: "1.0.0",
            flags: "-v, --version",
            description: "Output the current version number",
        },
    },
    commands: {
        init: {
            command: "init",
            description:
                "Install the recommended dependencies and add the raven dev-kit.",
        },
        build: {
            command: "build",
            description:
                "Build the 'raven.config.json' file into a final src folder.",
        },
        create: {
            command: "create",
            description:
                "Create the necessary files and directories for the selected 'files-set'.",
            argument: "<files-set>",
            options: {
                aws: {
                    flags: "--aws",
                    description: "Add the AWS service to the app.",
                },
                mailer: {
                    flags: "--mailer",
                    description: "Add a mailing service to the app.",
                },
                mode: {
                    flags: "--mode <mode-type>",
                    description: "Switch between modes",
                },
                special: {
                    flags: "--special <table-name>",
                    description: "Create a special type of tables.",
                },
            },
        },
        dockerize: {
            command: "dockerize",
            description:
                "Configure docker images and containers for the server.",
        },
    },
};

export const getTemplatesDir = () => join("..", "templates");

export default appConstants;

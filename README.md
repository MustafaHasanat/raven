# Raven

Build common blocks and files insanely faster!

## Ho does it work?

### General working principle

We use pre-built (.txt) templates and components to be copied from our library, get some modifications based on your answers to the CLI prompt, and finally pasted as (.ts) files into your project

### Cloning and Injection

We have 2 processes to complete the previously mentioned action, cloning and injection. The tool clones the (.txt) files and replaces the placeholders with the given processed answers before the're placed in the given location. Then it injects some blocks of code in different files so you don't need to modify **ANYTHING**.

## Before starting

### Comments

You'll notice some comments in the generated files. We use those to locate the place in the code where the new blocks should be injected. Therefore, you can **only remove** them after you finish using the tool to build the blocks.

### Placeholders

You might also notice some placeholder variables or values written in an uppercase format (e.g: `FIELD_NAME`). TypeScript will notify you about them (since they're not defined). You can change those whenever you want since their purpose is just to let you know about the options without causing runtime errors.

## Getting started

### Installation

-   Install **nest-cli** globally:  
     `npm install -g @nestjs/cli`

-   Install **raven** globally:  
     `npm install -g @mustafa-alhasanat/raven-nest`

-   Create a new project:  
     `nest new project-name`  
     `cd project-name`

-   Install the recommended dependencies and get the initial dev-kit:  
     `raven init`

> Now you're ready to go!

# Commands API

## The `init` command

Install the recommended dependencies in your project if they're not yet installed. These are different from the ones installed using `nest new` command by default.

> Usage: `raven init`

### The list of dependencies:

```
"@nestjs/config"
"@nestjs/typeorm"
"@nestjs/platform-express"
"@nestjs/serve-static"
"@nestjs/swagger"
"class-validator"
"class-transformer"
"express-session"
"typeorm"
"mysql2 "
"pg"
"uuid"
"bcrypt"
"fs"
```

### The list of dev-dependencies:

```
"@types/multer"
"@types/bcrypt"
"prettier"
```

## The `dockerize` command

Dockerize the application with the necessary modifications to the config files.

> Usage: `raven dockerize`

### Created Images

-   **postgres-db**: an image for initializing a PostgreSQL DB in the container.

-   **nest-app**: the main image that runs the application.

# Specifications

### Directories

-   The main file is supposed to be located at the root `./main.ts`
-   The default used app directory is `./src/`
-   Inside the app directory, we have organized and grouped directories for each section:
    -   schemas
    -   dto
    -   enums
    -   entities
    -   decorators

### Naming

-   The naming convention for all generated files is as follow:  
     `[name].[type].ts`
-   Examples:
    -   `app.module.ts`
    -   `users.controller.ts`
    -   `user-role.enum.ts`
    -   `user.validator.ts`
    -   `create-user.dto.ts`

# Limitations

### Language

Currently, the tool only generate codes in **TypeScript**

### Database

Currently, the only available database is **PostgreSQL**

# Future Updates

-   **MongoDB** will be available to use

---

# Common Errors

### raven doesn't have permission on your terminal

-   Open your terminal (steps for Ubuntu terminals)

-   Open the `.bashrc` file using either VSCode or the terminal itself:

    -   either: `code ~/.bashrc`
    -   or: `nano ~/.bashrc`

-   Provide permission to run raven by adding the following line at the end of the file **(after replacing the uppercase words with yours)**: `chmod +x /home/YOUR_USERNAME/.nvm/versions/node/YOUR_NODE_VERSION/bin/raven`

# Nodejs Boiler Plate Rest API

Quick start code for an node.js application using rest APIs

## What it has

1. Node.js
2. Built with ES6 Standards
3. Routing with REST API's
4. Logging
5. Docker
6. MongoDB Connectivity

## How to run

1. Clone the project

    ```shell
    git clone https://github.com/banothurameshnaik/nodejs-boilerplate-rest-api.git my-project
    cd my-project
    ```

2. Make the environment variables ready

    ```shell
    ENVIRONMENT=local
    PORT=1255
    APP_NAME=my-project
    LOG_LEVEL=debug
    MONGODB_URI=mongodb://localhost/dummy-db
    TOKEN_SECRET=my-secret
    TOKEN_EXPIRES_IN="1 day"
    ```

3. Run the following commands

    ```shell
    npm install
    npm run start
    ```

## Application folder view

```shell
    .
    ├── dist                    # Compiled files
    ├── src                     # Source files
    │   ├── config
    │   │   └── config.js       # Configuration file
    │   ├── models              # Database model files
    │   │   ├── users.js
    │   ├── controllers         # Middleware files for route and database
    │   │   ├── auth.js
    │   │   ├── users.js
    │   ├── routes              # Routes
    │   │   ├── index.js
    │   ├── database            # Database Connections
    │   │   └── mongo.js
    │   ├── utils               # Helper functions
    │   │   ├── constants.js
    │   │   ├── logger.js
    │   │   ├── response.js
    │   │   ├── validators.js
    ├── test                    # Automated tests
    ├── Dockerfile              # Docker file
    ├── LICENSE                 # Licence file
    ├── Makefile                # Make file
    ├── TODO                    # TODO list
    ├── .env                    # Environment variables file
    └── README.md               # Readme file
```

"use strict";

const swaggerAutogen = require("swagger-autogen")();
const glob = require("glob");

const config = require("./config");
const controllers = glob.sync(`${config.rootPath}/controllers/*.js`);
const outputFile = "./controllers/swagger-files/swagger-output.json";

const swaggerMetadata = require("./controllers/swagger-files/swagger-endpoint-metadata");

swaggerAutogen(outputFile, controllers, swaggerMetadata);

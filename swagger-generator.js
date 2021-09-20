"use strict";

const swaggerAutogen = require("swagger-autogen")({openapi: '3.0.0'});
const glob = require("glob");

const config = require("./config");
const controllers = glob.sync(`${config.rootPath}/controllers/*.js`);
const outputFile = "./controllers/swagger-files/swagger-output.json";

const swaggerMetadata = require("./controllers/swagger-files/swagger-endpoint-metadata");

swaggerAutogen(outputFile, controllers, swaggerMetadata);

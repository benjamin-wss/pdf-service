"use strict";

const path = require("path");
const rootPath = path.normalize(__dirname + "/..");

const { appName, environment } = require("./_common");

const config = {
    rootPath,
    app: {
      name: appName,
      environment,
    },
    httpServer: {
      port: process.env.PORT || 3000,
    },
    logging: require("./logging"),
  };
  
  Object.seal(config);
  
  module.exports = config;
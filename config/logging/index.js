"use strict";

const constants = require("../../constants/logging");

const config = {
  httpServer: {
    level: process.env.LOG_LEVEL || constants.levels.debug,
  },
  app: {
    level: process.env.LOG_LEVEL || constants.levels.debug,
  },
};

Object.seal(config);

module.exports = config;

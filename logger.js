"use strict";

const pino = require("pino");

const config = require("./config");
const constants = require("./constants/logging");

const logger = pino({
  name: config.app.name,
  level: config.logging.app.level,
  prettyPrint: { colorize: true },
});

function writeFatalMessage({ message, additionalMetadata = null }) {
  return writeLogMessage({
    message,
    additionalMetadata,
    level: constants.levels.fatal,
  });
}

function writeInfoMessage({ message, additionalMetadata = null }) {
  return writeLogMessage({
    message,
    additionalMetadata,
    level: constants.levels.info,
  });
}

function writeErrorMessage({ message, additionalMetadata = null }) {
  return writeLogMessage({
    message,
    additionalMetadata,
    level: constants.levels.error,
  });
}

function writeDebugMessage({ message, additionalMetadata = null }) {
  return writeLogMessage({
    message,
    additionalMetadata,
    level: constants.levels.debug,
  });
}

function writeLogMessage({
  message,
  level = constants.levels.info,
  additionalMetadata = null,
}) {
  if (!additionalMetadata) {
    logger[level](message);
    return;
  }

  logger[level](additionalMetadata, message);
}

module.exports = {
  writeErrorMessage,
  writeDebugMessage,
  writeInfoMessage,
  writeFatalMessage,
  writeLogMessage,
};

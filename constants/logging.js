"use strict";

const constants = {
  levels: {
    fatal: "fatal",
    error: "error",
    warn: "warn",
    info: "info",
    debug: "debug",
    trace: "trace",
    silent: "silent",
  },
};

Object.freeze(constants);

module.exports = constants;

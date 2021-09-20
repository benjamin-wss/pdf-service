"use strict";

const appName = process.env.APP_NAME || "PDF Handler Service";
const environment = process.env.NODE_ENV || "development";

module.exports = {
  appName,
  environment,
};

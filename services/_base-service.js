"use strict";

const utils = require("../utilities");

const repos = require("../repositories");

module.exports = class BaseService {
  get Utilities() {
    return utils;
  }

  get Repositories() {
    return repos;
  }
};

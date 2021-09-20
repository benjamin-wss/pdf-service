"use strict";

const repos = require("../repositories");

module.exports = class BaseService {
  get Repositories() {
    return repos;
  }
};

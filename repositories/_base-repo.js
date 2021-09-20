"use strict";

const utils = require("../utilities");

module.exports = class BaseRepository {
  get Utilities() {
    return utils;
  }
};

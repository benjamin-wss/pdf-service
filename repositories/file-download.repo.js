"use strict";

const { default: Axios } = require("axios");

module.exports = class FileDownloadRepository {
  async DownloadFile({ url, responseType = 'arraybuffer' }) {
    const response = Axios({
      url,
      method: "GET",
      responseType
    });

    return response;
  }
};

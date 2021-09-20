"use strict";

const { default: Axios } = require("axios");

const BaseClass = require("./_base-repo");

module.exports = class FileDownloadRepository extends BaseClass {
  async DownloadFile({ url, responseType = "arraybuffer" }) {
    try {
      const response = Axios({
        url,
        method: "GET",
        responseType,
      });

      return response;
    } catch (error) {
      return super.Utilities.Axios.handleAxiosErrorWith404(error, true);
    }
  }
};

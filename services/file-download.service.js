"use strict";

const Yup = require("yup");

const BaseClass = require("./_base-service");

module.exports = class FileDownloadService extends BaseClass {
  async DownloadAsBase64(requestPayload) {
    const validationSchema = Yup.object().shape({
      url: Yup.string().required().url().min(1).trim().strict(),
    });

    const validatedInputPayload = await validationSchema.validate(
      requestPayload
    );

    const fileDownloader = new this.Repositories.FileDownload();
    const downloadResponse = await fileDownloader.DownloadFile({
      url: validatedInputPayload.url,
    });

    const response = {
      mimeType: downloadResponse.headers["content-type"],
      response: downloadResponse.data.toString("base64"),
    };

    return response;
  }
};

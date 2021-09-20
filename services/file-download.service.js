"use strict";

const Yup = require("yup");

const BaseClass = require("./_base-service");

module.exports = class FileDownloadService extends BaseClass {
  async DownloadAsBase64(requestPayload) {
    const validatedInputPayload = await this._guardDownloadAsBase64Input(
      requestPayload
    );

    const fileDownloader = new this.Repositories.FileDownload();
    const downloadResponse = await fileDownloader.DownloadFile({
      url: validatedInputPayload.url,
    });

    if (!downloadResponse) {
      throw super.Utilities.Errors.generateServiceHttpError({
        httpErrorCode: 404,
        message: `The url ${validatedInputPayload.url} does not have a file to be converted to base64.`,
      });
    }

    const response = {
      mimeType: downloadResponse.headers["content-type"],
      response: downloadResponse.data.toString("base64"),
    };

    return response;
  }

  async _guardDownloadAsBase64Input(input) {
    try {
      const validationSchema = Yup.object().shape({
        url: Yup.string().required().url().min(1).trim().strict(),
      });

      const validatedInput = await validationSchema.validate(input);

      return validatedInput;
    } catch (error) {
      throw super.Utilities.Errors.convertErrorToHttpServiceError({
        httpErrorCode: 400,
        error,
      });
    }
  }
};

"use strict";

const doc = {
  info: {
    version: "1.0.0",
    title: "PDF Handler",
    description: `A simple service to deal with PDF related items for both the back end and front end.`,
  },
  definitions: {
    RootRouteHealthMessage: {
      status: "Ah La Vache! The server actually runs!",
      timeStamp: "2021-07-06T15:24:36.454Z",
      headers: {
        host: "localhost:3000",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0",
        accept: "application/json",
        "accept-language": "en-US,en;q=0.5",
        "accept-encoding": "gzip, deflate",
        referer: "http://localhost:3000/explorer/",
        connection: "keep-alive",
        "if-none-match": 'W/"1d8-ENAZMuSXLDw7Ucb+eWDbRrDVC0Y"',
      },
    },
    RemotePdfServingRequest: {
      url: "https://www.sanlam.com/investmentseastafrica/Documents/Sanlam-Investments-East-Africa-June-2021.pdf",
    },
    RemotePdfServingBase64Response: {
      response: "base 64 string here",
      mimeType: "octet/stream",
    },
    Error400GenericProd: {
      status: 400,
      message: "url must be a valid URL",
    },
    Error400DownloadDevl: {
      stack:
        "ValidationError: url must be a valid URL\n    at createError (D:\\devl\\skunk-works\\pdf-service\\node_modules\\yup\\lib\\util\\createValidation.js:54:21)\n    at D:\\devl\\skunk-works\\pdf-service\\node_modules\\yup\\lib\\util\\createValidation.js:72:107\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)",
      name: "ValidationError",
      value: {
        url: "not a url",
      },
      path: "url",
      type: "url",
      errors: ["url must be a valid URL"],
      inner: [],
      message: "url must be a valid URL",
      params: {
        value: "not a url",
        originalValue: "not a url",
        path: "url",
        regex: {},
      },
      httpErrorCode: 400,
    },
  },
};

Object.freeze(doc);

module.exports = doc;

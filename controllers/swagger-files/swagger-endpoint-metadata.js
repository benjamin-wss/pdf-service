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
  },
};

Object.freeze(doc);

module.exports = doc;

"use strict";

const Services = require("../services");

const express = require("express");
const router = express.Router();

module.exports = (app) => {
  app.use("/", router);
};

const prefix = "api/v1/download";

router.post(`/${prefix}/base64`, (request, response, next) => {
  // #swagger.operationId = 'getRemotePdfAsBase64'
  // #swagger.tags = ['Downloading']
  // #swagger.produces = ['application/json']
  // #swagger.consumes = ['application/json']
  // #swagger.description = 'Get a remote PDF file as Base64. Note that there is an issue with "swagger-autogen". The accept header should be application/json and not json.'
  /* #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/definitions/RemotePdfServingRequest"
                }
            }
        }
  } */
  /* #swagger.responses[200] = {
      description: 'File successfully downloaded.',
      "content": {
        "json": {
          "schema": {
            $ref: '#/definitions/RemotePdfServingBase64Response'
          }
        }
      }
  } */
  /* #swagger.responses[400-Prod] = {
      description: 'Error 400 in prod.',
      "content": {
        "json": {
          "schema": {
            $ref: '#/definitions/Error400GenericProd'
          }
        }
      }
  } */
  /* #swagger.responses[400-Devl] = {
      description: 'Error 400 in prod.',
      "content": {
        "json": {
          "schema": {
            $ref: '#/definitions/Error400DownloadDevl'
          }
        }
      }
  } */

  new Services.FileDownload()
    .DownloadAsBase64(request.body)
    .then((result) => {
      response.status(200);
      response.json(result);
    })
    .catch((error) => {
      next(error);
    });
});

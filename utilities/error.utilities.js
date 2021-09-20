"use strict";

function generateServiceHttpError({
  httpErrorCode = 500,
  message = "An unexpected error occured.",
}) {
  const error = new Error(message);
  error.httpErrorCode = httpErrorCode;

  return error;
}

function convertErrorToHttpServiceError({ error, httpErrorCode = 500 }) {
  error.httpErrorCode = httpErrorCode;

  return error;
}

module.exports = {
  generateServiceHttpError,
  convertErrorToHttpServiceError,
};

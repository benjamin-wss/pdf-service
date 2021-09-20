"use strict";

function handleAxiosError(error) {
  if (error.response) {
    throw error.response;
  }

  throw error;
}

function handleAxiosErrorWith404(error, is404Null = true) {
  if (
    is404Null === true &&
    error.isAxiosError &&
    error.response &&
    error.response.status &&
    error.response.status === 404
  ) {
    return null;
  }

  handleAxiosError(error);
}

module.exports = {
  handleAxiosError,
  handleAxiosErrorWith404,
};

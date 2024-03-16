"use strict";

module.exports = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  res.status(errorStatusCode).send({
    isError: true, // custom data
    message: err.message,
    cause: err.cause,
  });
};

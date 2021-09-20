const express = require("express");
const router = express.Router();
const swaggerUiExpress = require("swagger-ui-express");

const swaggerFile = require("./swagger-files/swagger-output.json");

module.exports = (app) => {
  app.use("/explorer", router);
};

router.use('/', swaggerUiExpress.serve);
router.get("/", swaggerUiExpress.setup(swaggerFile));

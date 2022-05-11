const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userUploadRouter = require("../routes/upload-images.js");

function configureMiddleware(app) {
  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));
  app.use("/api", userUploadRouter);
}

module.exports = configureMiddleware;

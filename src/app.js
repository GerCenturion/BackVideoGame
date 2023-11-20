const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors"); // Agrega esta línea
const routes = require("./routes/index.js");

const errorHandler = require("./utils/middlewares/errorHandler");
const setHeaders = require("./utils/middlewares/setHeaders");
require("./db.js");

const server = express();

server.name = "API";

// Configuración del middleware CORS
server.use(cors());

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(setHeaders);

server.use("/api", routes);

server.use(errorHandler);

module.exports = server;

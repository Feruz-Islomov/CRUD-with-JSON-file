const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const routes = require("./routes/Routes");

const app = express();

app.use("/api", routes);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen("3008", () => console.log("listening on 3..8"));

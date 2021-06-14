const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
var upload = require("express-fileupload");
const config = require("./utils/config");
var cors = require("cors");
const path = require("path");
require("dotenv").config();

// Settings Cors
app.use(cors());

// // Settings
// app.set('port', config.port || process.env.PORT);
// Settings
app.set("port", 6996);

// Middleware
app.use(express.json());
app.use(upload()); // configure middleware

//Public Folder
const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");
app.use(express.static(CLIENT_BUILD_PATH));

//Route
app.use(require("./routes/index"));

//Route Unkwnown
app.get("*", function (req, res) {
  res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
});

//Starting the server
server.listen(app.get("port"), () => {
  console.log("Server on portt", app.get("port"));
});

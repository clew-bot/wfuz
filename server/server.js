const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const port = 8000;
// const bodyParser = require("body-parser");
// const router = require("express").Router();
// app.use(bodyParser.json());
app.use(express.json({ type: ["application/json", "application/csp-report"] }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});

// listen on the port
app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});

// app.post("/api", (req, res) => {
//   console.log("THIS IS FROM THE BACK END!", req.body);
// });

const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// const mongoStore = require("connect-mongo").default;

const port = 8000;

app.use(express.json({ type: ["application/json", "application/csp-report"] }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(express.json());

mongoose.connect(
  process.env.DB_CONNECT || "mongodb://localhost/wfuz",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Now connected to the wfuz database..");
  }
);

app.get("/", (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});

// listen on the port
app.listen(port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});

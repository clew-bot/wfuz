const express = require("express");

const cors = require("cors");
const app = express();
const port = 8000;
// const router = require("express").Router();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});

// listen on the port
app.listen(port);

app.post("/api", (req, res) => {
  console.log(req.firstName, res);
});

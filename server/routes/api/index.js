const router = require("express").Router();
// const express = require("express");

router.post("/", function(req, res) {
  console.log(req.body);
});

module.exports = router;

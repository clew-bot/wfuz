const router = require("express").Router();
const db = require("../../models");
// const express = require("express");

router.post("/", async function(req, res) {
  console.log(req.body);
  db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAd: req.body.emailAd,
    dogName: req.body.dogName,
  });
});

module.exports = router;

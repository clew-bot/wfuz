const router = require("express").Router();
const db = require("../../models");
// const express = require("express");

router.post("/", async function(req, res) {
  console.log(req.body);
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.emailAd ||
    !req.body.dogName
  ) {
    res
      .status(400)
      .json({ invalidInput: "Not so Good today son.", isAuth: false });
  } else if (req.body) {
    res.status(200).json({ invalidInput: "Creating User....", isAuth: true });
    const userCreate = await db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAd: req.body.emailAd,
      dogName: req.body.dogName,
    });
    console.log(userCreate);
  }
});

module.exports = router;

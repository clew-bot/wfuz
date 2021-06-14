const router = require("express").Router();
const db = require("../../models");

const session = require("express-session");
const MongoStore = require("connect-mongo");

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,

  store: new MongoStore({
    mongoUrl: process.env.DB_CONNECT || "mongodb://localhost/wfuz",
    ttl: 1800,
  }),
};

router.use(session(sess));
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
      id: req.body._id,
    });
    req.session.loggedIn = true;
    req.session.userId = userCreate._id;
    req.session.save();
    console.log(userCreate);
    console.log(req.session.loggedIn);
    console.log(req.session);
  }
});

router.get("/protected", async function(req, res) {
  console.log(req);
  if (req.session.loggedIn) {
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

module.exports = router;

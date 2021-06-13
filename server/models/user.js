const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAd: { type: String },
  dogName: { type: String, default: "NA" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

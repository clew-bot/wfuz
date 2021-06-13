const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailAd: { type: String },
  dogName: { type: String, default: "NA" },
});

userSchema.pre("save", function() {
  this.dogName = bcrypt.hashSync(this.dogName, 10);
});

const User = mongoose.model("User", userSchema);

module.exports = User;

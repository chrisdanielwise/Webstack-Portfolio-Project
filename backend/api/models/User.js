const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    username: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true, unique: true },
    isAdmin: { type: String, default: false },
  }
);

module.exports = mongoose.model("User", UserSchema);


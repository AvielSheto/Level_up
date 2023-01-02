const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  image: String,
  userName: String,
  email: String,
  password: String,
  role: String,
  score: [String],
  project: { type: [mongoose.Types.ObjectId], ref: "projects" },
});

const model = mongoose.model("users", UserSchema);
module.exports = model;

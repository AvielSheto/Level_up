const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema({
    name:String,
    teamMembers : { type: [mongoose.Types.ObjectId], ref: "users" }
}) 

const model = mongoose.model("teams", TeamSchema);
module.exports = model;
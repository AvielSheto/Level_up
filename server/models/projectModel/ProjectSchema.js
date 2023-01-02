const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    projectName:String,
    companyName: String,
    description: String,
    teams : { type: [mongoose.Types.ObjectId], ref: "teams" }
}) 

const model = mongoose.model("projects", ProjectSchema);
module.exports = model;
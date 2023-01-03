const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    projectName:String,
    companyName: String,
    description: String,
    teams : { type: [mongoose.Types.ObjectId], ref: "teams" },
    createdAt: { type: Date, default: Date.now },
}) 

const model = mongoose.model("projects", ProjectSchema);
module.exports = model;
const express = require("express");
const router = express.Router();
const {
    getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../../controllers/project/index");

router.get("/", getAllProjects);

router.get("/:id", getProjectById);

router.post("/", createProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);


module.exports = router
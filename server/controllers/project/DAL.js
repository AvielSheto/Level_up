const projectSchema = require("../../models/projectModel/ProjectSchema");

const findAllProjects = async () => {
  try {
    const projects = await projectSchema.find();
    return projects;
  } catch (error) {
    throw error;
  }
};

const findProjectById = async (id) => {
  try {
    const project = await projectSchema.findById(id);
    return project;
  } catch (error) {
    throw error;
  }
};

const createOneProject = async (obj) => {
  try {
    const project = new projectSchema(obj);
    await project.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateOneProject = async (id, obj) => {
  try {
    await projectSchema.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteOneProject = async (id) => {
  try {
    await projectSchema.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findAllProjects,
  findProjectById,
  createOneProject,
  updateOneProject,
  deleteOneProject
};

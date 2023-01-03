const {
  findAllProjects,
  findProjectById,
  createOneProject,
  updateOneProject,
  deleteOneProject,
  findProjectByTeamId,
} = require("./DAL");

const getAllProjects = async (req, res, next) => {
  try {
    let projects = [];
    if (req.query.teamId) {
      projects = await findProjectByTeamId(req.query.teamId);
    } else {
      projects = await findAllProjects();
    }
    res.status(200).json(projects);
  } catch (err) {
    next(err);
  }
};

const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await findProjectById(id);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
};

const createProject = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await createOneProject(data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateOneProject(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOneProject(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};

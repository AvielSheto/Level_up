const {
  findAllTeams,
  findTeamById,
  createOneTeam,
  updateOneTeam,
  deleteOneTeam,
} = require("./DAL");

const getAllTeams = async (req, res, next) => {
  try {
    const teams = await findAllTeams();
    res.status(200).json(teams);
  } catch (err) {
    next(err);
  }
};

const getTeamById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const team = await findTeamById(id);
    res.status(200).json(team);
  } catch (err) {
    next(err);
  }
};

const createTeam = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await createOneTeam(data);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const updateTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await updateOneTeam(id, obj);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const deleteTeam = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteOneTeam(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
};

const teamSchema = require("../../models/teamModel/TeamSchema");

const findAllTeams = async () => {
  try {
    const teams = await teamSchema.find();
    return teams;
  } catch (error) {
    throw error;
  }
};

const findTeamById = async (id) => {
  try {
    const team = await teamSchema.findById(id);
    return team;
  } catch (error) {
    throw error;
  }
};

const createOneTeam = async (obj) => {
  try {
    const team = new teamSchema(obj);
    await team.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateOneTeam = async (id, obj) => {
  try {
    await teamSchema.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteOneTeam = async (id) => {
  try {
    await teamSchema.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findAllTeams,
  findTeamById,
  createOneTeam,
  updateOneTeam,
  deleteOneTeam
};

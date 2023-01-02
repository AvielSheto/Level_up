const userSchema = require("../../models/userModel/UserSchema");

const findAllUsers = async () => {
  try {
    const users = await userSchema.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const findUserById = async (id) => {
  try {
    const user = await userSchema.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

const createOneUser = async (obj) => {
  try {
    const user = new userSchema(obj);
    await user.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateOneUser = async (id, obj) => {
  try {
    await userSchema.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteOneUser = async (id) => {
  try {
    await userSchema.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findAllUsers,
  findUserById,
  createOneUser,
  updateOneUser,
  deleteOneUser,
};

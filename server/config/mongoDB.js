const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.DATABASE_API);
    console.log("The DB login was successful");
  } catch (error) {
    throw error;
  }
};

module.exports = connectDB;

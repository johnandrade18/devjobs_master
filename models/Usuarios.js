const mongoose = require("mongoose");
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    rol: String
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

module.exports = mongoose.model("User", userSchema);
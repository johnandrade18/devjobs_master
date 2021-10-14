const User = require("../models/Usuarios");

module.exports = class UserController{
  static async createUser (request, response) {
    try {
      const {username,email,password,rol}= request.body;
      const newUser = new User (
        {
          username,
          email,
          password : await User.encryptPassword(password),
          rol
        }
      )
      const user = await User.create(newUser);

      response.status(200).json(user);
    } catch (error) {
      response.status(400).json({message: error.message});
    }
  };
}

// export const createUser = async (req, res) => {
//   try {
//     const { username, email, password, roles } = req.body;

//     const rolesFound = await Role.find({ name: { $in: roles } });

//     // creating a new User
//     const user = new User({
//       username,
//       email,
//       password,
//       roles: rolesFound.map((role) => role._id),
//     });

//     // encrypting password
//     user.password = await User.encryptPassword(user.password);

//     // saving the new user
//     const savedUser = await user.save();

//     return res.status(200).json({
//       _id: savedUser._id,
//       username: savedUser.username,
//       email: savedUser.email,
//       roles: savedUser.roles,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getUsers = async (req, res) => {};

// export const getUser = async (req, res) => {};

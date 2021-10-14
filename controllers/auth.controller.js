// import jwt from "jsonwebtoken";
// import config from "../config/config";

const User = require("../models/Usuarios");
const jwt = require("jsonwebtoken");
const conf = require("../config/config")
module.exports = class AuthController{
  static async signIn (request, response) {
    try {
      const userFound = await User.findOne({ email: request.body.email });
      if (!userFound) return response.status(400).json({ message: "User Not Found" });
      const matchPassword = await User.comparePassword(request.body.password, userFound.password);
      if (!matchPassword)
        return response.status(401).json({
          message: "Invalid Password",
          code: 101
      });
      const token = jwt.sign({ id: userFound._id }, conf.default.SECRET,  {
        expiresIn: 86400, // 24 hours
      });
      let res = {
        token: token,
        rol: userFound.rol,
        code: 100,
        msg: 'inicio de sesión con exito'
      }
      response.status(200).json(res);
    } catch (error) {
      response.status(400).json({message: error.message});
    }
  };
}

// export const signUp = async (req, res) => {
//   try {
//     // Getting the Request Body
//     const { username, email, password, roles } = req.body;
//     // Creating a new User Object
//     const newUser = new User({
//       username,
//       email,
//       password: await User.encryptPassword(password),
//     });

//     // checking for roles
//     if (req.body.roles) {
//       const foundRoles = await Role.find({ name: { $in: roles } });
//       newUser.roles = foundRoles.map((role) => role._id);
//     } else {
//       const role = await Role.findOne({ name: "user" });
//       newUser.roles = [role._id];
//     }

//     // Saving the User Object in Mongodb
//     const savedUser = await newUser.save();

//     // Create a token
//     const token = jwt.sign({ id: savedUser._id }, config.SECRET, config.KEY, {
//       expiresIn: 86400, // 24 hours
//     });

//     return res.status(200).json({ token });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(error);
//   }
// };

// export const signin = async (req, res) => {
//   try {
//     // Request body email can be an email or username
//     const userFound = await User.findOne({ email: req.body.email }).populate(
//       "roles"
//     );

//     if (!userFound) return res.status(400).json({ message: "User Not Found" });

//     const matchPassword = await User.comparePassword(
//       req.body.password,
//       userFound.password
//     );

//     if (!matchPassword)
//       return res.status(401).json({
//         token: null,
//         message: "Invalid Password",
//       });

//     const token = jwt.sign({ id: userFound._id }, config.SECRET, config.KEY, {
//       expiresIn: 86400, // 24 hours
//     });

//     res.json({ token });
//   } catch (error) {
//     console.log(error);
//   }
// };

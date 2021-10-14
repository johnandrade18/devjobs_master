import jwt from "jsonwebtoken";
import config from "../config/config";
import User from "../models/Usuarios";
import Role from "../models/Roles";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, config.SECRET, config.KEY);
    req.userId = decoded.id;

    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "No user found" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
};

export const isUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "user") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require User Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "administrator") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require Administrator Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};

export const isCompany = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "company") {
        next();
        return;
      }
    }

    return res.status(403).json({ message: "Require company Role!" });
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: error });
  }
};

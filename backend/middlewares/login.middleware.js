const jwt = require("jsonwebtoken");
const { AdminModel } = require("../models/Admin.model");
const { UserModel } = require("../models/User.model");
require("dotenv").config();

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    // Finding the user in the database with the help of email
    const user = await UserModel.findOne({ email });
    const admin = await AdminModel.findOne({ email });
    console.log(user);
    console.log(admin);
    if (user) {
      // Directly comparing plain passwords (avoid in production)
      if (password === user.password) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expiration time
            data: {
              authorID: user._id,
              author: user.name,
              role: "user",
            },
          },
          process.env.secretKey // Secret key for JWT
        );
        res.status(200).send({
          msg: "Login Successful",
          token,
          user: user.name,
        });
      } else {
        res.status(401).send({
          msg: "Invalid Credentials",
        });
      }
    } else if (admin) {
      // Directly comparing plain passwords (avoid in production)
      if (password === admin.password) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expiration time
            data: {
              authorID: admin._id,
              author: admin.name,
              role: "admin",
            },
          },
          process.env.secretKey // Secret key for JWT
        );
        res.status(200).send({
          msg: "Login Successful",
          token,
          admin: admin.name,
        });
      } else {
        res.status(401).send({
          msg: "Invalid Credentials",
        });
      }
    } else {
      res.status(404).send({ msg: "User Does Not Exist" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { login };

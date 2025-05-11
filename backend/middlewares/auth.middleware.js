const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    token = token.split(" ")[1];

    jwt.verify(token, process.env.secretKey, (error, decoded) => {
      if (error) {
        return res.status(401).send({ msg: "Invalid or expired token" });
      }

      // Safely assign to req.user instead of req.body
      req.user = {
        authorID: decoded.data.authorID,
        author: decoded.data.author,
        role: decoded.data.role,
      };

      next(); // ✅ Only call next if token is valid
    });
  } else {
    return res.status(401).send({ msg: "Please login to access" });
  }
};

module.exports = { auth };

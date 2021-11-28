const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

module.exports = function(req, res, next) {
    const token = req.headers["x-custom-header"];
    
    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};
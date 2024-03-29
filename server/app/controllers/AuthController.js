const db = require("../models");
const User = db.users;
const encryption = require("../Utils");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email },function(err, data) {
        if (data) {
            res.send({ error: true, message: "Email is already in use." });
            return;
        }
        encryption.cryptPassword(req.body.password, (err, hash) => {
            const userModel = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            });

            // Save User in the database
            userModel.save(userModel)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    error: true,
                    message: err.message || "Some error occurred while creating the Event."
                });
            });
        });
    });
};

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email },function(err, data) {
        if (!data) {
            res.send({ message: "Email or Password is wrong.", error: true });
            return;
        }
        encryption.comparePassword(req.body.password, data.password, (err, match) => {
            if (match) {
                const token = jwt.sign(
                    { id: data._id },
                    config.secret,
                    {
                        expiresIn: 86400 // 24 hours
                    }
                );
                res.send({ token, error: false });
                return;
            }
            res.send({ message: "Email or Password is wrong.", error: true });
        });
    });
};

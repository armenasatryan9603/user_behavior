const db = require("../models");
const User = db.users;
const encryption = require("../Utils");

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email },function(err, data) {
        if (data) {
            res.send("Email is already in use.");
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
                    message: err.message || "Some error occurred while creating the Event."
                });
            });
        });
    });
};

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email },function(err, data) {
        if (!data) {
            res.send("Email or Password is wrong.");
            return;
        }
        encryption.comparePassword(req.body.password, data.password, (err, match) => {
            if (match) {
                res.send(data._id);
                return;
            }
            res.send("Email or Password is wrong.");
        });
    });
};

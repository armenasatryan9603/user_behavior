const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.events = require("./eventModel.js")(mongoose);
db.users = require("./userModel.js")(mongoose);

module.exports = db;

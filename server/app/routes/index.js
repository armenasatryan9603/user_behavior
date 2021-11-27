const signupMiddleWare = require("../middlewares/signupMiddleware");

module.exports = app => {
    const auth = require("../controllers/AuthController");

    var router = require("express").Router();

    router.post("/signin",  auth.signin);
    router.post("/signup", signupMiddleWare, auth.signup);


    app.use("/", router);
};

const signupMiddleware = require("../middlewares/signupMiddleware");
const eventCreateMiddleware = require("../middlewares/eventCreateMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

module.exports = app => {
    const events = require("../controllers/EventController.js");
    const auth = require("../controllers/AuthController");

    var router = require("express").Router();

    router.post("/signin",  auth.signin);
    router.post("/signup", signupMiddleware, auth.signup);

    // Create a new Event
    router.post("/events", [authMiddleware, eventCreateMiddleware], events.create);
    
    // Retrieve all Events
    router.get("/", events.getEvents);

    // Update a Event with id
    router.put("/:id", events.update);

    //Partly Update a Event with id
    router.patch("/:id", events.partlyUpdate);

    // Delete a Event with id
    router.delete("/:id", events.delete);

    app.use("/", router);
};

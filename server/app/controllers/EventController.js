const db = require("../models");
const Event = db.events;

// Create and Save a new Event
exports.create = (req, res) => {
    const event = new Event({
        userId: "string",
        url: req.body.url,
        eventDetails: req.body.event,
    });
    // Save Event in the database
    event.save(event)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};

// TODO
// Retrieve all events.
exports.getEvents = (req, res) => {

};

// Update a Event by id
exports.update = (req, res) => {
  
};

// Delete a Event
exports.delete = (req, res) => {

};

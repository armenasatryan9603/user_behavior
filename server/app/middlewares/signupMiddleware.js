
module.exports = function (req, res, next) {
    if (!req.body.email || !req.body.name || !req.body.password) {
        res.status(400).send({ message: "All field is required !" });
        return;
    }
    next();
}
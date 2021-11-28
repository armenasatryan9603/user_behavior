
module.exports = function (req, res, next) {
    if (!Object.keys(req.body).length) {
        res.status(400).send({ message: "Content can not be empty !" });
        return;
    }
    next();
}
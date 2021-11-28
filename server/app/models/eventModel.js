module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            userId: String,
            url: String,
            eventDetails: Object,
        },
        {
            timestamps: true
        }
    );

    return mongoose.model("event", schema);
};

module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: String,
            email: String,
            password: String,
        },
        {
            timestamps: true
        }
    );

    return mongoose.model("user", schema);
};

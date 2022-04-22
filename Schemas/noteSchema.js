const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    description: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    userId: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
});

module.exports = mongoose.model("note", noteSchema);
const mongoose = require('mongoose');

const { Schema } = mongoose; // Is like  mongoose.Schema

const mySchema = new Schema({
    ObjectId: {
        type: String,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    favoriteColor: {
        type: String,
        required: true,
    },
    birthday: {
        type: String,
        required: true,
    },
});

const Model = mongoose.model('contacts', mySchema);
module.exports = Model;

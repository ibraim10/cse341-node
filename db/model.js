const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: String,
});

const Model = mongoose.model('contacts', mySchema);
module.exports = Model;
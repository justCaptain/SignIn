
var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
    user: string,
    password: string
});
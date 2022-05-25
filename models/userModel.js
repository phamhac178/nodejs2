const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
    
});
const Todo = mongoose.model("userModel", user);
module.exports = Todo;

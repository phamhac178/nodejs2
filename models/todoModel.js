const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoList = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: 0
    },
    date: {
        type: Date,
       
    },
    userId: {
        type: String,
    }
});
const Todo = mongoose.model("todoList", todoList);
module.exports = Todo;

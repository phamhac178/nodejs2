const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoList = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    userId: {
        type: Number,
    }
});
const Todo = mongoose.model("todoList", todoList);
module.exports = Todo;

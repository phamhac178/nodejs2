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
    begin: {
        type: String,
       
    },
    end:{
        type:String
    },
    userId: {
        type: String,
    }
});
const Todo = mongoose.model("todoList", todoList);
module.exports = Todo;

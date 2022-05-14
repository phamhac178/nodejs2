const express = require("express");
const { $where } = require("../../models/todoModel");
const router = express.Router();
const todoController = require("../app/controllers/todo.controller");

router.route("/").get(todoController.todo).post(todoController.todocreate);
router.route("/:id").get(todoController.deleteTodo);
router.route("/update").post(todoController.todoupdate);

module.exports = router;

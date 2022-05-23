const express = require("express");
const { $where } = require("../../models/todoModel");
const router = express.Router();
const todoController = require("../app/controllers/todo.controller");

router.route("/").get(todoController.login);
router.route("/list").get(todoController.todo);
router.route("/create").post(todoController.todocreate);
router.route("/delete/:id").get(todoController.deleteTodo);
router.route("/update").post(todoController.todoupdate);

module.exports = router;

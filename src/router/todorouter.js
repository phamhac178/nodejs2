const express = require("express");
const { $where } = require("../../models/todoModel");
const router = express.Router();
const todoController = require("../app/controllers/todo.controller");
const userController = require("../app/controllers/user.controller");

router.route("/").get(userController.login);
router.route("/login").post(userController.onLogin);


router.route("/register").get(userController.register);
router.route("/register").post(userController.registerSubmit);



router.route("/list").get(todoController.todo);
router.route("/create").post(todoController.todocreate);
router.route("/delete/:id").get(todoController.deleteTodo);
router.route("/update").post(todoController.todoupdate);

module.exports = router;

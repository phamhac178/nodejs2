const express = require("express");
const { $where } = require("../../models/todoModel");
const router = express.Router();
const todoController = require("../app/controllers/todo.controller");
const userController = require("../app/controllers/user.controller");

router.route("/").get(userController.login);
router.route("/login").post(userController.onLogin);

router.route("/register").get(userController.register);
router.route("/register").post(userController.registerSubmit);

router.route("/logout").get(userController.logout);

router.route("/list").get(todoController.todo);
// tạo
router.route("/create").post(todoController.todocreate);
// xóa
router.route("/delete/:id").get(todoController.deleteTodo);
// sửa
router
    .route("/update/:id")
    .get(todoController.getUpdate)
    .post(todoController.todoupdate);

module.exports = router;

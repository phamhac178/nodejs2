const Todo = require("../../../models/todoModel");
class todocontroller {
    async todo(req, res) {
        const todos = await Todo.find();
        res.render("todo", { todos });
    }
    // async todoremove(req, res) {
    //     const todos = await Todo.find({ isRemove: true });
    //     res.render("todo", { todos });
    // }
    async todocreate(req, res) {
        // console.log(req.body);
        // const todo = await Todo.create(req.body);
        res.redirect("/");
    }
    async deleteTodo(req, res) {
        // const todo = await Todo.findByIdAndDelete(req.params.id);
        // res.redirect("/");
    }
    todoupdate(req, res) {
        // Todo.update({ _id: req.body.id }, { $set: req.body })
        //     .exec()
        //     .then(() => {
        //         res.redirect("/");
        //     });
        res.redirect("/");
    }

    login(req,res){
        res.render("index");
    }
}
// exports.createTodo =async (req, res)=>{
//     const todo = await Todo.create(req.body);
//     res.json(todo)
// }
// exports.getTodos = async (req, res)=>{
//     const todos = await Todo.find();
//     res.json(todos)
// }
module.exports = new todocontroller();

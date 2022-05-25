const Todo = require("../../../models/todoModel");
class todocontroller {
    
    async todo(req, res) {
        if(req.session.userId){
            var query = {userId: req.session.userId};
            const todos = await Todo.find(query);
            res.render("todo", { todos });
        }else{
            res.redirect("/");
        }

    }
    // async todoremove(req, res) {
    //     const todos = await Todo.find({ isRemove: true });
    //     res.render("todo", { todos });
    // }
    async todocreate(req, res) {
        console.log(req.body.date)
        let obj = {title: req.body.title, status: 0, date : req.body.date, userId: req.session.userId};
        const todo = await Todo.create(obj);
        res.redirect("/list");
    }
    async deleteTodo(req, res) {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.redirect("/list");
    }
    todoupdate(req, res) {
        // Todo.update({ _id: req.body.id }, { $set: req.body })
        //     .exec()
        //     .then(() => {
        //         res.redirect("/");
        //     });
        res.redirect("/");
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

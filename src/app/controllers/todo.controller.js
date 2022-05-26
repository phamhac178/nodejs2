const Todo = require("../../../models/todoModel");
class todocontroller {
    async todo(req, res) {
        if (req.session.userId) {
            var query = { userId: req.session.userId };
            const todos = await Todo.find(query);
            res.render("todo", { todos });
        } else {
            res.redirect("/");
        }
    }
    // async todoremove(req, res) {
    //     const todos = await Todo.find({ isRemove: true });
    //     res.render("todo", { todos });
    // }
    
    async todocreate(req, res) {
        if (req.session.userId) {
            var beginDate = req.body.begin.replace('T',' ');
            var d = new Date(beginDate);
            console.log(d)
            var endDate = req.body.end.replace('T',' ');
            let obj = {
                title: req.body.title,
                status: 0,
                begin: beginDate,
                end : endDate,
                userId: req.session.userId,
            };
            console.log(obj)
            const todo = await Todo.create(obj);
            res.redirect("/list");
        } else {
            res.redirect("/");
        }
        
    }
    async deleteTodo(req, res) {
        if (req.session.userId) {
            const todo = await Todo.findByIdAndDelete(req.params.id);
        res.redirect("/list");
        } else {
            res.redirect("/");
        }
        
    }
    // sửa

    // lấy view update
    async getUpdate(req, res, next) {
        if (req.session.userId) {
            const todo = await Todo.findById(req.params.id);
            todo.begin = todo.begin.replace(' ','T');
            todo.end = todo.end.replace(' ','T');
            res.render("update", { todo });
        } else {
            res.redirect("/");
        }
        
    }
    async todoupdate(req, res, next) {
        if (req.session.userId) {
            const todos = await Todo.find();
            const b = req.body.begin.replace('T',' ' );
            const e = req.body.end.replace('T',' ' );
            const data = {
                title: req.body.title,
                begin: b,
                end : e,
                status: req.body.status
            };
        console.log(data);
        const result = await Todo.findByIdAndUpdate(req.params.id, data);
        res.redirect("/list");
        } else {
            res.redirect("/");
        }
        
    }
}
// exports.createTodo =async (req,   res)=>{
//     const todo = await Todo.create(req.body);
//     res.json(todo)
// }
// exports.getTodos = async (req, res)=>{
//     const todos = await Todo.find();
//     res.json(todos)
// }
module.exports = new todocontroller();

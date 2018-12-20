const Todo = require('../model/todo')
const User = require('../model/user')

module.exports = {
    createTodo: (req, res) => {
        console.log(req.body)
        const todoDetails = req.body;
        const currentUserId = todoDetails.userId;
        const newTodo = new Todo({
            userId: currentUserId,
            title: todoDetails.title,
            description: todoDetails.description
        })

        newTodo.save((err, todoDetails) => {
            if(err) {
                res.json({
                    msg: Error
                })
            } else {
                res.json({
                    data: todoDetails
                })
            }
        })
    },
    getTodoById: (req, res) => {
        const id = req.params.id;
        User.findById(id, function(err, user){
            if(!user) {
                return res.status(404).send({msg: "user not found"})
            } 
            Todo.find({ userId: id }, function(err, allTodos) {
                if(err) throw err;
                res.json({ todos: allTodos });
              });
        })
    },
    deleteTodo: (req, res) => {
        const id = req.body.id;
        Todo.remove({_id: id}, function(err){
            if(err){
                console.log("error")
            } else {
                Todo.find({ userId: req.user._id }, function(err, allTodos) {
                    if(err) throw err;
                    res.json({ todos: allTodos });
                  });
            }
        })
    } 
}
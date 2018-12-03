const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs')
const mongoose = require('mongoose');

const port = 8000;

mongoose.connect('mongodb://localhost/todos',{ useNewUrlParser: true },  function(err, connection) {
  if(err) throw err
  else console.log('Connected to mongodb')
});

const todoSchema = new mongoose.Schema({
    todo : String,
    done : Boolean,
    description: String
})

const Todo = mongoose.model('Todo', todoSchema);

app.set('views', './views');
app.set('view engine', 'ejs');


//Middlewares
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
    const data = `Request - ${req.method} - ${req.url} - ${new Date()}`;
    fs.appendFile('access.log', data, (err, savedData) => {
        next();
    } )
})

//Middleware for override the request method
app.use((req, res, next) => {
    if(req.body._method === 'DELETE') {
        req.method = 'delete'
        next()
    } else if(req.body._method === 'PUT'){
        req.method = 'put'
        next();
    } else {
        next()
    }
})



//Render the home page
app.get('/', (req, res) => {
    Todo.find({}, (err, data) => {
        res.render('index', {todos : data})
    })
});


//Create To do
app.get('/create', (req, res) => {
    res.render('createTodo')
})

app.post('/create', (req, res) => {
    let item = req.body;
    item.done = false;

    let newTodo = new Todo(item);

    newTodo.save((err, saveData) => {
        res.redirect('/')
    })
    
})

//

//todo-details
app.get('/todos/:id', (req, res) => {
    Todo.find({ _id: req.params.id}, (err, todo) => {
        console.log(todo, 'todo')
        res.render('todoDetail', {todo: todo})
    })

})
//delete todo
app.delete('/delete/:id', function(req, res) {
    var id = req.params.id;
        Todo.remove({
            _id: id 
        }, function(err){
            if (err) {
                console.log(err)
            }
            else {
               return res.redirect('/');
            }
            
        });
    });

//Edit
    app.put('/todos/:id/edit', (req, res) => {
        var id = req.params.id;
        console.log(req.body)

        Todo.updateOne({_id : id}, {$set : {todo: req.body.todo}}, (err, done) => {
            res.redirect('/');
        })
    })

app.get('/todos/:id/edit', (req, res) => {
    let id = req.params.id;
    console.log()
    Todo.find({_id : id}, (err, data) => {
        console.log(data)
        res.render('edit-form', {todo : data})
    })
    
    
});

app.listen(port, () => {
    console.log(`Server is running at: ${port}`)
})
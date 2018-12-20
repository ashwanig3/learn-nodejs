const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    title: String,
    description: String
  });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
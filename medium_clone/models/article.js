const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    description: String,
    body: String,
    claps: Number
  })

  const Articles = mongoose.model('Articles', articleSchema)

  module.exports = Articles;
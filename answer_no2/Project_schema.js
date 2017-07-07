const mongoose = require('mongoose')
const Schema = mongoose.Schema

let projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
	user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
})

let Project = mongoose.model('Project', projectSchema)

module.exports = Project

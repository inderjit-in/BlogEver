const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema({
  Name: {type: String, required:true, unique:true, trim:true}
},{ timestamps: true })

module.exports = mongoose.model('Tag',TagSchema)
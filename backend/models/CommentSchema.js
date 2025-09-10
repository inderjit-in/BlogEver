const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    Blog: {type: mongoose.Schema.Types.ObjectId, ref:'Blog', required:true},
    User: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    Parent: { type: mongoose.Schema.Types.ObjectId, ref: "Comment", default: null },
    Content: { type: String, required: true },
},{ timestamps: true })

module.exports = mongoose.model('Comment',CommentSchema)
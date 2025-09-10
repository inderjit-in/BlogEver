const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    Auther:{type: mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    Title:{type: String, required:true},
    Content:{type: String, required:true},
    CoverImage:{type:String, required:true},
    View:{type: Number, default:0},
    LikeCount: { type: Number, default: 0 },
    CommentCount: { type: Number, default: 0 },
    Tags:[{type: mongoose.Schema.Types.ObjectId, ref:'Tag'}]
}, { timestamps: true })

module.exports = mongoose.model('Blog',BlogSchema)
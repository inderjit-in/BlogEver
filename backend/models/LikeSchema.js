const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
   User: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   Blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true }
},{ timestamps: true })

LikeSchema.index({ User:1, Blog:1 }, { unique: true });

module.exports = mongoose.model('Like',LikeSchema)
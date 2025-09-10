const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FullName:{type:String, required:true},
    UserName:{type:String, required:true},
    Email:{type:String, required:true},
    Password:{type:String, required:true},
    OTP:{type:String, required:true},
    BlogsWrite:{type:Number, default:0},
    Bio:{type:String, default:''},
    ProfileImage:{type:String, default:''}
})

module.exports = mongoose.model('User',UserSchema)
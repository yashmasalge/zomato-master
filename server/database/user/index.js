import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    fullname : {type:String , required:true},
    email : {type:String , required:true},
    password : {type:String , required:true},
    address : [{detail:{type:String} , for:{type:String} }],
    phonenumber : [{type:Number}]
})

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
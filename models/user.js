const mongoose = require('mongoose');
const {Schema, model} = mongoose;
const UserSchema = new Schema({
    username:String,
    email:String,
    phone:Number,
});
module.exports = model('User', UserSchema);
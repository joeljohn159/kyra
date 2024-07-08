const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email : {
        type: String,
        required: true
    },
    password : {
        type : String,
        require: true
    },
    dob:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    role: {
        type:String,
        enum : ['user', 'owner' , 'admin'],
        default : 'user'
    }
},{
    timestamps:true
})

module.exports = mongoose.model('users', UserSchema);

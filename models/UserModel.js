const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema =Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    intern_start_date:{
        type:Number,
        required:true
    },
    intern_end_date:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('User',userSchema);
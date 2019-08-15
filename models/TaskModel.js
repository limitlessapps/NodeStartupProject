const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    subtasks:{
        type:[String],
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    created_by:{
        type:String,
        required:true
    },
    responsible_person:{
        type:[String],
        required:true
    },
    participants:{
        type:[String],
        required:true
    },
});

module.exports = mongoose.model('Talk',taskSchema);
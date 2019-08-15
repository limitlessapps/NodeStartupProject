const Task = require('../models/TaskModel');

exports.createTask = (req,res,next) =>{
    const task = new Task({
        title:req.body.title,
        description:req.body.description,
        subtasks:req.body.subtasks,
        date:req.body.date,
        created_by:req.body.created_by,
        responsible_person:req.body.responsible_person,
        participants:req.body.participants
    });
    task.save().then(
        ()=>{
            res.status(200).json(task);
        }
    ).catch(
        (Error) =>{
            res.status(400).json({
                error:error
            });
        }
    )
}
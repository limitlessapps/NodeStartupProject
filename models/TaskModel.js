const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subtasks: {
        type: [String],
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    created_by: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    responsible_person: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    participants: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
});

module.exports = mongoose.model('Task', taskSchema);
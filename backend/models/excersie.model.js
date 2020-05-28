const Mongoose = require('mongoose');
const Schema = Mongoose.Schema
const exercisechema = new Schema({
    username: {
        type: String ,
        required: true,
    },
    description: {type: String, required: true},
    duration: {type: String, required: true},
    date: {type: String, required: true},
},{
    timestamps: true,
});

const Exercise = Mongoose.model('exercise', exercisechema);
module.exports = Exercise;
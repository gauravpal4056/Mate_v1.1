const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({

    rollNo:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    orientation:{
        type: Number//only 3 chances for relogin
    },
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student;

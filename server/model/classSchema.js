const mongoose = require('mongoose') 

const classSchema = new mongoose.Schema({
    classId:{
        type: string,
        required: true,
    },
    className: {
        type: string,
        required: true
    },
    students: [String],//id of students

    calendar: [Object],

    notice:[Object]

})

const Class = mongoose.model('Class', classSchema)

module.exports = Class
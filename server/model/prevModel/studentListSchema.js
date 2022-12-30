const mongoose = require('mongoose') 
const Student = require('./studentSchema')

const studentListSchema = new mongoose.Schema({
    class: {
        type: string,
        required: true
    },
    students: [Student]

})

const StudentList = mongoose.model('StudentList', studentListSchema)

module.exports = StudentList
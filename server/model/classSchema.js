const mongoose = require('mongoose') 
const StudentList = require('./studentListSchema')
const Config = require('./config');

const classSchema = new mongoose.Schema({
    name: {
        type: Boolean,
        required: true
    },
    students: StudentList,
    config: Config

})

const Class = mongoose.model('Class', classSchema)

module.exports = Class
const mongoose = require('mongoose') 

const Class = require('./classSchema')
const classSchema = new mongoose.Schema({
    collegeId:string,

    admins:[string],
    
    classes:[string],

})

const Class = mongoose.model('Class', classSchema)

module.exports = Class
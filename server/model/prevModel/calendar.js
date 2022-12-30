const mongoose = require('mongoose') 

const calendarSchema = new mongoose.Schema({
    collegeCode:{
        type:String,
        required:true,
    },
    calendar:{
        type: [object],
    },
})

const Calendar = mongoose.model('Config', calendarSchema)

module.exports = Calendar
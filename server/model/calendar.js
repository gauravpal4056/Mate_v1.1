const mongoose = require('mongoose') 

const calendarSchema = new mongoose.Schema({
    master: {
        type: Boolean,
        required: true
    },
    attendenceTime:{
        type: String,
        required: true
    },
})

const Calendar = mongoose.model('Config', calendarSchema)

module.exports = Calendar
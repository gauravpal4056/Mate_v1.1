const mongoose = require('mongoose') 

const configSchema = new mongoose.Schema({
    master: {
        type: Boolean,
        required: true
    },
    attendenceTime:{
        type: String,
        required: true
    },
})

const Config = mongoose.model('Config', configSchema)

module.exports = Config
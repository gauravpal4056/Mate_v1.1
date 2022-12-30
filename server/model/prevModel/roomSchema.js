
const mongoose = require('mongoose');

const RoomSchema =  new mongoose.Schema({
    collegeID: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    admins:{
        type:[Object]
    },
    classes:[Object],

})

const Room = mongoose.model('Room', RoomSchema)

module.exports = Room;
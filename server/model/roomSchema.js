
const mongoose = require('mongoose');
const Admin = require('./adminSchema');
const Class = require('./classSchema');
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
        type: [Admin]
    },
    classes:[Class],

})

const Room = mongoose.model('Room', RoomSchema)

moduole.exports = Room;
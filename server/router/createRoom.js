const express = require('express')
const router = express.Router()
const createRoom = require('../controller/createRoom')
router.post('/create', createRoom)
router.get('/create', (req, res) => {
    res.send("createGetisruning")
    console.log("create route accessed");
})

// router.post('/create', async (req, res) =>{
    
//     const rooms = await Config.find({}) 
//     if(rooms.length>0){
//         console.log(rooms)
//         res.send("room exist")
//     }
//     else{
//         res.send("room not exist")
//         res.redirect("./createRoom")
//     }
// })

module.exports = router;


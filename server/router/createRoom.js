const express = require('express')
const router = express.Router()
const register = require('../controller/register')
const Config = require("../model/config")
router.post('/auth', register)

router.get('/auth', async (req, res) =>{
    
    const rooms = await Config.find({}) 
    if(rooms.length>0){
        console.log(rooms)
        res.send("room exist")
    }
    else{
        res.send("room not exist")
        res.redirect("./createRoom")
    }
})

module.exports = router;


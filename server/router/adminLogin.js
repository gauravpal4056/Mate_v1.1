const Room = require('../model/roomSchema')
const Admin = require('../model/adminSchema')

const adminRegister = async(req, res) => {
    const collegeID = req.body.id;
    try{
        const college = await Room.findOne({collegeID: collegeID})
        const {id, name} = req.body;
        const newAdmin = Admin({
            user:"admin",
            name,
            password: "123",
        });
        const savedAdmin = await newAdmin.save();
        console.log(savedAdmin);
        if(college){
            console.log("college found " + college);
            existAdmin = college.admins.filter((admin) => admin.name === req.body.name);
            console.log("all the existing admins are "+college.admins);
            if(existAdmin){
                res.status(300).json({message: 'admin already exist'})
            }
            else {
                // const admin =  Admin({user: "admin",name: "mukesh", password:"123" })
                // savedAdmin = await admin.save()
                // college.admins.push(savedAdmin)
                // const res = await college.save();
            }
            }
    }
    catch(err){
        console.log(err); 
    }
}
const express = require('express')
const router = express.Router()
const register = require('../controller/register')
const Config = require("../model/config")
router.post('/registeradmin', adminRegister)

router.get('/adminregister', async (req, res) =>{
    
    // const rooms = await Config.find({}) 
    // if(rooms.length>0){
    //     res.status(404).json({message:"no room found"})  
    //     res.send("room exist")
    // }
    // else{
    //     res.send("room not exist")
    //     res.redirect("./createRoom")
    // }
    res.send("server admin regis hit")
})

module.exports = router;

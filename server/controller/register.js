const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Student = require('../model/studentSchema')
const Admin = require('../model/adminschema')

const register = async (req, res) => {
    console.log(req.body.user);

    try{
        if(req.body.user==="student"){
            const {
                user,
                rollNo,
                name,
                password,
            } = req.body;
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt)

            const newStudent = Student({
                user,
                rollNo,
                name,
                password: passwordHash,
                orientation:0,
            });
            //res.json({message: req.body})
            const savedStudent = await newStudent.save();
            res.status(201).json(savedStudent)
        }
        else if(req.body.user === "admin"){

            const{
                user,
                name,
                password,
            } = req.body;
            console.log(req.body);

            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(password, salt)

            const newAdmin = Admin({
                user,
                name,
                password: passwordHash,
            });
            const savedAdmin = await newAdmin.save();
            //res.json({message:req.body});
            res.status(201).json({user:savedAdmin, status:201})
        }
    } catch(e){
        res.status(500).json({error: e.message})

    }

}

module.exports = register
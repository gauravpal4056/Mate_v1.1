const Room = require('../model/roomSchema')


const createRoom = async (req, res) => {
    console.log("create route accessed");

    const room = await Room.findOne({collegeID: req.body.id})
    if(room){
        res.status(200).json({message:"already exist"})
    }
    else{
        const {id, name} = req.body
        console.log("create room hit");
        const room =  Room({collegeID: id, name:name})
        room.classes.push("0192cs201");
        room.classes.push("0192cs200");
        room.save();
        // try{
        //     newRoom = new Room({
        //         collegeID:id, collegeName:name
        //     })
        //     const savedRoom = await newRoom.save();
        //     res.status(201).json({savedroom:savedRoom, status:"201"})
        // }
        // catch(err){
        //     console.log(err);
        //     res.status(400).json({message: "error while insertiing"})
        //}
    }
}

module.exports =  createRoom
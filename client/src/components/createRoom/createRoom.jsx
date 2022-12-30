import { useState } from "react";

const CreateRoom = () => {

    const [roomId, setroomId] = useState({
        id:"", name:""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setroomId({
            ...roomId, [name]: value 
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {id, name} = roomId
        const res = await fetch("/create", {
            method: "POST",
            headers:{
            "content-type": "application/json"
            },
            body: JSON.stringify({id, name,})
        })
        const result = await res.json();
        window.alert(result.message)
        console.log(result);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="id" value={roomId.id} onChange={handleChange} />
            <input type="text" name="name" value={roomId.name} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default CreateRoom
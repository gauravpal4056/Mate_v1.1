import { useState } from "react";

const RegisterAdmin = () => {

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
        console.log("logging the id and name entred " + id + name);
        const res = await fetch("/registeradmin", {
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
            <input type="text" placeholder="enter colege id" name="id" value={roomId.id} onChange={handleChange} />
            <input type="text" name="name" placeholder="enter admin name" value={roomId.name} onChange={handleChange} />
            <input type="submit" />
        </form>
    )
}

export default RegisterAdmin
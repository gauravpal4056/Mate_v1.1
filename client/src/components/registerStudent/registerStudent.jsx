import {useState} from "react"

const RegisterStudent =  () => {

    const [info, setInfo] = useState({
        user:"", name:"", password:"",
    })

    const handleClick = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInfo({
            ...info, [name]: value 
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {user, name, password} = info
        const res = await fetch("/auth", {
            method: "POST",
            headers:{
            "content-type": "application/json"
            },
            body: JSON.stringify({user, name, password})
        })
        const result = await res.json();
        window.alert(result.status)
        console.log(result.user);

    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="user" name="user" value = {info.user} onChange ={handleClick} />
                <input type="text" placeholder="name" name="name" value = {info.name} onChange ={handleClick} />
                <input type="text" placeholder="password" name="password" value = {info.password} onChange ={handleClick} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default RegisterStudent;

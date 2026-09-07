import { useState } from "react";
import axios from 'axios'

function Get() {
    const [set, setValue] = useState("")
    const [set1, setValue1] = useState({
        name: "",
        age: ""
    })
    const [set2, setValue2] = useState("")
    let send = () => {
        axios.get("http://localhost:3000/uses/" + set)
            .then((Response) => console.log(Response.data))
            .catch((err) => console.log(err))
    }
    let display = () => {
        setValue1({ ...set1, [event.target.name]: event.target.value })
    }
    let send1 = () => {
        axios.put("http://localhost:3000/uses/" + set, set1)
            .then((Response) => {
                console.log(Response.data)
                setValue("")
                setValue1({
                    name: "",
                    age: ""
                })
                setValue2("Sumbit Succesfully")
                setTimeout(() => {
                    setValue2("")
                }, 2000);
            })
            .catch((err) => console.log(err))
    }
    return <div>
        Id:- <input type="number" value={set} onChange={(event) => setValue(event.target.value)} />
        <br />
        <button onClick={send}>View</button>
        <br />
        Name:- <input type="text" name="name" value={set1.name} onChange={display} />
        <br />
        Age:- <input type="number" name="age" value={set1.age} onChange={display} />
        <br />
        <button onClick={send1}>Update</button>
        <br />
        <p>{set2}</p>
    </div>
}
export default Get

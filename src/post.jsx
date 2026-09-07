import { useState } from "react"
import axios from 'axios'
function Post() {
    const [set, setValue] = useState({
        name: "",
        age: ""
    })
    const [set1, setValue1] = useState("")
    let send = () => {
        axios.post("http://localhost:3000/uses", set)
            .then((Response) => {
                console.log(Response.data)
                setValue({
                    name: "",
                    age: ""
                })
                setValue1("Sumbit Succesfully")
                setTimeout(() => {
                    setValue1("")
                }, 2000);
            })
            .catch((err) => console.log(err))
    }
    let send1 = () => {
        setValue({ ...set, [event.target.name]: event.target.value })
    }
    return <div>
        Name:- <input type="text" name="name" value={set.name} onChange={send1} />
        <br />
        Age:- <input type="number" name="age" value={set.age} onChange={send1} />
        <br />
        <button onClick={send}>Sumbit</button>
        <br />
        <p>{set1}</p>
    </div>
}
export default Post
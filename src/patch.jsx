import { useState } from 'react'
import axios from 'axios'
function Patch() {
    const [set, setValue] = useState("")
    const [set2, setValue2] = useState({
        name: "",
        age: ""
    })
    const[set3, setValue3] = useState("")
    let send = () => {
        axios.get("http://localhost:3000/uses/" + set)
            .then((Response) => {
                console.log(Response.data)
                setValue2(Response.data)
            })
            .catch((err) => console.log(err))
    }
    let display = (event) => {
        setValue2({ ...set2, [event.target.name]: event.target.value })
    }
    let send1 = () => {
        axios.patch("http://localhost:3000/uses/" + set, { name: set2.name })
            .then((Response) => {
                console.log(Response.data)
                setValue("")
                setValue2({
                    name: "",
                    age: ""
                })
                setValue3("Sumbit Successfully")
                setTimeout(() => {
                    setValue3()
                }, 2000);
            })
            .catch((err) => console.log(err))
    }
    return <div>
        ID:- <input type="text" value={set} onChange={(event1) => setValue(event1.target.value)} />
        <br />
        <button onClick={send}>View</button>
        <br />
        Name:- <input type="text" name='name' value={set2.name} onChange={display} />
        <br />
        Age:- <input type="number" name='age' value={set2.age} onChange={display} />
        <br />
        <button onClick={send1}>Edit Name</button>
        <br />
        <p>{set3}</p>
    </div>
}
export default Patch
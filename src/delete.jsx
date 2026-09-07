import { useState } from "react"
import axios from 'axios'
function Delete() {
    const [set, setValue] = useState("")
    const [set1, setValue1] = useState({
        name: "",
        age: ""
    })
    const [set2, setValue2] = useState("")
    let send = () => {
        axios.get("http://localhost:3000/uses/" + set)
            .then((Response) => setValue1(Response.data))
            .catch((err) => console.log(err))
    }
    let send1 = () => {
        axios.delete("http://localhost:3000/uses/" + set)
            .then((Response) => {
                console.log(Response.data)
                setValue1({
                    name: "",
                    age: ""
                })
                setValue2("Sumbit Successfully")
                setTimeout(() => {
                    setValue2("")
                }, 2000)
                
            })
            .catch((err) => console.log(err))
    }
    return <div>
        Id:- <input type="tel" value={set} onChange={(event) => setValue(event.target.value)} />
        <br />
        <button onClick={send}>View</button>
        <br />
        <h2>User Details</h2>
        <p>Name:-{set1.name}</p>
        <p>Age:-{set1.age}</p>
        <br />
        <button onClick={send1}>Delete</button>
        <br />
        <p>{set2}</p>
    </div>
}
export default Delete
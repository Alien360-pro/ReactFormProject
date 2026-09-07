import { useEffect, useState } from "react"
import axios from "axios"

function Todo() {
    const [set, setValue] = useState({
        name: "",
        age: ""
    })
    const [set1, setValue1] = useState("")
    const [set2, setValue2] = useState("")
    const [set3, setValue3] = useState([])
    const [setid, setValueid] = useState("")
    const [set4, setValue4] = useState("")
     
    let display = (event) => {
        setValue({ ...set, [event.target.name]: event.target.value })
    }
    let send1 = (id) => {
        axios.delete("http://localhost:3000/uses/" + id)
            .then((Response) => {
                console.log(Response.data)
                setValue1("")
                setValue2("")
                axios.get("http://localhost:3000/uses")
                    .then((Response) => {
                        console.log(Response.data)
                        setValue3(Response.data)
                    })
                    setValue2("Delete Succesfully")
                    setTimeout(() => {
                    setValue2("")
                }, 2000);
            })
            .catch((err) => console.log(err))
    }
    let send2 = (id) => {
        axios.get("http://localhost:3000/uses/" + id)
            .then((Response) => {
                console.log(Response.data)
                setValue(Response.data)
                setValueid(id)
            })
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        console.log(axios.get("http://localhost:3000/uses")
            .then((Response) => {
                console.log(Response.data)
                setValue3(Response.data)
            })
            .catch((err) => console.log(err)))
    }, [])
    let send3 = () => {
        axios.patch("http://localhost:3000/uses/" + setid, set)
            .then(() => {
                alert("Successfully Updated")
                setValue({
                    name: "",
                    age: ""
                })
                axios.get("http://localhost:3000/uses")
                    .then((Response) => {
                        console.log(Response.data)
                        setValue3(Response.data)
                    })
                    setValue1("Sumbit Succesfully")
                    setTimeout(() => {
                    setValue1("")
                }, 2000);
            })
            .catch((err) => console.log(err))

    }
    let send4 = () => {
        axios.post("http://localhost:3000/uses" , set )
        .then(()=>{alert("Succesfully Updated")
            setValue({
                name:"",
                age:""
            })
            axios.get("http://localhost:3000/uses")
                    .then((Response) => {
                        console.log(Response.data)
                        setValue3(Response.data)
                    })
        })

    }
    let table = {
        border: "solid",
        borderCollapse: "collapse",
        width: "200px",
    }
    let cell = {
        border: "1px solid black",
        padding: "10px",
        textAlign: "center"
    }
    let cell1 = {
        border: "1px solid black",
    }
    return <div>
        <div>
            <h2>To Do List</h2>
            Name:- <input type="text" value={set.name} name="name" onChange={display} /> <br />
            Age:- <input type="number" value={set.age} name="age" onChange={display} /> <br />
            <button onClick={send3}>Update</button> <br />
            <button onClick={send4}>Create</button>
            <br />
            <p style={{ color: "red" }}>{set1}</p>
        </div>
        <br />
        <div>
            <p>Task List</p>
            <table style={table} >
                <thead>
                    <tr>
                        <td style={cell}>S.No</td>
                        <td style={cell}>Name</td>
                        <td style={cell}>Age</td>
                        <td style={cell}>Delete</td>
                        <td style={cell}>Edit</td>
                    </tr>
                </thead>
                <tbody>
                    {set3.map((r,index) => {
                        return <tr key={r.id}>
                            <td style={cell1}>{index + 1}</td>
                            <td style={cell1}>{r.name}</td>
                            <td style={cell1}>{r.age}</td>
                            <td style={cell1}><button onClick={() => send1(r.id)}>Delete</button></td>
                            <td style={cell1}><button onClick={() => send2(r.id)}>Edit</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
                    <p style={{ color: "red" }}>{set2}</p>
    </div>
}
export default Todo
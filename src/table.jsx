import { useEffect, useState } from "react";
import axios from 'axios'
function Table() {
    const [set, setValues] = useState([])
    let table = {
        backgroundColor: "blue",
        color: "white",
        borderStyle: "solid",
        borderColor: "pink",
        borderWidth:"3px",
        borderRadius:"10px"
    }
    useEffect(() => {
        console.log(axios.get("http://localhost:3000/uses")
            .then((Response) => {
                console.log(Response.data)
                setValues(Response.data)
            })
            .catch((err) => console.log(err)))
    }, [])

    return <div>

        <table style={table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {set.map((r) => {
                    return <tr key={r.id}>
                        <td>{r.name}</td>
                        <td>{r.age}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}
export default Table
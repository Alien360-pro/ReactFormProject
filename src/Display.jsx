import { useState } from "react"


function Display() {

    const [data, setdata] = useState({
        Name: "Sanjay",
        Age: 54,
        RollNo: "cy47"
    })
    let send1 = () => {
        setdata({ ...data, Name: "Jai" })
    }
    return <div>
        <h3>Name:- {data.Name}</h3>
        <h3>Age:- {data.Age}</h3>
        <h3>RollNo:- {data.RollNo}</h3>
        <button onClick={send1}>Change Name</button>

    </div>
}
export default Display
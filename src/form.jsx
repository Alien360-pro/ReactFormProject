import axios from "axios"
import { useState } from "react"
import './form.css'
function Form() {
    let [data, setdata] = useState({
        name: "",
        phone: "",
        email: "",
        addres: "",
        vehicle: ""
    })
    let [name, setname] = useState(false)
    let [cond1, setcond1] = useState(false)
    let [phone, setphone] = useState(false)
    let [email, setemail] = useState(false)
    let [addres ,setaddres] = useState(false)
    let [vehicle ,setvehicle] = useState(false)
    let [sumbit ,setsumbit] = useState("")
    let set = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
          if (event.target.name == "name") {
            setname(false)
        }
        if (event.target.name == "phone") {
            setphone(false)
        }
        if (event.target.name == "email") {
            setemail(false)
        }
        if(event.target.name == "addres"){
            setaddres(false)
        }
        if(event.target.name == "vehicle"){
            setvehicle(false)
        }
    }
    function chech() {
        if (data.name == "" ) {
            setname(true)
        } else {
            setname(false)
        }
        if(data.phone == ""){
            setphone(true)
        }else{
            setphone(false)
        }
        if(data.email == ""){
            setemail(true)
        }else{
            setemail(false)
        }
        if(data.addres == ""){
            setaddres(true)
        }else{
            setaddres(false)
        }
        if(data.vehicle == ""){
            setvehicle(true)
        }else{
            setvehicle(false)
        }
        if (data.name != "" && data.phone != "" && data.email != "" && data.addres != ""  && data.vehicle != "") {
            setcond1(true)
        } else {
            setcond1(false)
        }
    }
    let set1 = ()=>{
        axios.post("http://localhost:3000/uses" , data)
        .then((Response)=> {console.log(Response.data)
            setdata({
                name: "",
                phone: "",
                email: "",
                addres: "",
                vehicle: ""
            })
            setsumbit("Sumbit Succesfully")
            setInterval(() => {
                setsumbit("")
            }, 2000);
        })
        .catch((err)=>console.log(err))
    }

    return <div className="a1">
        <h1>Registration From</h1>
        Name:- <input type="text" name="name" value={data.name} onChange={set} />
        <p style={{ color: "red" }}>{name && "Please Fill The Details"}</p>
        <br />
        Phone:- <input type="number" name="phone" value={data.phone} onChange={set} />
        <p style={{ color: "red" }}>{phone && "Please Fill The Details"}</p>
        <br />
        Email:- <input type="email" name="email" value={data.email} onChange={set} />
        <p style={{ color: "red" }}>{email && "Please Fill The Details"}</p>
        <br />
        Address:- <input type="text" name="addres" value={data.addres} onChange={set} />
        <p style={{ color: "red" }}>{addres && "Please Fill The Details"}</p>
        <br />
        vehicle Id:- <input type="tele" name="vehicle" value={data.vehicle} onChange={set} />
        <p style={{ color: "red" }}>{vehicle && "Please Fill The Details"}</p>
        <br />
        <button onClick={chech}>Preview</button>
        <div style={{ visibility: cond1 ? "visible" : "hidden" }}>
            <h2>Your Details</h2>
            Name:- {data.name}
            <br />
            Phone:- {data.phone}
            <br />
            Email:- {data.email}
            <br />
            Address:- {data.addres}
            <br />
            Vehicle:- {data.vehicle}
            <br />
            <button onClick={set1}>Sumbit</button>
            <br />
            {sumbit}
        </div>
    </div>
}
export default Form
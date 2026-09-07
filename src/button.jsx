import { useState } from "react"

function Button(){
    let[set,setdata] = useState(false)
    let set1 = ()=>{
        setdata(!set)
    }

    return <div>
        <h2>{set?"Welcome":"Please Login"}</h2>
        <button onClick={set1}>{set?"LoginOut":"Login"}</button>
    </div>
}
export default Button
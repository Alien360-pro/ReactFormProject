import { useRef } from "react"

function Ref(){
    const myreference = useRef()
    console.log(myreference)
    return <div>
        Ref:- <input type="text" ref={myreference} />
        <br />
        <button onClick={()=>console.log(myreference.current.value)}>Click Here</button>
    </div>
}
export default Ref
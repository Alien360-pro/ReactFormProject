import { useEffect, useState } from "react"
import lav1 from './assets/lav1.jpg'
function Update() {
    let [data, setData] = useState(0)
    let [data1, setData1] = useState(2)
    console.log("I Am out of UseEffect")
    useEffect(() => {
        console.log("Hello")
    }, [data1])
    return <div>
        <h1>Heading</h1>
        {data} {data1}
        <br />
        <button onClick={() => setData(data + 1)}>Increase With Zero</button>
        <br />
        <button onClick={() => setData1(data1 + 2)}>Increase With Two</button> <br />
        <br />
        <div>
            <img src={lav1} width={200} height={300}/>
        </div>
    </div>
}
export default Update 
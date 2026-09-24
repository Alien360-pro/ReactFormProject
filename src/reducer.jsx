import { useReducer } from "react";
function reducer(state,action){
    console.log(action)
    switch(action.type){
        case 1:
            return state + action.payload
        case 2:
            return state + action.payload
        case 3:
            return state + action.payload
        case "reset":
            return action.payload
        default:
            return state
    }
}
function Value(){
    const[data , dispatch] = useReducer(reducer,0)
    return <div>
        <h2>Reducer Function</h2>
        {data} <br />
        <button onClick={()=>dispatch({
            type : 1,
            payload:100
        })}>Increase with 100</button> <br />
        <button onClick={()=>dispatch({
            type : 2,
            payload:200
        })}>Increase with 200</button> <br />
        <button onClick={()=>dispatch({
            type : 3,
            payload:300
        })}>Increase with 300</button> <br />
        <button onClick={()=>dispatch({
            type : "reset",
            payload:0
        })}>Reset</button>
    </div>
}
export default Value
function Props(x){
    let {data , value} = x

    return <div>
        { data.map((r,index)=>{
            return <h2 key={index}>{r}</h2>
        })}
    <h2>Hello {value.name}</h2>
    <h2>Age:- {value.Age}</h2>
    </div>
}
export default Props
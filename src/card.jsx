import './card1.css'
function Card(props){
let disp={
    textDecorationLine: props.b?"line-through":"none"

}
    return <>
    
        <div className='a1'>
             <h5>{props.title}</h5>

            <div className='a6'>
                
                <h2>${props.price}</h2>
                <p>Per Month</p>
                
            </div>

            <div>
                {<>✅ {props.products}<br /></>}
                {<>✅ {props.clients}<br /></>}
                {<>✅ {props.storage}<br /></>}
                <>{props.a?"✅":"❌"}</>
                <span style={disp}>{<>{props.support}</>}</span>
                
            </div>

            <br />
            <hr />
            <button>Get Started Today</button>
        </div>
        
    </>
}
export default Card
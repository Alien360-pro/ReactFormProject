import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import Display from './Display'
// import Patch from './patch'
// import Get from './Get'
// import Post from './post'
// import Delete from './delete'
// import Todo from './Todo'
// import Student from './student'
// import Table from './table'
// import Update from './update'
// import Button from './button'
// import Form from './form'
// import Ref from './Ref'
// import Props from './Props'
// import Value from './reducer'
// import Value from './Noticeboard'
// import Parent from './parent'
// import { useState } from 'react'
import Card from "./card"
import './App.css'
function App() {
    // const[data,setdata] = useState(0)
  
  return <>
        <h1>Find the perfect plan for you</h1>
        <p>Free-7 day trail with each plan</p>
        <div className="c1">
          <Card
            title="Freelancer"
            price="29"
            products="Active Products"
            clients="15 Clients"
            storage="1GB Storage"
            support="Support"
            b={true}
            a={false}
          />
        </div>
  
        <div className="c2">
          <Card
            title="Team"
            price="49"
            products="Active Projects"
            clients="50 Clients"
            storage="100GB Storage"
            support="Support Email"
            b={false}
            a={true}
          />
        </div>
  
        <div className="c3">
          <Card
            title="Start-up"
            price="99"
            products="Active Projects"
            clients="1000 Clients"
            storage="1TB Storage"
            support="24/7 Support"
            b={false}
            a={true}
          />
        </div>
        <div className="c4">
          Best Value!
        </div>

        {/* <Routes>
          <Route path="/" element={<Landpage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about/:id" element={<About/>}/>
          <Route path="*" element={<h1>404 error found</h1>}/>
        </Routes> */}
      
    {/* <Display /> */}
    {/* <Patch /> */}
    {/* <Get /> */}
    {/* <Post /> */}
    {/* <Delete /> */}
    {/* <Todo /> */}
    {/* < Student /> */}
    {/* < Table/> */}
    {/* < Update/> */}
    {/* < Button /> */}
    {/* <Form /> */}
    {/* <Ref/> */}
    {/* <Props data={["Red","Blue","Pink"]} value ={{name:"Raj" ,  Age:45}}/> */}
    {/* <Props name="rajesh2" age={56}/>
    <Props name="rajesh3" age={36}/> */}
    {/* <Value/> */}
    
    {/* <Value.Provider value={[data,setdata]}>
      <Parent/>
    </Value.Provider> */}
  </>

}

export default App

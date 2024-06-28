import './App.css';
import React from 'react';
  // Adjust the path based on your folder structure
import ReactDOM, { Navigate, useNavigate } from 'react-router-dom'
import {  Routes, Route } from "react-router-dom";
import Home from './componets/Home';
import Abt  from './componets/products';

function nav_colour_change(tag,n)
{
  var p=document.getElementsByClassName(tag)[n]
  p.style.backgroundColor = "rgb(255, 166, 0)"; 
}
function nav_colour_change1(tag,n)
{
  var p=document.getElementsByClassName(tag)[n]
  p.style.backgroundColor = "Transparent"
}

function App() {
  const nav =useNavigate()
  return (
    <div className="Main_div">  
      <div className='logo_class'>
      <nav className='nav'>
        <ul className="List">
          <li className="li1"><button className='button' onMouseMove={a=>{nav_colour_change("li1",0)}} onMouseLeave={b=>{nav_colour_change1("li1",0)}}onClick={()=>nav('/')}>HOME</button></li>
          <li className="li"><button className='button' onMouseMove={a=>{nav_colour_change("li",0)}} onClick={()=>nav('/abt')} onMouseLeave={b=>{nav_colour_change1("li",0)}}>OUR PRODUCTS</button></li>
          <li className="li"><button className='button' onMouseMove={a=>{nav_colour_change("li",1)}} onMouseLeave={b=>{nav_colour_change1("li",1)}}>PROCESSS</button></li>
          <li className="li"><button className='button'onMouseMove={a=>{nav_colour_change("li",2)}} onMouseLeave={b=>{nav_colour_change1("li",2)}}>US CONTACT</button></li>
          <li className="li"><button className='button'onMouseMove={a=>{nav_colour_change("li",3)}} onMouseLeave={b=>{nav_colour_change1("li",3)}}>FIQ</button></li>
        </ul>
      </nav>
      <div className='div2'> 
        <div className='div3'>
         
          </div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Abt' element={<Abt/>}/>
          </Routes>
      
       </div>
      </div>
      
    </div>
  );
}
export default App;

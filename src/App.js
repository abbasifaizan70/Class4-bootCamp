import React, {useState} from 'react';
import {Output} from './Output.js';
import './App.css';

export default function App() {
  let [count, setCount]=useState(0);
  let [isMorning, setMorning]=useState(true);

  return (
    <div className={`box ${isMorning ? 'daynight' : ' ' } `}>

        <h1>Day Time = {isMorning ? 'Day':' Night'}</h1>

        <Output counter={count} />
        <br/>
        <button onClick=
        {
          ()=>setCount(++count)
        }
        >Click Me</button> 

        <br/>  

        <button onClick=
        {
          ()=>setMorning(!isMorning)
        }
        >BackGround Color</button>   
    </div>
  );
}



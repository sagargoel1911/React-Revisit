import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [number,setNumber]=useState(0);
  const [text,setText]=useState("One");
  const doubleNumber=useMemo(()=>{return double(number)},[number]);
  function clickHandler(){
    if(text==="One"){
      setText("Two");
    }
    else{
      setText("One");
    }
  }
  return (
    <div className="App">
      <input value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <div>{doubleNumber}</div>
      <button onClick={clickHandler}>Change Text</button>
      <div>{text}</div>
    </div>
  );
}

function double(number){
  for(let i=0;i<1000000000;i++){}
  return 2*number;
}

export default App;

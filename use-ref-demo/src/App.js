import { useRef, useState } from 'react';
import './App.css';

function App() {
  const inputRef=useRef();
  const [val,setVal]=useState("");
  const clickHandler=()=>{
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <input ref={inputRef} value={val} onChange={(e)=>{setVal(e.target.value)}}/>
      <button onClick={clickHandler}>Focus</button>
    </div>
  );
}

export default App;

import './App.css';
import Show from './components/Show';
import Input from './components/Input';
import { useState } from 'react';
function App() {
  const [text,setText]=useState("");
  return (
    <div className="App">
      <Input onSet={setText}/>
      <Show text={text}/>
    </div>
  );
}

export default App;

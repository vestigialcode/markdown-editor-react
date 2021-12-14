import React,{useState} from 'react';
import './App.css';

function App() {
  const[state,setState]=useState("")

  return (
    <div >Type letters to make them uppercase
<textarea className='textarea' onChange={(e)=>setState(e.target.value)}> </textarea>
<div >
{state.toUpperCase()}
</div>
    </div>
  );
}

export default App;

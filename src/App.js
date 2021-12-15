import React,{useState,useEffect} from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
//import ReactDom from 'react-dom';

function App() {
  const[state,setState]=useState("")
  const [changeit,setChangeit]= useState("")
  useEffect(()=>document.title=changeit)
  const chanto=(e)=>{
    setState(e.target.value)
    setChangeit(e.target.value)
    
  }

  return (
    <div className='footer'>Markdown Viewer made with React
<textarea placeholder='write here # okbro or **reactisawesome**' className='textarea' onChange={chanto}># hello from react </textarea>
<div >
  <h2>Converted Markdown appear here</h2>
<ReactMarkdown>{state}</ReactMarkdown>
</div>
<footer className='footer'>Made with ❤️ by<a href='https://github.com/vestigialcode'> Vestigialcode</a></footer>
    </div>
  );
}

export default App;

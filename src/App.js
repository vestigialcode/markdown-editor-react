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
  var someYear=new Date()
  var currentYear= someYear.getFullYear()

  return (
    <div className='footer'>Markdown Viewer made with React
<textarea placeholder='write here # okbro or **reactisawesome**' className='textarea' onChange={chanto}># Try editing this line </textarea>
<div >
  <h2>Converted Markdown appear here <br/>👇</h2>
<ReactMarkdown>{state}</ReactMarkdown>
</div>
<footer className='footer'>Made with ❤️ by<a href='https://github.com/vestigialcode'> Vestigialcode </a>&copy; {currentYear}</footer>
    </div>
  );
}

export default App;

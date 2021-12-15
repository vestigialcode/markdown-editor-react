import React,{useState} from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
//import ReactDom from 'react-dom';

function App() {
  const[state,setState]=useState("")

  return (
    <div >Markdown Viewer made with React
<textarea placeholder='write here #ok or **react is awesome**' className='textarea' onChange={(e)=>setState(e.target.value)}># hello from react </textarea>
<div >
  <h2>Converted Markdown appear here</h2>
<ReactMarkdown>{state}</ReactMarkdown>
</div>
<footer className='footer'>Made with ❤️ by<a href='https://github.com/vestigialcode'> Vestigialcode</a></footer>
    </div>
  );
}

export default App;

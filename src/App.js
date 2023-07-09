import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextBox from './Component/TextBox';

function App() {
  const [mode, setMode] = useState('light');
  function toggleTheme(){
      if(mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor = 'white'
      }
      else{
        setMode('dark');
        document.body.style.backgroundColor = '#042743'
      }
  } 
  return (
    <>
      <Navbar title="TextUtils" mode={mode} changeTheme = {toggleTheme}/>
      <TextBox mode={mode}/>
    </>
  );
}

export default App;

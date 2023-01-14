import { useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import TextBox from './Component/TextBox';
import About from './Component/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} changeTheme = {toggleTheme}/>
      <Routes>
        <Route exact path="/" element={<TextBox mode={mode}/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

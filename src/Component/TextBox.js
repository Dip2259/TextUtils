import React from 'react'
import { useState } from 'react'
import './style.css'

export default function TextBox(prop){
    const [text,setText] = useState('')
    function upper(){
        setText(text.toUpperCase());
    }
    function lower(){
        setText(text.toLowerCase());
    }
    function rmvSpace(){
        setText(text.split(/[ ]+/).join(" "));
    }
    function copyTxt(){
        navigator.clipboard.writeText(text);
    }
    function clrTxt(){
        setText("");
    }
    function edit(event){
        setText(event.target.value);
    }
    document.getElementById("favicon").href = "/Icons/Home.ico";
    document.title = "TextUtils - Home";
    return(
        <>
            <div className="outer" style={{color : prop.mode==='light'?'black':'white'}}>
                <label className='Label'>Write Some Text Below :: </label>
                <textarea name="Text Feild" id="textFeild" value={text} onChange={edit} 
                style={{color: prop.mode==='light'?'black':'white', backgroundColor:prop.mode==='light'?'white':'grey'}}></textarea>
            </div>
            <div className="buttons" style={{color : prop.mode==='light'?'black':'white'}}>
                <button className="btn btn-primary" onClick={upper}>Uppercase</button>
                <button className='btn btn-primary' onClick={lower}>Lowercase</button>
                <button className="btn btn-primary" onClick={rmvSpace}>Remove Extra Space</button>
                <button className="btn btn-primary" onClick={copyTxt}>Copy Text</button>
                <button className="btn btn-primary" onClick={clrTxt}>Clear Text</button>
            </div>
            <div className="txtSummary my-3" style={{color : prop.mode==='light'?'black':'white'}}>
                <h3>Text Summary: </h3>
                <p>{text.split(" ").length} Words And {text.length} Letters</p>
                <h3>Text Preview: </h3>
                <p>{text}</p>
            </div>
        </>  
    )
}
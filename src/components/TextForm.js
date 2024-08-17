import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    const handleLineBreak = ()=> {
        let newstr = "";
        let flag = true;
        for(let i = 0;i<text.length;i++){
            if(!(text[i] === "\n" || text[i] === "\r")){
                newstr += text[i];
                flag = true;
            }
            else{
                if(flag===true){
                    newstr+=" ";
                }
                flag = false;
                
            }
        }
        setText(newstr);
        props.showAlert("Line breaks removed!", "success");
    }
    const handleExtraSpaces = () => {
        setText(text.replace(/  +/g, ' ').trim());
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleCopy = ()=> {
        const text = document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleClear = ()=> {
        setText("");
        props.showAlert("Text cleared!", "success");
    }
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const [text, setText] = useState('');
     
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
             <textarea style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={(e)=> setText(e.target.value)} className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLineBreak}>Remove line breaks</button>
    </div>

    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text ? text.trim().split(/\s+/).filter((word)=> word).length: 0} words and {text.length} characters</p>
        <p>{0.008 * text.trim().split(/\s+/).filter((word)=> word).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Nothing to preview"}</p>
    </div>

    </>
  )
}

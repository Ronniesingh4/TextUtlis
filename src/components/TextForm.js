import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = " ";
        setText(newText)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
     
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleonchange = (event) => {
        setText(event.target.value);  ///any thing you write on input box
    }

    const[text,setText] = useState('');
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
          <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to upperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">   
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p> 
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"enter something the box here"}</p>
    </div>

    </>
    
  )
}

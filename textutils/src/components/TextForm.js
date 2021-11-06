import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase","success")

    }
    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase","success")
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);// change h+h
    }
    const clearText =() =>{
        setText('')

        props.showAlert("Cleared the text","success")
    }
    const inverseCase =() =>{
        var element;
        var finalStr = "";
        for (let i = 0; i < text.length; i++) {
            element = text.charAt(i)
            if (element === element.toLowerCase()){
                finalStr += element.toUpperCase()
            }
            else{
                finalStr += element.toLowerCase()
            }
            
        }
        setText(finalStr)
        props.showAlert("Inversed the case","success")
    }

    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard","success")
    }

    let noOfWords = text.length===0?0:text.split(" ").length+text.split("\n").length - 1;
    let lowercaseWords = text.toLowerCase()
    return (
        <>
        <div className = "container">
            <h1 className = {props.mode.headingsContainer}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className={`form-control ${props.mode.textarea}`} id="myBox" placeholder = "Your text here" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className={`btn ${props.mode.button}`} onClick={handleUpperCase}>Convert to uppercase</button>
            <button className={`btn ${props.mode.button} mx-2`} onClick={handleLowerCase}>Convert to lowercase</button>
            <button className={`btn ${props.mode.button} mx-2`}  onClick={clearText}>Clear Text</button>
            <button className={`btn ${props.mode.button} mx-2`}  onClick={inverseCase}>Inverse Case</button>
            <button className={`btn ${props.mode.button} mx-2`}  onClick={copyToClipboard}>Copy Text</button>

        </div>
        <div className={`container ${props.mode.headingsContainer}`}>
            <h2>Your text summary</h2>
            <p>{noOfWords} words, {text.split("").length} characters</p>
            <p>{0.008*noOfWords} minutes to read</p>
            <h2>Preview</h2>
            <p>{lowercaseWords.length>0?lowercaseWords:"Please enter text to preview it"}</p>
        </div>
        </>

    )
}

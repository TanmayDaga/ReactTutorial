import React from 'react'
import {useState} from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit =(e)=>{
        e.preventDefault()//Stops from reloading
        if (!title || !desc){
            alert("Title or description cannot be blank")
        }
        else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");}
        
    }
    return (
        <div className="container">
            <h3 className="mx-2">Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlhtmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange = {(e) => {setTitle(e.target.value)}}value = {title}id="title" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange = {(e) => {setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}

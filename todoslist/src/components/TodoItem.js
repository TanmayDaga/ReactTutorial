import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}
            <button className="btn btn-danger btn-sm my-3" style ={{display:"block",marginRight:0,marginLeft:"auto"}} onClick = {()=>props.onDelete(props.todo)}>Delete</button>
            </p>
        </div>
    )
}

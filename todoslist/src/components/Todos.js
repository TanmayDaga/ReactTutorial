import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div style={{minHeight:"46vh"}}>
            <h2 className="text-center">Todos list</h2>
            <div className="container">
               {props.todos.length === 0?"No todos to display":props.todos.map((todo) => {
                   return <><TodoItem todo = {todo} onDelete = {props.onDelete}/><hr/></>
               })}
            </div>
        </div>
    )
}

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Todo from './components/TodoItem';
import { Footer } from './components/Footer';
import { useState , useEffect} from 'react';
import AddTodo from './components/AddTodo';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") == null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo)=>{
    
    setTodos((
    
      todos.filter((e)=>{
        return e!== todo
      })
    ))

    
    
  }
  const addTodo = (title,desc)=>{
    
    var sno = todos.length===0?1:todos.length+1;
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }

    setTodos([...todos,myTodo]);
    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
    }, [todos])
  
  return (
    
    <>
    <Navbar title = "Todos list" searchBar = {false}/>
    <AddTodo addTodo = {addTodo}/>
    <Todos todos = {todos} onDelete = {onDelete} />
    <Footer/>
    </>
  );
}

export default App;

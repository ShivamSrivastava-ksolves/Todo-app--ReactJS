import React,{useState} from 'react'
import "./App.css"
import Todoinput from "./components/Todoinput"
import Todolist from "./components/TodoList"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact'
import {Link} from "react-router-dom";





export default function App() {
  const [listTodo,setListTodo] = useState([]);
  let addList = (inputText)=>{
    setListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (<BrowserRouter>

  <Routes>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
  </Routes>
 <header>
  <nav>
    <ul>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
  </header>


  <div className="main-container">
    <div className="center-container">
    
    

      <Todoinput addList={addList}/>
      <br/>
      <hr/>
      <br/>
      <h1 className="app-heading">Your Todo</h1>
      <br/>
      <br/>
      {listTodo.map((listItem,i)=>{
        return(
          <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
      })}
      
    </div>
  </div>
  </BrowserRouter>  )
}

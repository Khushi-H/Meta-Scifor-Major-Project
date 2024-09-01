import { useState,useEffect } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer,toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import Login from './components/Login'
import Signup from './components/SignUp'
import ProtectedRoutes from './components/ProtectedRoutes';
import Header from './components/Header';
const getItems = ()=>{
  let newtodoItems = localStorage.getItem('items');
  console.log(newtodoItems);
  if(newtodoItems){
    return JSON.parse(localStorage.getItem('items'))
  }else{
    return [];
  }
 }
function App() {
  const [items,setItems] = useState(getItems())
  const [editItem,setEditItem]=useState(null)
  const [filter,setFilter]=useState('')

 
 const handleAddItem=(itemName,date)=>{
  const newItems = {id:Date.now(),itemName,date,completed: false, completedTime: null}
 
  if(newItems.itemName===''||newItems.date===''){
    toast.error("You can't empty any field")
  }
 else{
  toast.success('Item has been added successfully')
  setItems([...items,newItems])
 } 
 }
 const handleUpdateItem=(id,itemName,date)=>{
  setItems(items.map(item=>item.id===id?{...item,itemName,date}:item))
  toast.success('Item has been updated successfully')
  setEditItem(null)
  // setEditItem(null)
 }
 const handlDeleteItem=(id)=>{
  let answer = window.prompt(`Are you sure want to delete item ? if yes then press enter otherwise write no`);
  if (answer === "no") {
    toast.success("Not Deleted");
    return;
  }
  else(answer==="yes")
  const deletedItems = items.filter((item)=>{return item.id !== id;})
  toast.success('Item has been deleted successfully')
  setItems(deletedItems)

 }
 const handleDeleteAll=()=>{
  let answer = window.prompt("Are you sure want to delete all items ? if yes then press enter otherwise write no");
  if (answer === "no") {
    // toast.success("Not Deleted");
    return;
  }
  else(answer==="yes")
  toast.success('All items have been deleted')
  setItems([])
 }
 const handlEditItem=(item)=>{
 
  setEditItem(item)
 }
 const handlCancelEditItem=()=>{

  setEditItem(null)
 }
 const handlCompleteItem=(id)=>{
  const completedItems = items.map(item=>item.id===id?{...item,completed:true,completedTime:new Date().toLocaleString()}:item)
  toast.success('Item has been completed successfully')
  setItems(completedItems)
 }
 const filteredItem=items.filter(item=>{
  if(filter==='completed')
   
    return item.completed;
    
  
 })
   
 useEffect(() => {
  localStorage.setItem('items',JSON.stringify(items))
}, [items])

  return (
    <>
    
    <div className="app">
    <ToastContainer />
    <BrowserRouter>
    
    <Routes>
    
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
          
          <Route path='/home' element={<ProtectedRoutes/>} >
             <Route path='/home' element={<center className='todo-list'>
              <Header/>
              
            <AddTodo onAddItem={handleAddItem} onUpdateItem={handleUpdateItem}
            editItem={editItem} onCancelEditItem={handlCancelEditItem}/>
      {items.length===0 && <p className=' message'>Enjoy Your Day</p>}
    
               <TodoItems onDeleteItem={handlDeleteItem}
               items={items}
                onEditItem={handlEditItem}
                onCompleteItem={handlCompleteItem}
               />
               {items.length>=2 && <button className='btn btn-danger mt-3 mb-5' onClick={handleDeleteAll}>Delete All</button>}    
    
      </center>}/>
          
   
          </Route>
      
          
          
        </Routes>
        </BrowserRouter>
    </div>
   
    </>
  )
}

export default App

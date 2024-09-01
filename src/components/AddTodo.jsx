import { useState,useEffect } from "react";
import { MdCancelPresentation } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
function AddTodo({onAddItem,onUpdateItem, editItem,onCancelEditItem}){
  const [minDate, setMinDate] = useState('');
  const [itemName, setItemName] = useState('')
  const [date, setDate] = useState('')
  useEffect(() => {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);
useEffect(() => {
  
if(editItem){
  setItemName(editItem.itemName)
  setDate(editItem.date)
}else{
  setItemName('')
  setDate('')
}
  
}, [editItem])

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(editItem){
      onUpdateItem(editItem.id,itemName,date)
    } else{
      onAddItem(itemName,date)
    }
    setItemName('')
    setDate('');
  }
    return(
    <div className="container add-todo text-center">
    <div className="row kp-row">
      
      <div className="col-sm-6">
        <input type="text" placeholder="Enter To-do List Here" value={itemName} onChange={(e)=>setItemName(e.target.value)} />
      </div>
      <div className="col-sm-4">
         <input type="date"  value={date} onChange={(e)=>setDate(e.target.value)} min={minDate}/>
      </div>
      <div className="col-sm-2">
        <button type="button" onClick={handleSubmit} className="btn btn-success kp-button">{editItem?<RxUpdate size={25} />:<IoMdAdd size={25} />}</button>
        
        {editItem && <button type="button" className="btn btn-dark kp-button" onClick={onCancelEditItem}><MdCancelPresentation size={25} /></button> }
      </div>
     
    </div>
   
  </div>
  )
}
export default AddTodo;
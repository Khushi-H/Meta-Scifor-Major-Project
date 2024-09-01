import { TiEdit } from "react-icons/ti";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import "./SingleItem.css"
function SingleItem({item, onEditItem,onCompleteItem,onDeleteItem}){
  

  
    return(
        <>
         <div className="container singleitem">
        <div className="row kp-row">
          <div className="col-sm-6">
            {item.itemName}
          </div>
          <div className="col-sm-3">
             {item.date}
          </div>
          
          <div className="col-sm-3">
            {!item.completed?(
              <>
               <button type="button" className="btn btn-secondary kp-button" onClick={()=>onEditItem(item)}><TiEdit size={25} /></button>
               <button type="button" className="btn btn-info kp-button" onClick={()=>onCompleteItem(item.id)}><IoMdCheckmarkCircleOutline size={25}/></button>
                 <button type="button" className="btn btn-danger kp-button" onClick={()=>onDeleteItem(item.id)}><AiFillDelete size={25} /></button>
                 </>
            ):(
              <span className="completeitem"> (Completed at: {item.completedTime})<button type="button" className="btn btn-danger m-3 kp-button" onClick={() => onDeleteItem(item.id)}><AiFillDelete size={25} /></button></span>
            )}
         
          </div>
        </div>
       
      </div>
        </>
      )
}
export default SingleItem;
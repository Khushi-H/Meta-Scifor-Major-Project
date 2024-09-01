import SingleItem from "./SingleItem";
import  "./TodoItems.css"
const TodoItems=({items,onDeleteItem, onEditItem,onCompleteItem})=>{
  return(
    <>
    <div className='items-container'>

        {items.map((item=>(<SingleItem key={item.id} item={item} onDeleteItem={onDeleteItem} onEditItem={onEditItem} onCompleteItem={onCompleteItem}></SingleItem>)))}
    </div>
    </>
  )
}
export default TodoItems;
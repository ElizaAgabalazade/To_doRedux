import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import "../css/todo.css"
import { useSelector } from "react-redux";


const Todo = () => {
  const { todo } = useSelector(store => store.todo);
  console.log(todo)

  return (
    <>
      {
        todo && todo.map(item => (
          <div className='item_box' key={item.id}>
            <p className='text' >{item.content}</p>
            <div className="icons">
              <FaEdit className='icon_edit' /><FaTrashAlt />
            </div>
          </div>
        ))
      }




    </>
  )
}
export default Todo

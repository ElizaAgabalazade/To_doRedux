import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/todo.css';
import { addTodo } from '../redux/todoSlice';

const Todo_top = () => {
  const [inpVal, setInpVal] = useState("");

  const dispatch = useDispatch();

    const sentInp = (event) =>{
      if(event.key === 'Enter'){
         dispatch(addTodo())
      }
    }



  return (
    <>
    <div className='top_box'>
      <input
        type="text"
        placeholder='Todo daxil edin..'
        className='inp'
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
        onKeyDown={sentInp}

      />
      <button className='btn'
        onClick={
          () => {
            dispatch(addTodo(inpVal))
            setInpVal("");
          }

        } >Todo yarat..</button>

    </div>




    </>

  )
}

export default Todo_top

import React from 'react'
import '../css/todo.css'
import Todo_top from './Todo_top'
import Todo from './Todo'

const Todo_Create = () => {



    return (
        <>
            <div className='all_main'>
                <div className="top">
                    <Todo_top />
                </div>
                <div className="list">
                    <Todo />
                </div>
            </div>

        </>

    )
}

export default Todo_Create

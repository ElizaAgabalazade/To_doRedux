import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
    todo: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            // if(!action.payload){
            //     alert("Zehmet olmasa todo daxil edin..");
            //     return;
            // }

            const request = {
                id: Math.floor(Math.random() * 99999),
                content: action.payload
            }
            state.todo.push(request);

        }

    },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
import {createReducer, createAction} from "@reduxjs/toolkit";

const addTodo = "ADD_TODO";
const toggleTodo = "TOGGLE_TODO";
const removeTodo = "REMOVE_TODO";  

const todosReducer = createReducer(
     [
        {value: "todo-1", id: 1, completed: false},
        {value: "todo-2", id: 2 , completed: false},
        {value: "todo-3", id: 3 , completed: false},
    ],
     (builder) => {
    builder
      .addCase(addTodo, (state, action: any) => {
        // "mutate" the array by calling push()
        state.push(action.payload);
      })
      .addCase(toggleTodo, (state, action: any) => {
      const nextItem = {...action.payload};
      nextItem.completed = !nextItem.completed;
      return state.map((el) => {
        if(el.id === action.payload.id){
            return nextItem;
        }
        return {...el};
      });
      })
      .addCase(removeTodo, (state, action: any) => {
        // Can still return an immutably-updated value if we want to
        return state.filter((todo, i) => i !== action.payload.index);
      });
  });

  export const addTodoFunction = createAction("ADD_TODO");
  export const toggleTodoFunction = createAction("TOGGLE_TODO");

  export default todosReducer;
"use client";

import StoreProvider from "./StoreProvider";
import { useAppSelector, useAppDispatch } from "./lib/hooks";
import { addTodoFunction, toggleTodoFunction } from "./lib/features/todo";

function addTodoArg(arg: any) {
  return arg;
}

const List = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Wow this is cool!</h1>
      <button
        onClick={() =>
          dispatch(
            addTodoFunction(
              addTodoArg({
                value: "task",
                id: Math.random() * 300,
                completed: false,
              })
            )
          )
        }>
        Add stuff
      </button>

      {state.todos.map((todo: any) => (
        <li key={todo.id}>
          {todo.value}
          <button
            onClick={() => dispatch(toggleTodoFunction(addTodoArg(todo)))}>
            {todo.completed ? "done" : "pending"}
          </button>
        </li>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <StoreProvider>
      <List />
    </StoreProvider>
  );
}

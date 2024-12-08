"use client";

import StoreProvider from "./StoreProvider";
import { useAppSelector, useAppDispatch } from "./lib/hooks";
import { addTodoFunction, toggleTodoFunction } from "./lib/features/todo";

interface Todo {
  value: string;
  id: number;
  completed: boolean;
}

function addTodoArg(arg: Todo) {}

const List = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            addTodoFunction(
              addTodoArg({ value: "task", id: 1, completed: false })
            )
          )
        }
      >
        Add stuff
      </button>

      {state.map((todo) => (
        <li key={todo.id}>
          {todo.value} id: {todo.id}
          <button
            onClick={() => dispatch(toggleTodoFunction(addTodoArg(todo)))}
          >
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

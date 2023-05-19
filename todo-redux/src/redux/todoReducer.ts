import { Reducer } from "redux";
import { ADD_TODO, DELETE_TODO } from "./actionTypes";

type ActionType = {
  type: string;
  payload: TodoType;
};

type TodoType = {
  id?: string;
  title: string;
  status: "completed" | "not-completed";
};

export const todosReducer: Reducer<{ todos: TodoType[] }, ActionType> = (
  state = { todos: [] },
  action: ActionType
): { todos: TodoType[] } => {
  const { type, payload } = action ?? {};
  switch (type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, payload],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo: TodoType) => {
          return todo?.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

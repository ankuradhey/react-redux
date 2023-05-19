import { ADD_TODO, DELETE_TODO } from "./actionTypes";

let id = 0;

export const addTodoAction = ({
  title,
  status = "not-completed",
}: {
  title: string;
  status: "completed" | "not-completed";
}) => {
  return {
    type: ADD_TODO,
    payload: {
      id: id++,
      title,
      status,
    },
  };
};

export const deleteTodoAction = (id: string) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

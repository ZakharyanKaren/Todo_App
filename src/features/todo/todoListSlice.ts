import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TodoListTypes } from "./types";

export type TodoListFilters = "all" | "completed" | "active";

export interface TodoListState {
  todoList: TodoListTypes[];
  filter: TodoListFilters;
}

const initialState: TodoListState = {
  todoList: [
    {
      id: 1,
      title: "Example todo",
      checked: false,
    },
  ],
  filter: "all",
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTodo: (state, action: PayloadAction<{ value: string }>) => {
      state.todoList = [
        ...state.todoList,
        { id: Date.now(), title: action.payload.value, checked: false },
      ];
    },
    removeAllTodos: (state) => {
      state.todoList = [];
    },
    handleEditInputChange: (
      state,
      action: PayloadAction<{ value: string; id: number }>
    ) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, title: action.payload.value };
        }
        return todo;
      });
    },
    handleRemove: (state, action: PayloadAction<{ id: number }>) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    handleCheckboxChange: (state, action: PayloadAction<{ id: number }>) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
    },
  },
});

export const {
  addTodo,
  removeAllTodos,
  handleEditInputChange,
  handleRemove,
  handleCheckboxChange,
} = todoListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodoList = (state: RootState): TodoListTypes[] =>
  state.todoList.todoList;

export default todoListSlice.reducer;

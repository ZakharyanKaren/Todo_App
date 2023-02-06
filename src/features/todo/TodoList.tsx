import React, { useState, useEffect } from "react";
import { selectTodoList, TodoListFilters } from "./todoListSlice";
import { useAppSelector } from "../../app/hooks";
import { TodoListTypes } from "./types";
import { TodoListWrapper, TodoTitle } from "./styles";
import BottomButtonsWrapper from "../../components/bottomButtonsWrapper/BottomButtonsWrapper";
import AddTodo from "../../components/addTodo/AddTodo";
import Todos from "../../components/todos/Todos";

const TodoList: React.FC = () => {
  const [filteredTodoList, setFilteredTodoList] = useState<TodoListTypes[]>([]);
  const [filter, setFilter] = useState<TodoListFilters>("all");
  const todoList = useAppSelector(selectTodoList);

  useEffect(() => {
    setFilteredTodoList(() => {
      switch (filter) {
        case "all":
          return todoList;
        case "completed":
          return todoList.filter((todo) => todo.checked === true);
        case "active":
          return todoList.filter((todo) => todo.checked === false);
        default:
          return todoList;
      }
    });
  }, [filter, todoList]);

  const handleFilter = (filterBy: TodoListFilters) => {
    setFilter(filterBy);
  };

  return (
    <TodoListWrapper>
      <TodoTitle>To Do List</TodoTitle>
      <AddTodo />
      <Todos filteredTodoList={filteredTodoList} />
      <BottomButtonsWrapper filter={filter} handleFilter={handleFilter} />
    </TodoListWrapper>
  );
};

export default TodoList;

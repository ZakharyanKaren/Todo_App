import React from "react";
import Todo from "../todo/Todo";
import { TodosWrapper } from "./styles";

interface Props {
  filteredTodoList: TodoListTypes[];
}

const Todos: React.FC<Props> = ({ filteredTodoList }) => {
  return (
    <TodosWrapper>
      {filteredTodoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </TodosWrapper>
  );
};

export default Todos;

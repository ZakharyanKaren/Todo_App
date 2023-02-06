import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "../../features/todo/todoListSlice";
import { AddTodoButton, AddTodoInput, AddTodoWrapper } from "./styles";

const AddTodo: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAddTodoButton = () => {
    if (value.trim()) {
      dispatch(addTodo({ value }));
      setValue("");
    }
  };

  return (
    <AddTodoWrapper>
      <AddTodoInput
        onKeyDown={(e) => e.key === "Enter" && handleAddTodoButton()}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <AddTodoButton onClick={handleAddTodoButton}>Add Todo</AddTodoButton>
    </AddTodoWrapper>
  );
};

export default AddTodo;

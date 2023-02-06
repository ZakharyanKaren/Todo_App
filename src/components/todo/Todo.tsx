import React, { useRef, useState } from "react";
import { TodoListTypes } from "../../features/todo/types";
import {
  EditButton,
  RemoveButton,
  SaveButton,
  TodoInput,
  TodoWrapper,
} from "./styles";
import Checkbox from "../checkbox/Checkbox";
import { useAppDispatch } from "../../app/hooks";
import {
  handleCheckboxChange,
  handleEditInputChange,
  handleRemove,
} from "../../features/todo/todoListSlice";

interface Props {
  todo: TodoListTypes;
}

const Todo: React.FC<Props> = ({ todo: { id, title, checked } }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [editId, setEditId] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    inputRef.current?.focus();
    setEditId(id);
  };

  const handleSave = () => {
    if (title.trim() === "") {
      inputRef.current?.focus();
    } else {
      setEditId(null);
    }
  };

  return (
    <TodoWrapper key={id}>
      <div>
        <Checkbox
          checked={checked}
          onChange={() => {
            dispatch(handleCheckboxChange({ id }));
          }}
        />
        <TodoInput
          ref={inputRef}
          value={title}
          checked={checked}
          readOnly={!(id === editId)}
          onChange={(e) =>
            dispatch(handleEditInputChange({ value: e.target.value, id }))
          }
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          onBlur={handleSave}
        />
        <div style={{ width: "50px", height: "100%" }}>
          {!(id === editId) ? (
            <EditButton onClick={handleEdit}>edit</EditButton>
          ) : (
            <SaveButton onClick={handleSave}>save</SaveButton>
          )}
        </div>
        <RemoveButton onClick={() => dispatch(handleRemove({ id }))}>
          remove
        </RemoveButton>
      </div>
    </TodoWrapper>
  );
};

export default Todo;

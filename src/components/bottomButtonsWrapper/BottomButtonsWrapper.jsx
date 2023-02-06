import React from "react";
import { useAppDispatch } from "../../app/hooks";
import {
  removeAllTodos,
  TodoListFilters,
} from "../../features/todo/todoListSlice";
import FilterButtons from "../filterButtons/FilterButtons";
import { BottomButtons, ClearButton } from "./styles";

interface Props {
  filter: TodoListFilters;
  handleFilter: (filterBy: TodoListFilters) => void;
}

const BottomButtonsWrapper: React.FC<Props> = ({ filter, handleFilter }) => {
  const dispatch = useAppDispatch();

  return (
    <BottomButtons>
      <FilterButtons filter={filter} handleFilter={handleFilter} />
      <ClearButton onClick={() => dispatch(removeAllTodos())}>
        Clear All
      </ClearButton>
    </BottomButtons>
  );
};

export default BottomButtonsWrapper;

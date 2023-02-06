import React from "react";
import { TodoListFilters } from "../../features/todo/todoListSlice";
import {
  FilterButtonsWrapper,
  ShowActive,
  ShowAll,
  ShowCompleted,
} from "./styles";

interface Props {
  filter: TodoListFilters;
  handleFilter: (filterBy: TodoListFilters) => void;
}

const FilterButtons: React.FC<Props> = ({ filter, handleFilter }) => {
  return (
    <FilterButtonsWrapper>
      <ShowAll isActive={filter === "all"} onClick={() => handleFilter("all")}>
        All
      </ShowAll>
      <ShowActive
        isActive={filter === "active"}
        onClick={() => handleFilter("active")}
      >
        Active
      </ShowActive>
      <ShowCompleted
        isActive={filter === "completed"}
        onClick={() => handleFilter("completed")}
      >
        Completed
      </ShowCompleted>
    </FilterButtonsWrapper>
  );
};

export default FilterButtons;

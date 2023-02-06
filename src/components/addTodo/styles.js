import styled from "styled-components";

export const AddTodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddTodoInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  border-start-start-radius: 6px;
  border-end-start-radius: 6px;
  height: 40px;
  font-size: 18px;
  padding-left: 16px;
`;

export const AddTodoButton = styled.button`
  border: none;
  background-color: #00c50b;
  border-start-end-radius: 6px;
  border-end-end-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  padding: 0px 24px;
  cursor: pointer;
`;
import styled from "styled-components";

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: inline-block;
  width: 20px;
  height: 20px;
  accent-color: #00c50b;
  border: 1px solid black;
  border-radius: 3px;
  transition: all 150ms;
  appearance: none;
  margin: 0px;
  border: none;
  margin-right: 6px;
  background-color: #ff9318;

  &:checked::before {
    content: "✔";
    font-size: 15px;
    color: green;
    display: block;
    text-align: center;
  }
`;
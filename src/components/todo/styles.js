import styled from "styled-components";

export const TodoWrapper = styled.li`
    display: list-item;

    > div {
        display: flex;
        align-items: center;
        height: 30px;
    }

    button {
        border: none;
    }
`;

export const TodoInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
  border-start-start-radius: 6px;
  border-end-start-radius: 6px;
  height: 30px;
  font-size: 18px;
  padding: 0px;
  padding-left: 16px;
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  background-color: #0099a5;
  color: #ffffff;
`;

const Button = styled.button`
  border: none;
  height: 100%;
  color: #ffffff;
`;

export const EditButton = styled(Button)`
  background-color: #ff9318;
  width: 100%;
`;
export const SaveButton = styled(Button)`
  background-color: #1a3af9;
  width: 100%;
`;
export const RemoveButton = styled(Button)`
  background-color: #df0c0c;
  border-start-end-radius: 6px;
  border-end-end-radius: 6px;
`;
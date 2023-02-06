import styled from "styled-components";

export const FilterButtonsWrapper = styled.div`
  display: flex;
  column-gap: 6px;
  `;

const Button = styled.button`
  border: none;
  border-radius: 6px;
  background-color: ${({ isActive }: { isActive: boolean }) => isActive ? "#00c50b" : "#ffffff"};
  color: ${({ isActive }: { isActive: boolean }) => isActive ? "#ffffff" : "#000000"};
`;

export const ShowAll = styled(Button)``;
export const ShowActive = styled(Button)``;
export const ShowCompleted = styled(Button)``;
import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 10px;
  border: 0.5px;
  padding: 4px 10px;
  font-size: inherit;
  box-shadow: 1px 1px 2px 0.5px gray;
  transition: background-color 300ms ease, color 300ms ease;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
export const StyledFlexBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

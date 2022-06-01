import styled from 'styled-components';

export const ButtonWrap = styled.button`
  padding: 15px 20px;
  border: 1px solid #333;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: none;
  outline: none;
  font-weight: 600;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
`;

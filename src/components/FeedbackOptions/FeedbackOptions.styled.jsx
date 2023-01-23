import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 85px;
  height: 30px;
  font-family: inherit;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  text-shadow: 0px 1px 2px rgb(92 90 90 / 85%);
  margin: 0 auto;
  padding: 5px 10px;
  border: 1px solid rgb(128, 122, 122, 80%);
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgb(92 90 90 / 85%);
  cursor: pointer;

  &:active {
    background-color: rgb(89, 190, 233, 65%);
  }
`;

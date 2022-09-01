import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  width: 350px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  cursor: pointer;
  outline: none;
  color: #232323;
`;

export const Input = styled.input`
  width: 350px;
  height: 25px;
  border-color: transparent;
  border-radius: 3px;
  margin-bottom: 20px;
  outline: none;
`;
export const Button = styled.button`
  width: 358px;
  height: 32px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background-color: #232323;
  color: #ffffff;
  border-color: transparent;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #232323;
    border-color: transparent;
  }
`;

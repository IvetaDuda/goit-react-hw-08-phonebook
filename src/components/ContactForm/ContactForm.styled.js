import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  cursor: pointer;
  outline: none;
  color: #232323;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 25px;
  border-color: transparent;
  border-radius: 3px;
  margin-bottom: 20px;
  outline: none;
  padding: 5px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 39px;
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
  @media screen and (min-width: 768px) {
    width: 362px;
  }
`;

import styled from 'styled-components';

export const Contacts = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #232323;
`;

export const Button = styled.button`
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const ButtonChange = styled.button`
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 20px;
  margin-left: auto;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
export const ButtonSend = styled.button`
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 25px;
  margin-left: 5px;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ChangeBox = styled.div`
  display: flex;
`;
export const Input = styled.input`
  width: 150px;
  height: 20px;
  background-color: #ffffff;
  border-color: transparent;
  outline: none;
  &:first-child {
    margin-right: 20px;
  }
`;
export const ContactBox = styled.div`
  font-size: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;
export const Number = styled.span`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

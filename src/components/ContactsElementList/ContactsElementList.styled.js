import styled from 'styled-components';

export const Contacts = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #232323;
  padding: 0 10px 0 15px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:nth-child(2n + 1) {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0;
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
  padding: 0;
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
  margin-left: auto;
  padding: 0;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const ChangeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
`;
export const Input = styled.input`
  width: 160px;
  height: 30px;
  background-color: #ffffff;
  border-color: transparent;
  border-radius: 5px;
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

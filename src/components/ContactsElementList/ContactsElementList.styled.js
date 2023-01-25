import styled from 'styled-components';

export const Contacts = styled.li`
  min-width: 311px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #232323;
  padding: 0 5px 0 5px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  &:nth-child(2n + 1) {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 10px 0 15px;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
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
  margin-right: 10px;
  margin-left: auto;
  padding: 0;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`;
export const ButtonSend = styled.button`
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 15px;
  margin-left: auto;
  padding: 0;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    margin-right: 25px;
  }
`;

export const ChangeBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
`;
export const Input = styled.input`
  width: 77px;
  height: 28px;
  background-color: #ffffff;
  border-color: transparent;
  border-radius: 5px;
  outline: none;
  font-size: 12px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  &:first-child {
    margin-right: 5px;
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 30px;
    font-size: 16px;
    &:first-child {
      margin-right: 20px;
    }
  }
`;
export const ContactBox = styled.div`
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: Georgia, 'Times New Roman', Times, serif;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Number = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

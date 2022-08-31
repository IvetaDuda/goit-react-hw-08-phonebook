import styled from 'styled-components';

export const Contacts = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #2d2d2d;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #000000;
`;

export const Button = styled.button`
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
  outline: none;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 60px;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

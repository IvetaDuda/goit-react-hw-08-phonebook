import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PhonebookBox = styled(NavLink)`
  position: absolute;
  bottom: -20px;
  right: 10px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    bottom: 5px;
    right: 10px;
  }
  @media screen and (min-width: 1400px) {
    bottom: 10px;
    right: 20px;
  }
`;

export const Phonebook = styled.h2`
  color: #62b3ae;
  font-weight: 400;
  font-size: 24px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.72);
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1400px) {
    font-size: 24px;
  }
`;
export const PhonebookArrow = styled.svg`
  width: 30px;
  height: 25px;
  fill: #62b3ae;
  animation: arrow 2000ms infinite;
  @keyframes arrow {
    50% {
      margin-right: 10px;
    }
  }
`;

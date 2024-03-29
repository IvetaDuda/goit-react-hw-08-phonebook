import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  text-align: center;
  align-items: center;
`;
export const StyleLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;

  outline: none;
  color: ${({ theme }) => theme.headerTitle};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
    color: #e87825;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Image = styled.svg`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  stroke: ${({ theme }) => theme.headerTitle};
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;
export const StyleLinkC = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  color: ${({ theme }) => theme.headerTitle};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: link 2s ease-in-out infinite;
  @keyframes link {
    50% {
      transform: scale(1.1);
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

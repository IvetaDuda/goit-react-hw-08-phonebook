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
  font-size: 20px;
  color: #232323;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus,
  &:active {
    color: #c22cc7;
    border-bottom: 2px solid #c22cc7;
  }
`;
export const Image = styled.img`
  margin-right: 20px;
`;

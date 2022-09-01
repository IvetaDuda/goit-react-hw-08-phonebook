import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  text-align: center;
`;
export const StyleLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 20px;
  color: #ffffff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
    border-bottom: 2px solid #ffffff;
  }
`;

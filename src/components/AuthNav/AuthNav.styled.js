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
  color: #232323;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus,
  &:active {
    border-bottom: 2px solid #232323;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const ImgContainer = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin-right: 5px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;
export const Img = styled.img`
  width: 30px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export const LogoutSvg = styled.svg`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.logoutIcon};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: ${({ theme }) => theme.hoverLogoutIcon};
  }
`;

export const Text = styled.span`
  margin-right: 10px;
  font-size: 18px;
  display: flex;
  align-items: center;
`;
export const Welcome = styled.span`
  color: ${({ theme }) => theme.headerTitle};
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 10px;
  }
  @media screen and (min-width: 1400px) {
  }
`;

export const Item = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-style: italic;
  color: #64b7b2;
  border-bottom: 2px solid #64b7b2;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const Btn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

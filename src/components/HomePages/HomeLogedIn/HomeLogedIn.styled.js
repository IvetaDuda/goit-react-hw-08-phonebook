import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  /* margin-top: 50px; */
`;
export const Box = styled.div`
  margin-left: 300px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  color: #232323;
`;
export const Text = styled.h2`
  font-size: 40px;
  font-weight: 400;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-align: center;
  margin-bottom: 20px;
  color: #232323;
  text-transform: uppercase;
`;

export const Item = styled.span`
  font-size: 30px;
  line-height: 1.92;
  letter-spacing: 0.04em;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  color: #c22cc7;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid #c22cc7;
`;

export const LinkBox = styled.div`
  margin-top: 20px;
`;

export const OpenArms = styled.img`
  position: absolute;
  top: -50px;
  right: -400px;
  z-index: -1;
`;

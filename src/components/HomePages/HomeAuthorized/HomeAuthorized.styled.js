import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const User = styled.span`
  font-size: 50px;
  font-weight: 500;
  font-style: italic;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #232323;
`;
export const Image = styled.img`
  margin-right: 30px;
`;
export const Text = styled.span`
  font-size: 35px;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledLink = styled(NavLink)`
  font-size: 72px;
  background: linear-gradient(
    90deg,
    rgba(125, 70, 128, 1) 11%,
    rgba(58, 106, 103, 1) 81%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-weight: 500;
  text-decoration: none;
  margin-top: 20px;
  color: #af52af;
  border-bottom: 1px solid #af52af;
  animation: arrow 1500ms infinite;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @keyframes arrow {
    50% {
      transform: scale(1.1);
    }
  }
`;

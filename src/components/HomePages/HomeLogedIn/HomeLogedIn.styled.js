import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  place-items: center;
  font: 2vw system-ui;
`;

export const Man = styled.img`
  position: absolute;
  top: -50px;
  left: 0px;
  z-index: -1;
`;
export const Woman = styled.img`
  position: absolute;
  top: 0;
  right: 0px;
  z-index: -1;
`;

export const Hi = styled.p`
  position: absolute;
  top: 50px;
  left: 300px;
  width: 350px;
  transform: translatey(0px);
  animation: float 5s ease-in-out infinite;
  mix-blend-mode: multiply;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 14px;
  color: #774f38;
  background-color: #ece5ce;
  padding: 30px;
  border-radius: 11px;
  position: relative;
  box-shadow: 20px 20px #83af9b;
  font-family: 'Baloo 2', cursive;
  &:after {
    transform: translatey(0px);
    animation: float2 5s ease-in-out infinite;
    content: '.';
    font-weight: bold;
    -webkit-text-stroke: 0.5px #c8c8a9;
    -webkit-text-fill-color: #ece5ce;
    border: 1px solid #c8c8a9;
    text-shadow: 22px 22px #83af9b;
    text-align: left;
    font-size: 55px;
    width: 55px;
    height: 11px;
    line-height: 30px;
    border-radius: 11px;
    background-color: #ece5ce;
    position: absolute;
    display: block;
    bottom: -30px;
    left: 0;
    box-shadow: 22px 22px #83af9b;
    z-index: -2;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  @keyframes float2 {
    0% {
      line-height: 30px;
      transform: translatey(0px);
    }
    55% {
      transform: translatey(-20px);
    }
    60% {
      line-height: 10px;
    }
    100% {
      line-height: 30px;
      transform: translatey(0px);
    }
  }
`;

export const Answer = styled.p`
  position: absolute;
  top: 20px;
  right: -750px;
  width: 320px;
  transform: translatey(0px);
  animation: floats 5s ease-in-out infinite;
  mix-blend-mode: multiply;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 14px;
  color: #774f38;
  background-color: #ece5ce;
  padding: 30px;
  border-radius: 11px;
  position: relative;
  box-shadow: 20px 20px #83af9b;
  font-family: 'Baloo 2', cursive;
  &:after {
    transform: translatey(0px);
    animation: floats2 5s ease-in-out infinite;
    content: '.';
    font-weight: bold;
    -webkit-text-stroke: 0.5px #c8c8a9;
    -webkit-text-fill-color: #ece5ce;
    border: 1px solid #c8c8a9;
    text-shadow: 22px 22px #83af9b;
    text-align: left;
    font-size: 55px;
    width: 55px;
    height: 11px;
    line-height: 30px;
    border-radius: 11px;
    background-color: #ece5ce;
    position: absolute;
    display: block;
    bottom: -30px;
    right: 0;
    box-shadow: 22px 22px #83af9b;
    z-index: -2;
  }

  @keyframes floats {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  @keyframes floats2 {
    0% {
      line-height: 30px;
      transform: translatey(0px);
    }
    55% {
      transform: translatey(-20px);
    }
    60% {
      line-height: 10px;
    }
    100% {
      line-height: 30px;
      transform: translatey(0px);
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #232323;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  color: #c22cc7;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid #c22cc7;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const People = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;
export const ManImg = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 170px;
  @media screen and (min-width: 1400px) {
    max-width: 350px;
  }
`;

export const WomanImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  max-width: 150px;
  @media screen and (min-width: 1400px) {
    max-width: 320px;
  }
`;

export const ManContainer = styled.div`
  position: absolute;
  top: 130px;
  left: 10px;
  width: 160px;
  transform: translatey(0px);
  animation: float 5s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.3em;
  line-height: 1.5;
  font-size: 10px;
  color: #774f38;
  background-color: #ece5ce;
  padding: 10px;
  border-radius: 11px;
  position: relative;
  box-shadow: 20px 20px #83af9b;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
    width: 45px;
    height: 8px;
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
  @media screen and (min-width: 768px) {
    top: 150px;
    left: 50px;
    width: 230px;
    line-height: 1.62;
    font-size: 12px;
    padding: 10px;
  }

  @media screen and (min-width: 1400px) {
    top: 200px;
    left: 250px;
    width: 300px;
    line-height: 1.62;
    font-size: 14px;
    padding: 20px;
    &:after {
      width: 55px;
      height: 11px;
    }
  }
`;

export const WomanContainer = styled.div`
  position: absolute;
  top: 260px;
  right: 30px;
  width: 200px;
  transform: translatey(0px);
  animation: floats 5s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.3em;
  line-height: 1.5;
  font-size: 10px;
  color: #774f38;
  background-color: #ece5ce;
  padding: 10px;
  border-radius: 11px;
  box-shadow: 20px 20px #83af9b;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  &:after {
    transform: translatey(0px);
    animation: floats2 5s ease-in-out infinite;
    content: '.';
    font-weight: bold;
    -webkit-text-stroke: 0.5px #c8c8a9;
    -webkit-text-fill-color: #ece5ce;
    border: 1px solid #c8c8a9;
    text-shadow: 22px 22px #83af9b;
    text-align: right;
    font-size: 55px;
    width: 45px;
    height: 8px;
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
  @media screen and (min-width: 768px) {
    top: 150px;
    right: 60px;
    width: 300px;
    line-height: 1.62;
    font-size: 14px;
    padding: 15px;
  }

  @media screen and (min-width: 1400px) {
    top: 170px;
    right: 250px;
    width: 320px;
    padding: 30px;
    &:after {
      width: 55px;
      height: 11px;
    }
  }
`;

export const Subtitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 1.5;
  color: #232323;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: 0.1em;
    line-height: 1.72;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.2em;
  line-height: 1.5;
  color: #ecb10a;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid #ecb10a;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 0.2em;
    line-height: 1.62;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LoginContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const SignIn = styled.h2`
  width: 100%;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-align: center;
  margin-bottom: 20px;
  color: #ffffff;
`;
export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 350px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  @media screen and (min-width: 1400px) {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 450px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
  margin-left: 5px;
`;

export const Input = styled.input`
  font-family: inherit;
  padding: 10px;
  border-color: #605960;
  border-radius: 3px;
  border-color: transparent;
  outline: none;
  background-color: #ffffff;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const Error = styled.p`
  text-align: center;
  font-size: 20px;
  color: red;
`;

export const Button = styled.button`
  font-family: inherit;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.03em;
  background-color: #605960;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  margin-top: 15px;
  text-transform: uppercase;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: transparent;
    transform: scale(1.7);
    color: #ffffff;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
  color: #ffffff;
  &:hover,
  &:focus {
    color: #c22cc7;
  }
`;

export const Img = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 240px;
    position: absolute;
    bottom: 0px;
    left: -265px;
    z-index: -1;
  }

  @media screen and (min-width: 1400px) {
    width: 270px;
    position: absolute;
    bottom: 0px;
    left: -300px;
  }
`;

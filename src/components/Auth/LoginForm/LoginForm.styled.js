import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SignIn = styled.h2`
  width: 100%;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.62;
  letter-spacing: 0.07em;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.authTitle};
`;
export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  font: 2vw system-ui;
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
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.authSubtitle};
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
  border-radius: 3px;
  border: ${({ theme }) => theme.authInputBorder};
  outline: none;
  background-color: ${({ theme }) => theme.authInputBg};
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const BtnEye = styled.button`
  position: absolute;
  top: 40px;
  right: 15px;
  width: 30px;
  height: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  fill: #2b2b2f;
`;

export const Error = styled.p`
  text-align: center;
  font-size: 20px;
  color: red;
`;

export const Button = styled.button`
  font-family: inherit;
  height: 40px;
  background-color: #605960;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  margin-top: 15px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: rgba(96, 89, 96, 0.1);
  }
`;
export const BtnText = styled.span`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #ffffff;
  text-transform: uppercase;
  transition: font-size 250ms cubic-bezier(0.4, 0, 0.2, 1),
    letter-spacing 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${Button}:hover & {
    font-size: 18px;
    letter-spacing: 0.3em;
    color: ${({ theme }) => theme.authBtnHover};
  }
  ${Button}:focus & {
    font-size: 24px;
    color: ${({ theme }) => theme.authBtnHover};
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

export const StyledLink = styled(NavLink)`
  width: 90px;
  font-size: 22px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 10px;
  outline: none;
  color: ${({ theme }) => theme.authLink};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.authLinkHover};
  }
`;

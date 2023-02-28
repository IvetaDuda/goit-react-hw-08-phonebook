import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BurgerMenuContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.burgerMenuBg};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
`;
export const MenuContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MenuAccound = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 60px;
  transition: transform 0.7s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
`;
export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyleLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 32px;
  letter-spacing: 0.2em;
  outline: none;
  color: ${({ theme }) => theme.burgerLink};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #e87825;
    transform: scale(1.1);
    border-bottom: 2px solid #e87825;
  }
`;

export const LogoutBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: transform 0.3s ease-in-out 0.7s;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(700%)')};
`;

export const LogoutSvg = styled.svg`
  width: 40px;
  height: 40px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: ${({ theme }) => theme.burgerIconLogout};
  ${LogoutBtn}:hover & {
    fill: ${({ theme }) => theme.burgerIconLogoutHover};
    transform: scale(1.1);
  }
  ${LogoutBtn}:focus & {
    fill: ${({ theme }) => theme.burgerIconLogoutHover};
    transform: scale(1.1);
  }
  transform: scale(1.1);
`;
export const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: 20px;
  transition: transform 0.3s ease-in-out 0.5s;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(650%)')};
`;

export const ThemeSvg = styled.svg`
  width: 45px;
  height: 45px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  fill: ${({ theme }) => theme.burgerIcon};

  ${ThemeBtn}:hover & {
    fill: ${({ theme }) => theme.burgerIconHover};
    transform: scale(1.1)
      ${({ theme }) => theme.changeTheme === 'ligth' && 'rotate(360deg)'};

    /* animation: Orbita 1s linear infinite;
    @keyframes Orbita {
      0% {
        transform: rotate(0deg) translateX(0px) rotate(0deg);
      }
      50% {
        transform: rotate(-20deg) translateX(50px) rotate(-60deg);
      }
    } */
  }
  ${ThemeBtn}:focus & {
    outline: none;
    fill: ${({ theme }) => theme.burgerIconHover};

    /* transform: scale(1.1)
      ${({ theme }) => theme !== theme.darkTheme && 'rotate(360deg)'}; */
  }
  ${ThemeBtn}:active & {
    transform: scale(0);
  }
`;

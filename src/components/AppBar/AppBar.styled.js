import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: absolute;
  /* position: fixed; */
  top: 0px;
  left: 0px;
  z-index: 25;

  padding-top: 10px;
  padding-bottom: 10px;
  background: ${({ theme }) => theme.headerBackground};
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  /* outline: 2px solid red; */
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ChangeTheme = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
`;
export const ChangeThemeSvg = styled.svg`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.iconTheme};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    ${ChangeTheme}:hover & {
      transform: scale(1.1);
      fill: #e87825;
    }
    ${ChangeTheme}:focus & {
      transform: scale(1.1);
      fill: #e87825;
    }
  }
`;

export const Auth = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const BurgerMenuBtn = styled.button`
  position: ${({ openMenu }) => openMenu && 'fixed'};
  right: ${({ openMenu }) => openMenu && '20px'};
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  z-index: 5;
  &::before {
    background: ${({ theme }) => theme.burgerBtn};
    content: '';
    display: block;
    height: 2px;
    border-radius: 3px;
    margin: 5px 0;
    transition: 0.5s;
    transform: ${({ openMenu }) =>
      openMenu && ' translateY(8px) rotate(135deg)'};
  }
  &:hover::before {
    transform: ${({ openMenu }) =>
      openMenu ? 'translateY(8px) rotate(135deg) scale(1.3)' : 'scale(1.2)'};
  }
  &:after {
    background: ${({ theme }) => theme.burgerBtn};

    content: '';
    display: block;
    height: 2px;
    border-radius: 3px;
    margin: 5px 0;
    transition: 0.5s;
    transform: ${({ openMenu }) =>
      openMenu && 'translateY(-7px) rotate(-135deg)'};
  }
  &:hover:after {
    transform: ${({ openMenu }) =>
      openMenu ? 'translateY(-7px) rotate(-135deg) scale(1.3)' : 'scale(1.2)'};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const BurgerMenuBtnAfter = styled.div`
  background: ${({ theme }) => theme.burgerBtn};
  content: '';
  display: block;
  height: 2px;
  border-radius: 3px;
  margin: 5px 0;
  transition: 0.5s;
  transform: ${({ openMenu }) => openMenu && 'scale(0)'};
  ${BurgerMenuBtn}:hover & {
    transform: scale(0);
  }
`;

import { Container } from 'components/App/Container.styled';
import AuthNav from 'components/AuthNav';
import Logout from 'components/Logout';
import Navigation from 'components/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
  Header,
  HeaderContainer,
  ChangeThemeSvg,
  ChangeTheme,
  HeaderBox,
  Auth,
  BurgerMenuBtn,
  BurgerMenuBtnAfter,
} from './AppBar.styled';
import sprite from '../../image/symbol-defs.svg';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';

const AppBar = ({ onThemeToggler, theme }) => {
  const { isLoggedIn } = useSelector(state => state.users);
  const [openMenu, setOpenMenu] = useState(false);

  const HandleOpenMenu = () => {
    setOpenMenu(prevState => !prevState);
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <HeaderBox>
            <Navigation onThemeToggler={onThemeToggler} />

            <ChangeTheme type="button" onClick={onThemeToggler}>
              <ChangeThemeSvg>
                {theme === 'dark' ? (
                  <use href={sprite + '#icon-moon'} />
                ) : (
                  <use href={sprite + '#icon-sun-day'} />
                )}
              </ChangeThemeSvg>
            </ChangeTheme>
            <Auth>{isLoggedIn ? <Logout /> : <AuthNav />}</Auth>

            <BurgerMenuBtn
              type="button"
              openMenu={openMenu}
              onClick={HandleOpenMenu}
            >
              <BurgerMenuBtnAfter openMenu={openMenu}></BurgerMenuBtnAfter>
            </BurgerMenuBtn>

            <BurgerMenu
              openMenu={openMenu}
              isLoggedIn={isLoggedIn}
              theme={theme}
              onThemeToggler={onThemeToggler}
              onHandleOpenMenu={HandleOpenMenu}
            />
          </HeaderBox>
        </HeaderContainer>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
export default AppBar;

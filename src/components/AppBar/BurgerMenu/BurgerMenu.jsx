import { useState } from 'react';
import { useGetLogoutMutation } from 'redux/userApi';
import {
  BurgerMenuContainer,
  MenuContainer,
  StyleLink,
  MenuAccound,
  MenuItem,
  LogoutBtn,
  LogoutSvg,
  ThemeBtn,
  ThemeSvg,
} from './BurgerMenu.styled';

import sprite from '../../../image/symbol-defs.svg';
import LogoutMenu from './LogoutMenu';

const BurgerMenu = ({
  openMenu,
  isLoggedIn,
  theme,
  onThemeToggler,
  onHandleOpenMenu,
}) => {
  const [logoutActive, setLogoutActive] = useState(false);

  const [GetLogout] = useGetLogoutMutation();

  const handleLogoutActive = () => {
    setLogoutActive(false);
  };

  const handleLogoutClick = () => {
    GetLogout();
    onHandleOpenMenu();
    setLogoutActive(false);
  };
  return (
    <BurgerMenuContainer open={openMenu}>
      <MenuContainer>
        {isLoggedIn ? (
          <>
            {logoutActive ? (
              <LogoutMenu
                onHandleLogoutClick={handleLogoutClick}
                onHandleLogoutActive={handleLogoutActive}
              />
            ) : (
              <>
                <MenuAccound open={openMenu}>
                  <MenuItem>
                    <StyleLink to="/user" onClick={onHandleOpenMenu}>
                      Profile
                    </StyleLink>
                  </MenuItem>
                  <MenuItem>
                    <StyleLink to="/contacts" onClick={onHandleOpenMenu}>
                      Phonebook
                    </StyleLink>
                  </MenuItem>
                </MenuAccound>
                <ThemeBtn
                  type="button"
                  onClick={onThemeToggler}
                  open={openMenu}
                >
                  <ThemeSvg>
                    {theme === 'dark' ? (
                      <use href={sprite + '#icon-moon'} />
                    ) : (
                      <use href={sprite + '#icon-sun-day'} />
                    )}
                  </ThemeSvg>
                </ThemeBtn>
                <LogoutBtn
                  onClick={() => setLogoutActive(true)}
                  open={openMenu}
                >
                  <LogoutSvg>
                    <use href={sprite + '#icon-logout'} />
                  </LogoutSvg>
                </LogoutBtn>
              </>
            )}
          </>
        ) : (
          <>
            <MenuAccound open={openMenu}>
              <MenuItem>
                <StyleLink to="/" onClick={onHandleOpenMenu}>
                  Home
                </StyleLink>
              </MenuItem>
              <MenuItem>
                <StyleLink to="/login" onClick={onHandleOpenMenu}>
                  Login
                </StyleLink>
              </MenuItem>
              <MenuItem>
                <StyleLink to="/register" onClick={onHandleOpenMenu}>
                  Register
                </StyleLink>
              </MenuItem>
            </MenuAccound>
            <ThemeBtn type="button" onClick={onThemeToggler} open={openMenu}>
              <ThemeSvg>
                {theme === 'dark' ? (
                  <use href={sprite + '#icon-moon'} />
                ) : (
                  <use href={sprite + '#icon-sun-day'} />
                )}
              </ThemeSvg>
            </ThemeBtn>
          </>
        )}
      </MenuContainer>
    </BurgerMenuContainer>
  );
};
export default BurgerMenu;

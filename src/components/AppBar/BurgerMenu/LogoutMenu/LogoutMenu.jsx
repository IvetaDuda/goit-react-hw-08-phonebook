import {
  LogoutContainer,
  LogoutTitle,
  LogoutMenuBtnCheckMark,
  LogoutMenuBtnCancel,
  CheckMarkLogout,
  CancelLogout,
  LogoutBtnContainer,
} from './LogoutMenu.styled.js';

import sprite from '../../../../image/symbol-defs.svg';

const LogoutMenu = ({ onHandleLogoutClick, onHandleLogoutActive }) => {
  return (
    <LogoutContainer>
      <LogoutTitle>
        Are you sure you want to logout of your account?
      </LogoutTitle>
      <LogoutBtnContainer>
        <LogoutMenuBtnCheckMark onClick={onHandleLogoutClick}>
          <CheckMarkLogout>
            <use href={sprite + '#icon-check_mark'} />
          </CheckMarkLogout>
        </LogoutMenuBtnCheckMark>

        <LogoutMenuBtnCancel onClick={onHandleLogoutActive}>
          <CancelLogout>
            <use href={sprite + '#icon-cancel'} />
          </CancelLogout>
        </LogoutMenuBtnCancel>
      </LogoutBtnContainer>
    </LogoutContainer>
  );
};
export default LogoutMenu;

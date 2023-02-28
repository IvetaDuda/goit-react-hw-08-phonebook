import styled from 'styled-components';

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 300px;
`;

export const LogoutTitle = styled.h2`
  font-size: 24px;
  letter-spacing: 0.1em;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.menuLogoutTitle};
`;
export const LogoutBtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutMenuBtnCheckMark = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 25px;
  &:hover,
  &:focus {
    transform: scale(1.1);
    border: 3px solid #3bb934;
    border-radius: 50%;
  }
`;
export const LogoutMenuBtnCancel = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);

    border: 3px solid #d62828;
    border-radius: 50%;
  }
`;
export const CheckMarkLogout = styled.svg`
  width: 40px;
  height: 40px;
  fill: #3bb934;
`;
export const CancelLogout = styled.svg`
  width: 30px;
  height: 30px;
  fill: #d62828;
  padding: 6px;
`;

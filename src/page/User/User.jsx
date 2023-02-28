import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/userApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  UserCardAvatar,
  UserConfirmation,
  UserInfoList,
  UserPhonebook,
} from 'components/UserData';
import {
  UserContainer,
  UserInfo,
  CardAvatar,
  UserBox,
  Triangle,
  Box,
  UserModile,
} from './User.styled';

const User = () => {
  const { name, email, token, userPhone, userBirthday } = useSelector(
    state => state.users
  );

  const { data, isFetching } = useGetCurrentUserQuery(token, {
    skip: !token,
  });
  return (
    <UserContainer>
      {!token && <UserConfirmation />}
      {data && !isFetching && (
        <UserModile>
          <UserInfo>
            <CardAvatar>
              <UserCardAvatar />
            </CardAvatar>
            <UserBox>
              <UserInfoList
                name={name}
                email={email}
                userPhone={userPhone}
                userBirthday={userBirthday}
              />
              <UserPhonebook />
              <Triangle />
              <Box />
            </UserBox>
          </UserInfo>
        </UserModile>
      )}

      <ToastContainer autoClose={3000} theme="dark" />
    </UserContainer>
  );
};
export default User;

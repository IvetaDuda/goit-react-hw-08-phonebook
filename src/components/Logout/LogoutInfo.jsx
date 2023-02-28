import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery, useGetLogoutMutation } from 'redux/userApi';
import user from '../../image/user.png';
import sprite from '../../image/symbol-defs.svg';

import {
  Container,
  Img,
  Text,
  Item,
  Btn,
  Welcome,
  ImgContainer,
  LogoutSvg,
} from './Logout.styled';

const LogoutInfo = () => {
  const { name, token } = useSelector(state => state.users);
  const [GetLogout] = useGetLogoutMutation();
  const handleLogoutClick = () => {
    GetLogout();
  };
  const { data } = useGetCurrentUserQuery(token, { skip: !token });

  const avatarImg = data.avatarURL
    ? `http://localhost:5000/${data.avatarURL}`
    : user;
  return (
    <Container>
      <ImgContainer>
        <Img src={avatarImg} alt="avatar" />
      </ImgContainer>
      <Text>
        <Welcome>Welcome:</Welcome>
        <Item to="/user">{name}</Item>
      </Text>
      <Btn onClick={handleLogoutClick}>
        <LogoutSvg>
          <use href={sprite + '#icon-logout'} />
        </LogoutSvg>
      </Btn>
    </Container>
  );
};

export default LogoutInfo;

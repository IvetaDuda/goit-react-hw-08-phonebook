import { useSelector } from 'react-redux';
import { useGetLogoutMutation } from 'redux/userApi';
import user from '../../image/user.png';
import logout from '../../image/logout.svg';

import { Container, Img, Text, Item, Btn } from './Logout.styled';

const Logout = () => {
  const { name } = useSelector(state => state.users);
  const [GetLogout] = useGetLogoutMutation();

  const handleLogoutClick = () => {
    GetLogout();
  };
  return (
    <Container>
      <Img src={user} alt="user" width="40" />
      <Text>
        Welcome: <Item>{name}</Item>
      </Text>
      <Btn onClick={handleLogoutClick}>
        <img src={logout} alt="Logout" width="30px" />
      </Btn>
    </Container>
  );
};
export default Logout;

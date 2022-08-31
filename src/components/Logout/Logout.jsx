import { useSelector } from 'react-redux';
import { useGetLogoutMutation } from 'redux/userApi';
import user from '../../image/user.png';

import { Container, Img, Text, Item, Btn } from './Logout.styled';

const Logout = () => {
  const { name } = useSelector(state => state.users);
  const [GetLogout, status] = useGetLogoutMutation();

  const handleLogoutClick = () => {
    GetLogout();
  };
  return (
    <Container>
      <Img src={user} alt="user" width="30" />
      <Text>
        Welcome: <Item>{name}</Item>
      </Text>
      <Btn onClick={handleLogoutClick}>LogOut</Btn>
    </Container>
  );
};
export default Logout;

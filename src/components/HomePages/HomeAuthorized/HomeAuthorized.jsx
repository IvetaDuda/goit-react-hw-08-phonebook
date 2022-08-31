import { useSelector } from 'react-redux';
import {
  Container,
  User,
  Image,
  Text,
  StyledLink,
  Box,
} from './HomeAuthorized.styled';
import user from '../../../image/user.png';

const HomeAuthorized = () => {
  const { name } = useSelector(state => state.users);
  return (
    <Container>
      <Box>
        <Image src={user} alt="user" width="150px" height="100px" />
        <User>{name}</User>
      </Box>
      <Text>
        Go to <StyledLink to="/contacts">Phonebook</StyledLink>
      </Text>
    </Container>
  );
};
export default HomeAuthorized;

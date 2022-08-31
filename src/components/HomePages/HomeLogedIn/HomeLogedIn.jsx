import {
  Container,
  Title,
  Text,
  StyledLink,
  Item,
  LinkBox,
  // OpenArms,
} from './HomeLogedIn.styled';
import phoneCall from '../../../image/phoneCall.png';
// import openArmsMan from '../../../image/OpenArmsMan.png';

const HomeLogedIn = () => {
  return (
    <Container>
      <img src={phoneCall} alt="phoneCall" width="100" />

      {/* <OpenArms src={openArmsMan} alt="openArmsMan" width="400px" /> */}
      <Title>PhoneBook</Title>
      <Text>Congratulations!</Text>
      <Item>
        To view or add a contact list
        <LinkBox>
          <StyledLink to={`/Login`}>Login</StyledLink> or &nbsp;
          <StyledLink to={`/register`}>Sign Up</StyledLink>
        </LinkBox>
      </Item>
    </Container>
  );
};
export default HomeLogedIn;

import {
  Container,
  H1,
  Title,
  StyledLink,
  Hi,
  Answer,
  ManContainer,
  WomanContainer,
} from './HomeLogedIn.styled';
import man from '../../../image/man.png';
import woman from '../../../image/woman.png';

const HomeLogedIn = () => {
  return (
    <Container>
      <H1>Phonebook</H1>
      <ManContainer>
        <Hi>
          Hi! <br /> Have you heard about our new app?
          <Title>Phonebook ?</Title>
        </Hi>
        <img src={man} alt="man" width="550px" />
      </ManContainer>
      <WomanContainer>
        <Answer>
          To go to the contact list,
          <StyledLink to={`/Login`}> login </StyledLink> to your account.
          <br /> If you are not yet with us, you can
          <StyledLink to={`/register`}> register </StyledLink> here.
        </Answer>
        <img src={woman} alt="woman" width="500px" />
      </WomanContainer>
    </Container>
  );
};
export default HomeLogedIn;

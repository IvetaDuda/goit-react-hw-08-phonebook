import {
  Title,
  Subtitle,
  ManImg,
  WomanImg,
  StyledLink,
  ManContainer,
  WomanContainer,
  People,
} from './HomeLogedIn.styled';
import man from '../../../image/man.png';
import woman from '../../../image/woman.png';

const HomeLogedIn = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <People>
        <ManContainer>
          Hi! <br /> Have you heard about our new app,
          <Subtitle>Phonebook ?</Subtitle>
        </ManContainer>
        <ManImg src={man} alt="man" />
        <WomanContainer>
          To go to the contact list,
          <StyledLink to={`/Login`}> login </StyledLink> to your account.
          <br /> If you are not yet with us, you can
          <StyledLink to={`/register`}> register </StyledLink> here.
        </WomanContainer>
        <WomanImg src={woman} alt="woman" />
      </People>
    </>
  );
};
export default HomeLogedIn;

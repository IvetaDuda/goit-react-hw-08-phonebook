import {
  Title,
  Subtitle,
  ManImg,
  WomanImg,
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
    <>
      <Title>Phonebook</Title>
      <ManContainer>
        <Hi>
          Hi! <br /> Have you heard about our new app,
          <Subtitle>Phonebook ?</Subtitle>
        </Hi>
        <ManImg src={man} alt="man" />
      </ManContainer>
      <WomanContainer>
        <Answer>
          To go to the contact list,
          <StyledLink to={`/Login`}> login </StyledLink> to your account.
          <br /> If you are not yet with us, you can
          <StyledLink to={`/register`}> register </StyledLink> here.
        </Answer>
        <WomanImg src={woman} alt="woman" />
      </WomanContainer>
    </>
  );
};
export default HomeLogedIn;

import {
  Container,
  Title,
  StyledLink,
  Man,
  Woman,
  Hi,
  Answer,
} from './HomeLogedIn.styled';
import man from '../../../image/man.png';
import woman from '../../../image/woman.png';

const HomeLogedIn = () => {
  return (
    <Container>
      <Man src={man} alt="man" width="550px" />
      <Hi>
        Привіт! Ти вже чув про наш новий додаток <Title>Phonebook</Title>?
      </Hi>
      <Woman src={woman} alt="woman" width="500px" />
      <Answer>
        Щоб перейти до списку контактів
        <StyledLink to={`/Login`}>увійди </StyledLink> до свого аккаунту.
        <br /> Якщо и ще не з нами, можеш
        <StyledLink to={`/register`}>зареєструйся</StyledLink> тут.
      </Answer>
    </Container>
  );
};
export default HomeLogedIn;

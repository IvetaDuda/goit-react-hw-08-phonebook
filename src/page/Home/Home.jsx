import { Container } from './Home.styled';

import { useSelector } from 'react-redux';
import HomeAuthorized from 'components/HomePages/HomeAuthorized/HomeAuthorized';
import { HomeLogedIn } from 'components/HomePages';

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.users);

  return (
    <Container>{isLoggedIn ? <HomeAuthorized /> : <HomeLogedIn />}</Container>
  );
};

export default Home;

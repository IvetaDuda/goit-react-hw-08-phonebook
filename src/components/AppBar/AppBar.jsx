import { Container } from 'components/App/Container.styled';
import AuthNav from 'components/AuthNav';
import Logout from 'components/Logout';
import Navigation from 'components/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header, HeaderContainer } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useSelector(state => state.users);
  return (
    <>
      <Header>
        <HeaderContainer>
          <Navigation />
          {isLoggedIn ? <Logout /> : <AuthNav />}
        </HeaderContainer>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
export default AppBar;

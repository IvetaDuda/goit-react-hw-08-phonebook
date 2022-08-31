import AuthNav from 'components/AuthNav';
import Logout from 'components/Logout';
import Navigation from 'components/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useSelector(state => state.users);
  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <Logout /> : <AuthNav />}
      </Header>
      <Outlet />
    </>
  );
};
export default AppBar;

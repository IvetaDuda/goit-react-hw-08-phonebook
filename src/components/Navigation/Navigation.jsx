import { Nav, StyleLink, Image } from './Navigatin.styled';
import phoneCall from '../../image/phoneCall.svg';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const { isLoggedIn } = useSelector(state => state.users);
  return (
    <Nav>
      <Image src={phoneCall} alt="phoneCall" width={40} />
      {!isLoggedIn ? (
        <StyleLink to="/">Home</StyleLink>
      ) : (
        <StyleLink to="/contacts">Phonebook</StyleLink>
      )}
    </Nav>
  );
};
export default Navigation;

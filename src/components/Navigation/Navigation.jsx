import { Nav, StyleLink, StyleLinkC, Image } from './Navigatin.styled';
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
        <StyleLinkC to="/contacts">Phonebook</StyleLinkC>
      )}
    </Nav>
  );
};
export default Navigation;

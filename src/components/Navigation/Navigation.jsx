import { Nav, StyleLink, StyleLinkC, Image } from './Navigatin.styled';
import sprite from '../../image/symbol-defs.svg';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const { isLoggedIn } = useSelector(state => state.users);
  return (
    <Nav>
      <Image>
        <use href={sprite + '#icon-phoneCall'} />
      </Image>
      {!isLoggedIn ? (
        <StyleLink to="/">Home</StyleLink>
      ) : (
        <StyleLinkC to="/contacts">Phonebook</StyleLinkC>
      )}
    </Nav>
  );
};
export default Navigation;

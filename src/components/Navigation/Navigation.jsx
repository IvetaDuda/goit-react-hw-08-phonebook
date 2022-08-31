import { Nav, StyleLink, Image } from './Navigatin.styled';
import phoneCall from '../../image/phoneCall.png';

const Navigation = () => {
  return (
    <Nav>
      <Image src={phoneCall} alt="phoneCall" width={35} />
      <StyleLink to="/">Home</StyleLink>
      <StyleLink to="/contacts">Contacts</StyleLink>
    </Nav>
  );
};
export default Navigation;

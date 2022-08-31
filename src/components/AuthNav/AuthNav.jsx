import { Container, StyleLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <StyleLink to="/login">Login</StyleLink>
      <StyleLink to="/register">Sign Up</StyleLink>
    </Container>
  );
};

export default AuthNav;

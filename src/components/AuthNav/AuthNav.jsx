import { Container, StyleLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <StyleLink to="/login">Login</StyleLink>
      <StyleLink to="/register">Register</StyleLink>
    </Container>
  );
};

export default AuthNav;

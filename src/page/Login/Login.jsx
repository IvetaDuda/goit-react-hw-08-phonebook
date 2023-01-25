import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetUserLoginMutation } from 'redux/userApi';
import { getLogin } from 'redux/userSlice';
import man from '../../image/man.png';
import {
  Form,
  Label,
  Input,
  Button,
  Span,
  Error,
  Img,
  StyledLink,
  SignIn,
  LoginContainer,
} from './Login.styled';
// import { Container } from '../Container.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');

  const dispatch = useDispatch();
  const [getUserLogin, status] = useGetUserLoginMutation();

  const hendleChangeLogin = e => setEmail(e.target.value);
  const hendleChangePassword = e => setPassoword(e.target.value);

  const hendleSubmit = e => {
    e.preventDefault();
    const credentials = { email, password };

    getUserLogin(credentials)
      .then(({ data }) => {
        dispatch(getLogin(data));
      })
      .catch(error => error.message);

    setEmail('');
    setPassoword('');
  };

  return (
    // <Container>
    <LoginContainer>
      <Form autoCapitalize="off" onSubmit={hendleSubmit}>
        <Img src={man} alt="man" />
        <SignIn>Sign In</SignIn>
        <Label name="email">
          <Span>Email</Span>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={hendleChangeLogin}
            required
          />
        </Label>
        <Label name="password">
          <Span>Password</Span>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={hendleChangePassword}
            required
          />
        </Label>
        {status.isError === true && (
          <Error>Oops...Invalid authorization, please try again</Error>
        )}
        <Button type="submit">Login</Button>
        <StyledLink to="/register">Sign Up</StyledLink>
      </Form>
    </LoginContainer>
    // </Container>
  );
};
export default Login;

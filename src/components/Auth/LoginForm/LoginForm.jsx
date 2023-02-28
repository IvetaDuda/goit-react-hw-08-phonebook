import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetUserLoginMutation } from 'redux/userApi';
import { getLogin } from 'redux/userSlice';
import man from '../../../image/man.png';
import sprite from '../../../image/symbol-defs.svg';
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
  BtnEye,
  BtnText,
} from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);

  const dispatch = useDispatch();
  const [getUserLogin, status] = useGetUserLoginMutation();
  // console.log(status);

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

  const togglePassword = () => setPasswordShow(prevState => !prevState);

  return (
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
          type={passwordShow ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={hendleChangePassword}
          required
        />
        <BtnEye type="button" onClick={togglePassword}>
          {passwordShow ? (
            <svg width="20" height="20">
              <use href={sprite + '#icon-eye'} />
            </svg>
          ) : (
            <svg width="20" height="20">
              <use href={sprite + '#icon-eye-blocked'} />
            </svg>
          )}
        </BtnEye>
      </Label>
      {status.isError === true && (
        <Error>Oops...Invalid authorization, please try again</Error>
      )}
      <Button type="submit">
        <BtnText>Login</BtnText>
      </Button>
      <StyledLink to="/register">Register</StyledLink>
    </Form>
  );
};
export default LoginForm;

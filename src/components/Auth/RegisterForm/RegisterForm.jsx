import { useState } from 'react';
import { useGetSignupMutation } from 'redux/userApi';
import Woman from '../../../image/woman.png';
import {
  Form,
  Label,
  Input,
  Button,
  Span,
  Error,
  SignUp,
  Img,
  StyledLink,
  BtnEye,
  BtnText,
} from './RegisterForm.styled';
import sprite from '../../../image/symbol-defs.svg';
// import { useSelector } from 'react-redux';
// import { UserConfirmation } from 'components/UserData';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(false);

  const [getSignup, status] = useGetSignupMutation();

  // const { token } = useSelector(state => state.users);
  // console.log(token);

  const hendleSubmit = e => {
    e.preventDefault();
    getSignup({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };
  const hendleInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const togglePassword = () => setPasswordShow(prevState => !prevState);

  return (
    <>
      {/* {token === undefined ? (
        <UserConfirmation />
      ) : ( */}
      <Form autoCapitalize="off" onSubmit={hendleSubmit}>
        <Img src={Woman} alt="Woman" />
        <SignUp>Sign Up</SignUp>
        <Label name="name">
          <Span>Login</Span>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={hendleInputChange}
          />
        </Label>
        <Label name="email">
          <Span>Email</Span>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={hendleInputChange}
          />
        </Label>
        <Label name="password">
          <Span>Password</Span>
          <Input
            type={passwordShow ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={hendleInputChange}
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
          <Error>Oops... Something went wrong, please try again.</Error>
        )}
        <Button type="submit">
          <BtnText>Register</BtnText>
        </Button>
        <StyledLink to="/login">Login</StyledLink>
      </Form>
      {/* )} */}
    </>
  );
};
export default RegisterForm;

import { useState } from 'react';
import { useGetSignupMutation } from 'redux/userApi';
import Woman from '../../image/woman.png';
import {
  RegisterContainer,
  Form,
  Label,
  Input,
  Button,
  Span,
  Error,
  SignUp,
  Img,
  StyledLink,
} from './Register.styled';
// import { Container } from '../Container.styled';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [getSignup, status] = useGetSignupMutation();

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

  return (
    // <Container>
    <RegisterContainer>
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
            type="password"
            name="password"
            value={password}
            onChange={hendleInputChange}
          />
        </Label>
        {status.isError === true && (
          <Error>Oops... Something went wrong, please try again.</Error>
        )}
        <Button type="submit">Sign Up</Button>
        <StyledLink to="/register">Login</StyledLink>
      </Form>
    </RegisterContainer>
    // </Container>
  );
};
export default Register;

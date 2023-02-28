import { Confirmation, ConfirmationTitle } from './UserConfirmation.styled';

const UserConfirmation = () => {
  return (
    <Confirmation>
      <ConfirmationTitle>
        You have received a letter confirming your registration. After that,
        refresh the page and Log In.
      </ConfirmationTitle>
    </Confirmation>
  );
};
export default UserConfirmation;

import Calendar from 'components/UserData/Calendar';
import { useState } from 'react';
import { useUpdateUserCurrentMutation } from 'redux/userApi';
import sprite from '../../../../image/symbol-defs.svg';
import { toast } from 'react-toastify';
import { ButtonChange, SvgChange, UserItem, Value } from './UserField.styled';

const UserFieldBirthday = ({ userBirthday }) => {
  const [userName, setUserName] = useState('');
  const [toggleInput, setToggleInput] = useState(false);

  const [updateUserCurrent] = useUpdateUserCurrentMutation();

  const handleSend = () => {
    if (userName.length === 0 || userBirthday === userName) {
      setToggleInput(false);
      return;
    } else {
      const date = JSON.parse(userName);

      updateUserCurrent({ userBirthday: date })
        .unwrap()
        .then(payload =>
          toast.success(`Your birthday has been successfully changed`)
        )
        .catch(error => toast.error(`Incorrect birthday format`));
      setToggleInput(false);
    }
  };
  const handleDate = e => {
    setUserName(e);
  };
  return (
    <UserItem>
      <Value>Birthday:</Value>
      {toggleInput ? (
        <>
          <Calendar onHandleDate={handleDate} onBirthday={userBirthday} />
          <ButtonChange type="button" onClick={handleSend}>
            <SvgChange>
              <use href={sprite + '#icon-send'} />
            </SvgChange>
          </ButtonChange>
        </>
      ) : (
        <>
          {!userBirthday ? (
            <span>00.00.0000</span>
          ) : (
            <span>{userBirthday}</span>
          )}
          <ButtonChange type="button" onClick={() => setToggleInput(true)}>
            <SvgChange>
              <use href={sprite + '#icon-change'} />
            </SvgChange>
          </ButtonChange>
        </>
      )}
    </UserItem>
  );
};
export default UserFieldBirthday;

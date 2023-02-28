import { useState } from 'react';
import { useUpdateUserCurrentMutation } from 'redux/userApi';
import { toast } from 'react-toastify';
import sprite from '../../../../image/symbol-defs.svg';
import {
  ButtonChange,
  SvgChange,
  InputChange,
  UserItem,
  Value,
} from './UserField.styled';

const UserFieldPhone = ({ userPhone }) => {
  const [userName, setUserName] = useState('');
  const [toggleInput, setToggleInput] = useState(false);

  const [updateUserCurrent] = useUpdateUserCurrentMutation();

  const handleChange = e => {
    setUserName('');
    if (e.currentTarget.value === userName) return;
    setUserName(e.currentTarget.value);
  };

  const handleClickBtn = () => {
    setToggleInput(true);
    return !userPhone ? setUserName('+380000000000') : setUserName(userPhone);
  };

  const handleSend = () => {
    if (
      userName.length === 0 ||
      userPhone === userName ||
      userName === '+380000000000'
    ) {
      setToggleInput(false);
      return;
    } else {
      updateUserCurrent({ userPhone: userName })
        .unwrap()
        .then(payload =>
          toast.success(`Your phone number has been successfully changed`)
        )
        .catch(error => toast.error(`Incorrect phone number format`));
      setToggleInput(false);
    }
  };
  return (
    <UserItem>
      <Value>Phone:</Value>
      {toggleInput ? (
        <>
          <InputChange
            type="text"
            min="13"
            pattern="/^\+380\d{9}$/"
            value={userName}
            name={userPhone}
            onChange={handleChange}
          />
          <ButtonChange type="button" onClick={handleSend}>
            <SvgChange>
              <use href={sprite + '#icon-send'} />
            </SvgChange>
          </ButtonChange>
        </>
      ) : (
        <>
          {!userPhone ? <span>+380000000000</span> : <span>{userPhone}</span>}
          <ButtonChange type="button" onClick={handleClickBtn}>
            <SvgChange>
              <use href={sprite + '#icon-change'} />
            </SvgChange>
          </ButtonChange>
        </>
      )}
    </UserItem>
  );
};

export default UserFieldPhone;

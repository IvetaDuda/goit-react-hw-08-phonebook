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
  Item,
} from './UserField.styled';

const UserField = ({ value, text }) => {
  const [userName, setUserName] = useState(value);
  const [toggleInput, setToggleInput] = useState(false);

  const [updateUserCurrent] = useUpdateUserCurrentMutation();

  const handleChange = e => {
    if (e.currentTarget.value === userName) return;
    setUserName(e.currentTarget.value);
  };
  const handleSend = () => {
    if (userName.length === 0 || value === userName) {
      setToggleInput(false);
      return;
    } else {
      updateUserCurrent({ [text]: userName })
        .unwrap()
        .then(payload =>
          toast.success(`Your ${text} has been successfully changed`)
        )
        .catch(error => toast.error(`Invalid value`));
      setToggleInput(false);
    }
  };
  return (
    <UserItem>
      <Value>{text}:</Value>
      {toggleInput ? (
        <>
          <InputChange
            type="text"
            value={userName}
            name={userName}
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
          <Item>{value}</Item>
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
export default UserField;

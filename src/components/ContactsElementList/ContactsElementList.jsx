import { useState } from 'react';
import {
  useDeleteContactMutation,
  usePatchContactMutation,
} from 'redux/contactsApi';
import { RotatingLines } from 'react-loader-spinner';
import Delete from '../../image/delete.svg';
import Change from '../../image/change.svg';
import Send from '../../image/send.svg';
import Cancel from '../../image/cancel.svg';
import {
  Contacts,
  Button,
  Input,
  ChangeBox,
  ButtonChange,
  ButtonSend,
  ContactBox,
  Number,
} from './ContactsElementList.styled';

const ContactsElementList = ({ id, name, number }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [contentName, setContentName] = useState(name);
  const [contentNumber, setContentNumber] = useState(number);

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const [patchContact] = usePatchContactMutation();

  const handleUpdateTodo = () => {
    setIsUpdate(true);
  };
  const handleSend = () => {
    if (contentName.length === 0) {
      return;
    } else {
      patchContact({ id, name: contentName });
      setIsUpdate(false);
    }

    if (contentNumber.length === 0) {
      return;
    } else {
      patchContact({ id, number: contentNumber });
      setIsUpdate(false);
    }
    setIsUpdate(false);
  };
  return (
    <Contacts>
      {isUpdate ? (
        <ChangeBox>
          <Input
            type="text"
            value={contentName}
            onChange={e => setContentName(e.currentTarget.value)}
          />
          <Input
            type="text"
            value={contentNumber}
            onChange={e => setContentNumber(e.currentTarget.value)}
          />
          <ButtonSend type="button" onClick={handleSend}>
            <img src={Send} alt="send" width="20" />
          </ButtonSend>
          <Button type="button" onClick={() => setIsUpdate(false)}>
            <img src={Cancel} alt="cancel" width="20" />
          </Button>
        </ChangeBox>
      ) : (
        <>
          <ContactBox>
            {name}: <Number>{number}</Number>
          </ContactBox>
          <ButtonChange type="button" onClick={handleUpdateTodo}>
            {isDeleting ? (
              <RotatingLines strokeColor="#232323" width="12" />
            ) : (
              <img src={Change} alt="change" width="20" />
            )}
          </ButtonChange>
          <Button onClick={() => deleteContact(id)}>
            {isDeleting ? (
              <RotatingLines strokeColor="#232323" width="12" />
            ) : (
              <img src={Delete} alt="delete" width="30" />
            )}
          </Button>
        </>
      )}
    </Contacts>
  );
};

export default ContactsElementList;

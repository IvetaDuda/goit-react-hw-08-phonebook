import {
  useDeleteContactMutation,
  usePatchContactMutation,
} from 'redux/contactsApi';
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
import { RotatingLines } from 'react-loader-spinner';
import Delete from '../../image/delete.svg';
import Change from '../../image/change.svg';
import Send from '../../image/send.svg';
import Cancel from '../../image/cancel.svg';
import { useState } from 'react';

const ContactsElementList = ({ id, name, number }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [contentName, setContentName] = useState('');
  const [contentNumber, setContentNumber] = useState('');

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
            placeholder={name}
            value={contentName}
            autoComplete={name.id}
            onChange={e => setContentName(e.currentTarget.value)}
          />
          <Input
            type="text"
            placeholder={number}
            autoComplete={number}
            value={contentNumber}
            onChange={e => setContentNumber(e.currentTarget.value)}
          />
          <ButtonSend type="button" onClick={handleSend}>
            <img src={Send} alt="send" width="30" />
          </ButtonSend>
          <Button type="button" onClick={() => setIsUpdate(false)}>
            <img src={Cancel} alt="cancel" width="30" />
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
              <img src={Change} alt="change" width="30" />
            )}
          </ButtonChange>
          <Button onClick={() => deleteContact(id)}>
            {isDeleting ? (
              <RotatingLines strokeColor="#232323" width="12" />
            ) : (
              <img src={Delete} alt="delete" width="40" />
            )}
          </Button>
        </>
      )}
    </Contacts>
  );
};

export default ContactsElementList;

import { useEffect, useState } from 'react';
import {
  useDeleteContactMutation,
  usePatchContactMutation,
} from 'redux/contactsApi';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import sprite from '../../image/symbol-defs.svg';
import {
  Contacts,
  Button,
  Input,
  ChangeBox,
  ButtonChange,
  ButtonSend,
  ContactBox,
  Number,
  SvgChange,
  SvgDelete,
  Loading,
} from './ContactsElementList.styled';

const ContactsElementList = ({ _id, name, phone }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [contentName, setContentName] = useState(name);
  const [contentNumber, setContentNumber] = useState(phone);

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [patchContact, { isError, isSuccess, isLoading }] =
    usePatchContactMutation();

  useEffect(() => {
    if (isError) {
      toast.error('Invalid value');
      setIsUpdate(true);
    }
    if (isSuccess) {
      toast.success(`Contact, successfully change`);
    }
  }, [isError, isSuccess]);

  const handleUpdateTodo = () => {
    setIsUpdate(true);
  };
  const handleSend = () => {
    if (contentName.length === 0 || contentNumber.length === 0) {
      return;
    } else {
      patchContact({ _id, name: contentName, phone: contentNumber });
      setIsUpdate(false);
    }
  };
  const handleDeleted = () => {
    deleteContact(_id);
    toast.success(`Contact ${name}, delete`);
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
            <SvgChange>
              <use href={sprite + '#icon-send'} />
            </SvgChange>
          </ButtonSend>
          <Button type="button" onClick={() => setIsUpdate(false)}>
            <SvgChange>
              <use href={sprite + '#icon-cancel'} />
            </SvgChange>
          </Button>
        </ChangeBox>
      ) : (
        <>
          <ContactBox>
            {name}: <Number>{phone}</Number>
          </ContactBox>
          <ButtonChange type="button" onClick={handleUpdateTodo}>
            {isLoading ? (
              <Loading>
                <RotatingLines strokeColor="#232323" />
              </Loading>
            ) : (
              <SvgChange>
                <use href={sprite + '#icon-change'} />
              </SvgChange>
            )}
          </ButtonChange>
          <Button onClick={handleDeleted}>
            {isDeleting ? (
              <Loading>
                <RotatingLines strokeColor="#232323" />
              </Loading>
            ) : (
              <SvgDelete>
                <use href={sprite + '#icon-delete'} />
              </SvgDelete>
            )}
          </Button>
        </>
      )}
    </Contacts>
  );
};

export default ContactsElementList;

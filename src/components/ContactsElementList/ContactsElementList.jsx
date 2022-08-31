import {
  useDeleteContactMutation,
  // usePatchContactMutation,
} from 'redux/contactsApi';
import { Contacts, Button } from './ContactsElementList.styled';
import { RotatingLines } from 'react-loader-spinner';
import Delete from '../../image/deleted.svg';

const ContactsElementList = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  // const [patchContact] = usePatchContactMutation();
  return (
    <Contacts>
      <div>
        {name}: {number}
      </div>
      {/* <div>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="number" />
        <button type="button">UpDate</button>
      </div> */}
      <Button onClick={() => deleteContact(id)}>
        {isDeleting ? (
          <RotatingLines strokeColor="#f27b77" width="12" />
        ) : (
          <img src={Delete} alt="delete" />
        )}
      </Button>
    </Contacts>
  );
};

export default ContactsElementList;

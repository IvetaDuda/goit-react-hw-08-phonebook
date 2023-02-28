import { useSelector } from 'react-redux';

import { useGetContactsQuery } from 'redux/contactsApi';
import { getFilter } from 'redux/contactsSlice';

import ContactsElementList from '../ContactsElementList';
import Spinner from 'components/Spinner';

import { List, Error } from './ContactList.styled';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const filterContacts = () => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const contactList = filterContacts();

  const renderContacts = contacts && !isLoading && contactList.length > 0;
  const errorMessage = error && error.originalStatus === 404;

  return (
    <List>
      {renderContacts &&
        contactList.map(contact => (
          <ContactsElementList key={contact._id} {...contact} />
        ))}
      {isLoading && <Spinner />}
      {errorMessage && <Error> Not Found!</Error>}
    </List>
  );
};

export default ContactList;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ContactContainer,
  Title,
  SubTitle,
  ContactDiv,
  Contact,
  Form,
} from './Contacts.stayled';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

const Contacts = () => {
  return (
    <ContactContainer>
      <ContactDiv>
        <Form>
          <Title>Phonebook</Title>
          <ContactForm />
        </Form>
        <Contact>
          <SubTitle>Contacts</SubTitle>
          <Filter />
          <ContactList />
        </Contact>
      </ContactDiv>
      <ToastContainer autoClose={3000} theme="dark" />
    </ContactContainer>
  );
};
export default Contacts;

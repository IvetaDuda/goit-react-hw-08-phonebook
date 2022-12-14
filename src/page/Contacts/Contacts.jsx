import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Title,
  SubTitle,
  Div,
  Contact,
  Form,
} from './Contacts.stayled';

import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

const Contacts = () => {
  return (
    <Container>
      <Div>
        <Form>
          <Title>Phonebook</Title>
          <ContactForm />
        </Form>
        <Contact>
          <SubTitle>Contacts</SubTitle>
          <Filter />
          <ContactList />
        </Contact>
      </Div>
      <ToastContainer autoClose={3000} />
    </Container>
  );
};
export default Contacts;

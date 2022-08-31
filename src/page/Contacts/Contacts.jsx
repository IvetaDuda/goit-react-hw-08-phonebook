import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import next from '../../image/next.png';

import {
  Container,
  Title,
  SubTitle,
  Item,
  ContainerAfter,
  // Form,
  // Button,
  // ContainerAfter2,
  // Div,
  // Btn,
  // ImgNext,
  // IconBoxNext,
  // TextNext,
  // Box,
} from './Contacts.stayled';

import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
// import { useState } from 'react';
// import { HomeAuthorized } from 'components/HomePages';

const Contacts = () => {
  // const [click, setClick] = useState(false);

  // const hendleBtnClick = e => {
  //   setClick(true);
  // };
  // const hendleBtnClickExit = e => {
  //   setClick(false);
  // };
  return (
    // <Box>
    <Container>
      {/* <Button type="button" onClick={hendleBtnClick} />
      <IconBoxNext>
        <TextNext>Contacts</TextNext>
        <ImgNext src={next} alt="nextArrow" width="20" height="20" />
      </IconBoxNext> */}
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
      <Item></Item>

      {/* <HomeAuthorized />
      {click && (
        <>
          <ContainerAfter2>
            <Title>Phonebook</Title>
            <ContactForm />
            <SubTitle>Contacts</SubTitle>
            <Filter />
            <ContactList />
            <Div>
              <Btn type="button" onClick={hendleBtnClickExit} />
            </Div>
          </ContainerAfter2>
        </>
      )} */}
      <ContainerAfter />
      <ToastContainer autoClose={3000} />
    </Container>
    // </Box>
  );
};
export default Contacts;

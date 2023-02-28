import {
  PhonebookBox,
  Phonebook,
  PhonebookArrow,
} from './UserPhonebook.styled';
import sprite from '../../../image/symbol-defs.svg';

const UserPhonebook = () => {
  return (
    <PhonebookBox to="/contacts">
      <Phonebook>PHONEBOOK</Phonebook>
      <PhonebookArrow>
        <use href={sprite + '#icon-arrow-right'}></use>
      </PhonebookArrow>
    </PhonebookBox>
  );
};
export default UserPhonebook;

import { useSelector } from 'react-redux';
import useModal from '../../../hooks/modal';
import { useGetCurrentUserQuery } from 'redux/userApi';

import DefaultAvatar from '../../../image/user.png';
import sprite from '../../../image/symbol-defs.svg';
import {
  CardContainer,
  CardRest,
  Avatar,
  Card,
  AvatarBefore,
  ChangeAvatar,
  InfoCamera,
  Title,
  ChangeContainer,
  ChangeButton,
} from './UserCardAvatar.styled';
import Modal from 'components/Modal';
import AvatarModal from './AvatarModal';

const UserCardAvatar = () => {
  const { isModalOpen, closeModal, toggleModal } = useModal();
  const { name, token } = useSelector(state => state.users);
  const { data } = useGetCurrentUserQuery(token, { skip: !token });

  const avatarImg = data.avatarURL
    ? `https://phonebook-server-h3zp.onrender.com/${data.avatarURL}`
    : DefaultAvatar;

  return (
    <CardContainer>
      <Avatar src={avatarImg} alt="avatar" />
      <AvatarBefore avatarImg={avatarImg} />
      <Card>
        <ChangeContainer>
          <ChangeAvatar>
            <ChangeButton type="button" onClick={toggleModal}>
              <InfoCamera>
                <use href={sprite + '#icon-camera'} />
              </InfoCamera>
            </ChangeButton>
            <Title>{name}</Title>
          </ChangeAvatar>
        </ChangeContainer>
      </Card>
      <CardRest></CardRest>
      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          <AvatarModal onCloseModal={closeModal} onAvatarImg={avatarImg} />
        </Modal>
      )}
    </CardContainer>
  );
};

export default UserCardAvatar;

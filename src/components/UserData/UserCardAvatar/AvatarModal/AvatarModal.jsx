import { useUpdateUserAvatarMutation } from 'redux/userApi';

import {
  ModalContainer,
  CancleButton,
  CancelSvg,
  AvatarContainer,
  CangeAvatarContainer,
  Avatar,
  Title,
  InputFile,
  InputFileButton,
  InfoCamera,
  ChangeContainer,
  CheckmarkBtn,
  CheckmarkSvg,
} from './AvatarModal.styled';
import sprite from '../../../../image/symbol-defs.svg';
import { useState } from 'react';

const AvatarModal = ({ onCloseModal, onAvatarImg }) => {
  const [img, setImg] = useState(onAvatarImg);
  const [file, setFile] = useState(null);
  const [checkmark, setCheckmark] = useState(false);

  const [updateUserAvatar] = useUpdateUserAvatarMutation();

  const imageHandler = async e => {
    setCheckmark(true);
    const fileUploaded = e.target.files[0];
    setImg(URL.createObjectURL(fileUploaded));
    const file = new FormData();
    file.append('avatar', fileUploaded);
    setFile(file);
  };

  const ImageSaveClick = async () => {
    updateUserAvatar(file);
    onCloseModal();
  };
  return (
    <ModalContainer>
      <CancleButton onClick={onCloseModal}>
        <CancelSvg>
          <use href={sprite + '#icon-cancel'} />
        </CancelSvg>
      </CancleButton>
      <AvatarContainer>
        <CangeAvatarContainer>
          <Avatar src={img} alt="avatar" />
        </CangeAvatarContainer>

        <ChangeContainer>
          <InputFile
            type="file"
            id="input_file"
            accept="image/*"
            name="avatar"
            onChange={e => imageHandler(e)}
          />
          <InputFileButton htmlFor="input_file">
            <InfoCamera>
              <use href={sprite + '#icon-image'} />
            </InfoCamera>
          </InputFileButton>
          <Title>Download image</Title>
        </ChangeContainer>
      </AvatarContainer>
      {checkmark && (
        <CheckmarkBtn onClick={ImageSaveClick}>
          <CheckmarkSvg>
            <use href={sprite + '#icon-check_mark'} />
          </CheckmarkSvg>
        </CheckmarkBtn>
      )}
    </ModalContainer>
  );
};
export default AvatarModal;

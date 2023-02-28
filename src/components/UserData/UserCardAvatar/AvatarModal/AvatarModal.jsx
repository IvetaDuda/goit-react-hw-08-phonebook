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

// import AvatarEditor from 'react-avatar-editor';
// import Dropzone from 'react-dropzone';

const AvatarModal = ({ onCloseModal, onAvatarImg }) => {
  const [img, setImg] = useState(onAvatarImg);
  const [file, setFile] = useState(null);
  const [checkmark, setCheckmark] = useState(false);
  // const [editor, setEditor] = useState(false);

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

  // const handleDrop = dropped => {
  //   setImg(dropped[0]);
  // };
  // const Drop = imageURL => {
  //   setEditor(false);
  //   const canvas = this.editor.getImage().toDataURL();

  //   fetch(canvas)
  //     .then(res => res.blob())
  //     .then(blob => (imageURL = window.URL.createObjectURL(blob)));
  // };
  return (
    <ModalContainer>
      <CancleButton onClick={onCloseModal}>
        <CancelSvg>
          <use href={sprite + '#icon-cancel'} />
        </CancelSvg>
      </CancleButton>
      {/* {!editor ? (
        <> */}
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

      {/* <button onClick={() => setEditor(true)}></button> */}
      {/* </>
      ) : (
        <>
          <Dropzone
            onDrop={imageURL => handleDrop(imageURL)}
            noClick
            noKeyboard
            style={{
              width: '200px',
              height: '250px',
              border: '20px',
              color: 'rgba(255, 255, 255, 0.6',
              borderRadius: '10px',
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <AvatarEditor
                  width={200}
                  height={250}
                  image={img}
                  scale={1.2}
                  rotate={0}
                />
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>
          <button onClick={Drop}></button>
        </>
      )} */}
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

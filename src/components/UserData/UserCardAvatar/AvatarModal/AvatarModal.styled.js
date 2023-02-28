import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 380px;
  padding: 20px;
  box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);
  background-color: ${({ theme }) => theme.avatarModalBackround};
  border-radius: 10px;
  @media screen and (min-width: 1400px) {
    width: 400px;
    height: 500px;
  }
`;
export const CancleButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
export const CancelSvg = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.avatarModalCancleSvg};
  transform: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${CancleButton}:hover & {
    fill: ${({ theme }) => theme.avatarModalCancleSvgHover};
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 250px;
  height: 320px;
  text-align: center;
  background: ${({ theme }) => theme.avatarModalBackroundBox};
  border: 2px solid #ffffff;

  box-shadow: ${({ theme }) => theme.AvatarContainerShadow};
  /* border: ${({ theme }) => theme.AvatarContainerBorder}; */
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transform: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 1400px) {
    width: 350px;
    height: 420px;
  }
`;
export const CangeAvatarContainer = styled.div`
  width: 100%;
  height: 100%;
  transform: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${AvatarContainer}:hover & {
    filter: blur(5px);
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  border-radius: 10px;
`;

export const ChangeContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${AvatarContainer}:hover & {
    background-color: ${({ theme }) => theme.avatarModalBackroundHover};
    display: block;
  }
`;

export const InputFile = styled.input`
  max-width: 0;
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;
export const InputFileButton = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  border-color: transparent;
  outline: none;
  cursor: pointer;
`;
export const InfoCamera = styled.svg`
  position: absolute;
  top: 50%;
  left: 42%;
  transform: translate(0, -50%);
  width: 40px;
  height: 40px;
  fill: #ffffff;
  margin: 0;
  z-index: 1;
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    fill: #ffffff;
  }
`;
export const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
`;

export const CheckmarkBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid green;
  transform: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: green;
  }
`;

export const CheckmarkSvg = styled.svg`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  fill: green;
  margin: 0;
  width: 30px;
  height: 30px;
  transform: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${CheckmarkBtn}:hover & {
    fill: #ffffff;
  }
`;

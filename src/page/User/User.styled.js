import styled from 'styled-components';
import Background from '../../image/background.jpg';

export const UserContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0px 15px;

  @media screen and (min-width: 768px) {
    padding: 0;
    align-items: center;
  }
`;

export const UserModile = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-top: 110px;
`;
export const CardAvatar = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: -30px;
    left: -30px;
    z-index: 1;
  }
  @media screen and (min-width: 1400px) {
    position: absolute;
    top: -40px;
    left: -40px;
    z-index: 1;
  }
`;

export const UserInfo = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);
  background-image: url(${Background});
  background-color: #ece5ce;
  padding: 30px 0;

  background-position: center;
  background-size: cover;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 180px;
    left: 80px;
    width: 640px;
    height: 320px;
    padding: 0;
  }
  @media screen and (min-width: 1400px) {
    position: absolute;
    top: 180px;
    left: 320px;
    width: 780px;
    height: 420px;
  }
`;
export const UserBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;

export const Triangle = styled.div`
  position: absolute;
  bottom: -40px;
  right: -11px;
  width: 0;
  height: 0;
  border-bottom: 190px solid #fff7e6;
  border-left: 355px solid transparent;
  /* border-bottom-right-radius: 9px; */
  box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);

  z-index: 2;
  &::after {
    position: absolute;
    bottom: -191px;
    right: -1px;
    content: '';
    width: 0;
    height: 0;
    border-bottom: 178px solid #001a1a;
    border-left: 335px solid transparent;
    /* border-bottom-right-radius: 8px; */
  }
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 0;
    height: 0;
    border-bottom: 150px solid #fff7e6;
    border-left: 305px solid transparent;
    /* border-bottom-right-radius: 9px; */
    box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);

    z-index: 2;
    &::after {
      position: absolute;
      bottom: -151px;
      right: -1px;
      content: '';
      width: 0;
      height: 0;
      border-bottom: 135px solid #001a1a;
      border-left: 278px solid transparent;
      /* border-bottom-right-radius: 8px; */
    }
  }
  @media screen and (min-width: 1400px) {
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 0;
    height: 0;
    border-bottom: 190px solid #fff7e6;
    border-left: 355px solid transparent;
    /* border-bottom-right-radius: 9px; */
    box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);

    z-index: 2;
    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -191px;
      right: -1px;
      width: 0;
      height: 0;
      border-bottom: 178px solid #001a1a;
      border-left: 335px solid transparent;
      /* border-bottom-right-radius: 8px; */
    }
  }
`;
export const Box = styled.div`
  position: absolute;
  bottom: -40px;
  right: -10px;
  width: 354px;
  height: 189px;
  background-color: #fff7e6;
  border-bottom-right-radius: 9px;
  z-index: -1;
  @media screen and (min-width: 768px) {
    bottom: -10px;
    right: -10px;
    width: 304px;
    height: 149px;
  }
  @media screen and (min-width: 1400px) {
    width: 354px;
    height: 189px;
  }
`;

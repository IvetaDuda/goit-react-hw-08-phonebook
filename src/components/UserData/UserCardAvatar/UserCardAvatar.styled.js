import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 250px;
  height: 300px;
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);
  @media screen and (min-width: 768px) {
    width: 270px;
    height: 320px;
  }
  @media screen and (min-width: 1400px) {
    width: 350px;
    height: 420px;
  }
`;
export const Card = styled.span`
  width: 500px;
  height: 200px;
  background: #fff;
  display: block;
  position: absolute;
  bottom: -140px;
  left: -110px;
  transform: rotate(30deg);
  z-index: 5;
  opacity: 0.9;
  transition: all 0.3s ease-in-out;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    background: #c96106;
    transform: translateY(10px);
    z-index: 2;
    transition: all 0.3s ease-in-out;
    transition-delay: 0.1s;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 200px;
    background: #fff;
    display: block;
    position: absolute;
    bottom: -110px;
    left: -90px;
    transform: rotate(30deg);
    z-index: 5;
    opacity: 0.9;
    transition: all 0.3s ease-in-out;
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      /* background: #f07306; */
      background: #c96106;
      transform: translateY(10px);
      z-index: 2;
      transition: all 0.3s ease-in-out;
      transition-delay: 0.1s;
    }
  }

  @media screen and (min-width: 1400px) {
    width: 500px;
    height: 200px;
    top: 175%;
    left: -85px;
    &::before {
      background: #c96106;
      transform: translateY(200px);
    }
    ${CardContainer}:hover & {
      top: 330px;
      &::before {
        transform: translateY(15px);
      }
    }
  }
`;
export const CardRest = styled.span`
  display: none;
  @media screen and (min-width: 1400px) {
    border-top: 220px solid transparent;
    border-bottom: 190px solid transparent;
    border-right: 288px solid #fff;
    opacity: 0.9;
    position: absolute;
    display: block;
    top: 0;
    right: -100%;
    transition: all 0.3s ease-in-out;
    z-index: 2;
    &::before {
      border-top: 220px solid transparent;
      border-bottom: 190px solid transparent;
      border-right: 288px solid #64b7b2;
      /* border-right: 288px solid #57ccfd; */
      position: absolute;
      content: '';
      display: block;
      top: -220px;
      right: -612px;
      transition: all 0.3s ease-in-out;
      transition-delay: 0.2s;
    }
    ${CardContainer}:hover & {
      right: -30%;
      &::before {
        right: -312px;
      }
    }
  }
`;

export const Avatar = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 1;
  width: 100%;
  border-radius: 10px;
`;

export const AvatarBefore = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 237, 222, 0) 60%
  );
  box-shadow: inset 0px 0px 92px -27px rgba(133, 119, 72, 1);
`;
export const ChangeContainer = styled.div`
  position: relative;
  transform: rotate(-30deg);
  z-index: 10;
`;

export const ChangeAvatar = styled.div`
  position: absolute;
  bottom: 150px;
  left: 180px;
  @media screen and (min-width: 768px) {
    bottom: 120px;
    left: 160px;
  }
`;
export const Title = styled.h1`
  color: #ffffff;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1400px) {
    font-size: 40px;
  }
`;

export const ChangeButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const InfoCamera = styled.svg`
  width: 25px;
  height: 25px;
  margin-right: 5px;
  fill: #ffffff;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: 1400px) {
    width: 40px;
    height: 40px;
  }
`;

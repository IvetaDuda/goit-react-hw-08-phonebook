import styled from 'styled-components';
import Background from '../../image/background.jpg';

export const ContactContainer = styled.div`
  padding: 140px 20px 20px 20px;
  @media screen and (min-width: 1400px) {
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 0 auto;
  padding-bottom: 20px;
  padding: 20px;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  font: 2vw system-ui;
  box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);
  @media screen and (min-width: 768px) {
    height: 100%;
  }

  @media screen and (min-width: 1400px) {
    width: 1000px;
    height: 500px;
    flex-direction: row;
    padding: 20px 20px 20px 0;
  }
`;
export const Form = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (min-width: 1400px) {
  }
`;
export const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  color: #232323;
  margin-top: 100px;
`;
export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
  color: #232323;
`;

export const Contact = styled.div`
  width: 100%;
  height: 460px;
  padding: 10px 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4738270308123249);
  @media screen and (min-width: 768px) {
    width: 600px;
    padding: 20px 30px;
  }
  @media screen and (min-width: 1400px) {
    width: 1000px;
  }
`;

import styled from 'styled-components';
import Background from '../../image/background.jpg';

export const ContainerContact = styled.div`
  padding: 140px 40px 40px 40px;
  @media screen and (min-width: 1400px) {
    padding: 0;
  }
`;

export const Div = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 0 auto;
  padding-bottom: 20px;
  padding: 10px;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 768px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    margin: 0 auto;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1400px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 500px;
    display: flex;
    flex-direction: row;
    padding: 20px 20px 20px 0;
  }
`;
export const Form = styled.div`
  width: 450px;
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
  height: 460px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4738270308123249);
  @media screen and (min-width: 768px) {
    width: 600px;
    padding: 20px 30px;
  }
`;

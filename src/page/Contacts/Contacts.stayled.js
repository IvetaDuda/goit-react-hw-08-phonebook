import styled from 'styled-components';
import Background from '../../image/background.jpg';

export const Container = styled.div`
  width: 1400px;
  height: 100%;
  padding: 30px 20px;
  margin: 0px auto;
  display: flex;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  color: #232323;
  margin-top: 100px;
`;
export const SubTitle = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  color: #232323;
`;
export const Div = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  border-radius: 5px;
  margin: 0 auto;
  padding: 20px;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
`;

export const Form = styled.div`
  width: 450px;
  height: 500px;
  padding: 20px 20px;
`;
export const Contact = styled.div`
  width: 550px;
  height: 400px;
  padding: 20px 20px;
  margin-top: 30px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.4738270308123249);
`;

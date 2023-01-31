import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0px auto 0px auto;
  padding: 0;

  font: 2vw system-ui;

  /* outline: 2px solid red; */

  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
`;

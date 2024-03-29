import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0rem;
  left: 0rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.15); */
  background-color: rgba(0, 0, 0, 0.643);
  overflow-y: scroll;
  z-index: 100;
`;

export const dark = styled.div`
  background-color: rgba(0, 0, 0, 0.643);
`;

import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 20px 0px;
  z-index: 5;

  background: linear-gradient(
    90deg,
    rgba(73, 73, 78, 1) 0%,
    rgba(86, 86, 93, 1) 41%,
    rgba(86, 86, 93, 1) 52%,
    rgba(73, 73, 78, 1) 99%
  );
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  /* outline: 2px solid red; */
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1400px) {
    width: 1400px;
  }
`;

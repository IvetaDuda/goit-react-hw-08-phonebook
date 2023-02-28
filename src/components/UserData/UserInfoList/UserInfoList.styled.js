import styled from 'styled-components';

export const UserBoxList = styled.div`
  width: 100%;
  height: 340px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.21);
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 30px;
    width: 350px;
    right: 30px;
    height: 260px;
  }
  @media screen and (min-width: 1400px) {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 380px;
    height: 340px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.21);
  }
`;

export const UserList = styled.ul`
  list-style: none;
  padding: 20px 10px;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;
export const NotFoundTitle = styled.h2`
  font-size: 45px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.notFoundColor};
  text-shadow: ${({ theme }) => theme.notFoundShadow};
  margin-top: 20px;
  margin-left: 25px;
`;

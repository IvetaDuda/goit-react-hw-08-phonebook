import styled from 'styled-components';

export const Confirmation = styled.div`
  max-width: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
`;
export const ConfirmationTitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
  color: ${({ theme }) => theme.userConfirmation};
`;

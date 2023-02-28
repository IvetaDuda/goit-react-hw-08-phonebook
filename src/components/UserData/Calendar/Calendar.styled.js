import styled from 'styled-components';

export const InputDesktop = styled.input`
  width: 160px;
  padding: 2px 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: #212121;
  border-color: transparent;
  border-radius: 5px;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 140px;
  }
  @media screen and (min-width: 1400px) {
    width: 160px;
  }
`;

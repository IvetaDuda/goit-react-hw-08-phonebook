import styled from 'styled-components';

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-align: center;
  margin-bottom: 20px;
  color: #232323;
`;
export const Input = styled.input`
  width: 500px;
  height: 20px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  /* padding: 8px; */
  border-color: transparent;
  border-radius: 3px;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 9px 3px rgba(242, 123, 119, 0.4);
  }
`;

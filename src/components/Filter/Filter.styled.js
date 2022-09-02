import styled from 'styled-components';

export const FilterDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  z-index: 2;
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
  width: 450px;
  height: 20px;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-color: transparent;
  border-radius: 3px;
  padding: 5px 5px 5px 30px;
`;
export const Search = styled.img`
  position: absolute;
  top: 51px;
  left: 30px;
`;

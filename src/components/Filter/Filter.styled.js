import styled from 'styled-components';

export const FilterDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  z-index: 2;
  padding: 0 10px;
  @media screen and (min-width: 768px) {
    padding: 0 15px;
  }
  @media screen and (min-width: 1400px) {
    padding: 0 20px;
  }
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
  width: 100%;
  height: 20px;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-color: transparent;
  border-radius: 3px;
  padding: 5px 0 5px 20px;
  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 5px 0 5px 30px;
  }
  @media screen and (min-width: 1400px) {
    padding: 5px 5px 5px 30px;
  }
`;
export const Search = styled.svg`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 55px;
  left: 4px;
  @media screen and (min-width: 768px) {
    width: 14px;
    left: 8px;
  }
  @media screen and (min-width: 1400px) {
    width: 16px;
  }
`;

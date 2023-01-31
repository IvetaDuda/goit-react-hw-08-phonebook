import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;
export const Img = styled.img`
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;

export const Text = styled.span`
  margin-right: 10px;
  font-size: 18px;
  color: #ffffff;
  display: flex;
`;
export const Welcome = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 10px;
  }
  @media screen and (min-width: 1400px) {
  }
`;

export const Item = styled.span`
  font-size: 20px;
  font-style: italic;
  color: #64b7b2;
  border-bottom: 2px solid #64b7b2;
`;
export const Btn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

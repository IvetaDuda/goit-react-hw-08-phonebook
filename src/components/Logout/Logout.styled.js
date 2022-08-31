import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
`;
export const Img = styled.img`
  margin-right: 10px;
`;

export const Text = styled.span`
  margin-right: 10px;
  font-size: 18px;
`;
export const Item = styled.span`
  font-size: 20px;
  font-style: italic;
  border-bottom: 2px solid #232323;
`;
export const Btn = styled.button`
  width: 90px;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 3px;
  border: none;
  background: linear-gradient(
    90deg,
    rgba(105, 105, 105, 1) 0%,
    rgba(197, 197, 197, 1) 100%
  );
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

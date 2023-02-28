import styled from 'styled-components';

export const UserItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: #212121;
  /* display: grid; */
  /* grid-template-columns: 80px 230px 30px; */
  display: flex;
  justify-content: space-between;

  padding: 5px 10px;
  &:nth-child(2n + 1) {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    padding: 5px 10px;
  }
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 80px 200px 30px;
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: 80px 230px 30px;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const Value = styled.p`
  margin-right: 10px;
  &::first-letter {
    text-transform: uppercase;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
export const Item = styled.span`
  /* word-wrap: break-word; */
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;
`;
export const ButtonChange = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  z-index: 20;
`;
export const SvgChange = styled.svg`
  width: 20px;
  height: 20px;
  fill: #2b2b2f;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    fill: #c96106;
    transform: scale(1.1);
  }
`;

export const InputChange = styled.input`
  width: 200px;
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
    width: 170px;
  }
  @media screen and (min-width: 1400px) {
    width: 200px;
  }
`;

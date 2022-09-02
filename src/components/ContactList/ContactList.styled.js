import styled from 'styled-components';

export const List = styled.ul`
  height: 240px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  overflow: auto;
  &::-webkit-scrollbar-button {
    background-image: url(&#39;&#39;);
    background-repeat: no-repeat;
    width: 5px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0px;
    border-radius: 3px;
    background-color: #ababa9;
  }

  &::-webkit-resizer {
    background-image: url(&#39;&#39;);
    background-repeat: no-repeat;
    width: 4px;
    height: 0px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
`;
export const Error = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-align: center;
  color: #232323;
`;

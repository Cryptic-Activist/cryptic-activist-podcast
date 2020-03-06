import styled from 'styled-components';

export const CommentsUl = styled.div`
  overflow-y: scroll;
  margin: 15px 0 20px 0;
  width: 100%;
  height: 65vh;

  ::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #ffcd2b;
    border: 1px solid #000;
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: #ecbe29;
  }
`;
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 15px 0 25px 0;
`;

export const PageTitle = styled.h1`
  font-size: 20px;
`;

export const Buttons = styled.button`
  flex-direction: row;
  background: transparent;
  border: 1px solid transparent;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  /* padding-left: 0; */
  margin-right: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const NoList = styled.div`
  overflow-y: scroll;
  margin: 15px 0 20px 0;
  width: 100%;
  height: 65vh;

  ::-webkit-scrollbar {
    display: none;
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 110px;
    height: 100px;

    img {
      width: 100%;
    }

    p {
      text-align: center;
      margin-bottom: 0;
      font-size: 14px;
    }
  }
`;

export const PublishA = styled.a`
  color: #000;
  flex-direction: row;
  text-decoration: none;
  font-weight: 900;
  font-size: 15px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  padding: 5px 7px;
  color: #ffcd2b!important;
  background: #000;
  border: 1px solid #000;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #000!important;
    background: #ffcd2b;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const CloseButton = styled.button`
  font-size: 20px;
  background: transparent;
  border: none;
  float: right;
  &:focus {
    outline: none;
  }
  svg {
    cursor: pointer;
  }
`;
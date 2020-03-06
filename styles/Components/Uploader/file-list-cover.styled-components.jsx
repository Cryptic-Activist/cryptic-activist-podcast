/* eslint-disable no-tabs */
import styled from 'styled-components';

export const ContainerCover = styled.ul`
  top: 20px;
  position: relative;
  width: 100%;
  transform: translateY(-305px);
  padding-left: 0;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  div {
    position: absolute;
    height: 300px;
    width: 100%;
    z-index: 9999;
    span {
      font-size: 12px;
      color: #999;
      margin-top: 50px;
      background-color: #fff;
      padding: 3px 6px;
      border-radius: 5px;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const PreviewCover = styled.div`
  width: 100%!important;
  height: 305px!important;
  display: table;
  position: absolute;
  top: -20px!important;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: absolute;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 305px;
`;

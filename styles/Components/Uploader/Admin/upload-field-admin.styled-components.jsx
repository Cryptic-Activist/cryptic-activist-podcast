import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

const messageColors = {
  default: '#000',
  error: '#e57878',
  success: '#78e5d5',
};

export const DropContainerAdmin = styled.div.attrs({
  className: 'dropzone',
})`
  border: 1px dashed #e0b528;
  border-radius: 70px;
  height: 120px;
  width: 120px;
  display: table;
  z-index: 99999;
  margin: 0 auto 20px auto;
  cursor: pointer;
  -webkit-transition: height 0.2s ease;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
  &:focus {
    outline: none;
  }
`;


export const UploadMessageAdmin = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || 'default']};
  justify-content: center;
  text-align: center;
  padding: 15px 0;
  font-size: 13px;
  margin: 25px 0;
`;
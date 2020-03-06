/* eslint-disable no-tabs */
import styled, { css } from 'styled-components';

const messageColors = {
  default: '#000',
  error: '#e57878',
  success: '#78e5d5',
};

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainerCover = styled.div.attrs({
  className: 'dropzone',
})`
  margin-top: 5px;
  margin-left: 6px;
  border: 1px dashed #e0b528;
  border-radius: 4px;
  width: 99%;
	height: 300px;
	display: table;
  z-index: 99999;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
  &:focus {
    outline: none;
  }
`;

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

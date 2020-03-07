import styled, { css } from 'styled-components';

export const Input = styled.input`
  border: none;
  transition: all 0.25s ease-in-out;
  transition-delay: .15s;
  :focus {
    border-bottom: none;
    outline: none;
    background: #f5f5f5;
  }
  :hover {
    background: #f5f5f5;
  }
  ::placeholder {
    color: #333;
  }
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  margin: -3px auto 6px auto;
  border: 1px dashed #e0b528;
  border-radius: 4px;
  width: 250px;
	height: 250px;
	display: table;
  z-index: 99999;
	margin: 0 auto;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
  &:focus {
    outline: none;
  }
`;

export const Preview = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  display: table;
  margin: 0 auto;
`;

export const UploadMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const DivAside = styled.div`
  @media (max-width: 768px) {
    height: 255px;
  }
`;

export const Container = styled.ul`
  top: -250px;
  position: relative;
  padding-left: 0;
  li {
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    list-style: none;
    color: #444;
    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
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

export const PreviewAudio = styled.div`
  width: 250px;
  /* height: 250px; */
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-left: 50px;
`;

export const PodcastAudioFileUploaderPlaceholder = styled.div`
  border: 1px dashed #000;
  border-radius: 4px;
  height: 72px;
  width: 100%;
  padding: 15px;
  display: table;
  margin: 0 auto;
  z-index: 99999;
  p {
    display: table;
    margin: 0 auto;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
`;

export const PodcastCoverUploaderPlaceholder = styled.div`
  border: 1px dashed #000;
  border-radius: 4px;
  height: 250px;
  width: 250px;
  padding: 15px;
  display: table;
  margin: 0 auto;
  z-index: 99999;
  cursor: pointer;

  p {
    display: table;
    margin: 0 auto;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
`;

export const ExternalEpisodesUrl = styled.div`
  ul {
    padding-left: 0;
    li {
      list-style: none;
      ul {
        padding-left: 0;
        li {
          display: inline-block;
          svg {
            margin-right: 10px;
            font-size: 21px;
          }
        }
      }
    }
  }
`;

export const DropAudioContainer = styled.div.attrs({
  className: 'dropzone',
})`
  margin: -3px auto 6px auto;
  border: 1px dashed #e0b528;
  border-radius: 4px;
  width: 100%;
	height: 20px;
	display: table;
  z-index: 99999;
	margin: 0 auto;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
  &:focus {
    outline: none;
  }
`;

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

export const UploadAudioMessage = styled.p`
  display: flex;
  color: ${(props) => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const Select = styled.select`
  border: 1px solid #000;
  background: #000;
  color: #ffcd2b;
  padding: 5px 7px;
  margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  :focus {
    outline: none;
  }
  :hover {
    background: #ffcd2b;
    color: #000;
  }
`;

export const Button = styled.button`
  border: 1px solid #000;
  color: #ffcd2b;
  background: #000;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  margin: 15px auto;
  font-weight: 900;
  display: table;
  padding: 4px 7px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
    font-size: 16px;
  :focus {
    outline: none;
  }
  :hover {
    color: #000;
    background: #ffcd2b;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
  }
  :active {
    transform: scale(0.95);
  }
`;

export const Warning = styled.div`
  border: 1px solid #d42626;
  border-radius: 3px;
  padding: 5px 10px;
  color: #d42626;
  font-size: 12px;
  margin: 7px auto;
  display: table;
  cursor: default;
  background: #d426260f;
  text-transform: uppercase;
`;

export const BlogPostCoverUploaderPlaceholder = styled.div`
  margin-top: 5px;
  margin-left: 6px;
  border: 1px dashed #000;
  border-radius: 4px;
  width: 99%;
  height: 300px;
  display: table;
  z-index: 99999;
  cursor: pointer;

  p {
    display: table;
    margin: 15px auto;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
`;

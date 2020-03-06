import styled from 'styled-components';

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

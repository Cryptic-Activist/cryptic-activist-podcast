import styled from 'styled-components'

export const ContainerAdmin = styled.div`
  position: relative;
`;

export const FileInfoAdmin = styled.div`
  position: relative;
    top: -141px;
    height: 0px;
`;

export const PreviewAdmin = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  display: table;
  margin: 0 auto;
`;

export const DeleteButton = styled.button`
  color: #e57878;
  background: #fff;
  border: none;
  margin: 0 auto;
  display: table;
  transform: translateY(-37px);
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 4px;
`;

import styled from 'styled-components';
import { rotate } from '../../../../Animations/animations';

export const PostsUl = styled.div`
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

export const LoadingAllContent = styled.div`
	width: 100%;
	svg {
		animation: ${rotate} 1s infinite;
		color: #333;
		font-size: 18px;
		display: table;
		margin: 25px auto;
	}
`;

export const NoContentDiv = styled.div`
	margin: 10px auto;
	display: table;
`;

export const NoContentImg = styled.img`
	height: 30px;
	width: 30px;
	margin: 5px auto;
	display: table;
`;

export const NoContentP = styled.p`
	color: #999;
	font-size: 12px;
	margin: 0 auto;
	display: table;
`;

export const InfinitePostList = styled.ul`
	margin-bottom: 0px;
  padding-left: 0;

	div {
    overflow: hidden;
		::-webkit-scrollbar {
			display: none;
		}

		::-webkit-scrollbar-track {
			display: none;
		}

		::-webkit-scrollbar-thumb {
			display: none;
		}

		::-webkit-scrollbar-thumb:hover {
			display: none;
		}
	}
`;

export const ToggleButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #fff;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.04);
  }
`;

export const Expand = styled.a`
  padding: 20px;
  float: right;
  margin-right: 10px;
  color: #e0b528;
  &:hover {
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
`;

export const Edit = styled.a`
  margin-right: 5px;
  float: right;
  font-size: 12px;
  border: none;
  padding: 4px 7px;
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
  border-radius: 4px;
  color: #e0b528;
  transition: all .3s ease-in-out;
  transition-delay: .1s;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #e0b528;
    text-decoration: none;
    background-color: #e2ecfd;
  }
`;

export const Delete = styled.button`
  margin-left: 5px;
  float: right;
  font-size: 12px;
  border: none;
  padding: 4px 7px;
  cursor: pointer;
  font-weight: 700;
  background-color: #fff;
  border-radius: 4px;
  color: #cc2222;
  transition: all .3s ease-in-out;
  transition-delay: .1s;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #cc2222;
    text-decoration: none;
    background-color: #ffe5e5;
  }
`;

export const GoTo = styled.a`
  color: #333;
  margin-right: 10px;
  float: right;
  font-size: 12px;
  padding: 4px 7px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  transition-delay: .1s;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #333;
    text-decoration: none;
    background-color: #ececec;
  }
`;
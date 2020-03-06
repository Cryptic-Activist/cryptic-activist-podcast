/* eslint-disable no-tabs */
import styled from 'styled-components';

import { rotate } from '../../Animations/animations';

export const AvailableOn = styled.div`
	display: table;
	margin: 15px auto 0 auto;
	h6 {
		font-weight: 900;
		text-align: center;
		@media (max-width: 991px) {
			font-size: 14px;
		}
		@media (max-width: 590px) {
			font-size: 13px;
		}
	}
	ul {
		display: table;
		margin: 0 auto;
		padding-left: 0;
		li {
			display: inline-block;
			margin: 0 7px;
			img {
				height: 40px;
				width: 40px;
				@media (max-width: 991px) {
					height: 37px;
					width: 37px;
				}
				@media (max-width: 768px) {
					height: 35px;
					width: 35px;
				}
				@media (max-width: 590px) {
					height: 32px;
					width: 32px;
				}
			}
		}
	}
`;

export const Logo = styled.img`
	float: right;
	@media (max-width: 578px) {
		display: table;
		margin: 0 auto;
		float: unset;
	}
`;

export const Host = styled.div`
	transform: translateY(20px);
	padding: 10px 10px 10px 3px;
	border-radius: 4px;
	border: 1px solid #fff;
	@media (max-width: 578px) {
		display: table;
		margin: 0 auto;
	}
	a {
		color: #000;
		cursor: pointer;
		&:hover {
			text-decoration: none;
			color: #000;
		}
		ul {
			padding-left: 0;
			li {
				list-style: none;
				display: inline-block;
				@media (max-width: 578px) {
					display: block;
				}
				img {
					height: 70px;
					width: 70px;
					border-radius: 50px;
					@media (max-width: 578px) {
						margin: 0 auto;
						display: table;
					}
				}
				p {
					margin-bottom: 0;
					font-size: 15px;
					font-weight: 900;
				}
				.twitter {
					color: #0058e4;
					font-size: 13px;
				}
			}
			.hostInfo {
				transform: translateY(17px);
				margin-left: 10px;
				@media (max-width: 578px) {
					text-align: center;
					margin: -10px 0 43px 0;
				}
			}
		}
		.desc {
			max-width: 200px;
			font-size: 12px;
			margin-bottom: 0;
		}
	}
`;

export const LoadingAllContent = styled.div`
	width: 100%;
	svg {
		animation: ${rotate} 1s infinite;
		color: #000;
		font-size: 18px;
		display: table;
		margin: 25px auto;
	}
`;

export const NoContentDiv = styled.div`
	margin: 35px auto;
	display: table;
`;

export const NoContentImg = styled.img`
	height: 90px;
	width: 90px;
	margin: 5px auto;
	display: table;
`;

export const NoContentP = styled.p`
	color: #999;
	font-size: 16px;
	margin: 0 auto;
	display: table;
`;

export const InfinitePodcastList = styled.ul`
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

export const StickyWrapper = styled.div`
	position: sticky;
	top: 15px;
`;

/* eslint-disable no-tabs */
import styled from 'styled-components';

import { rotate } from '../../../../Animations/animations';

export const Wrapper = styled.a`
	margin: 0 auto 20px auto;
	display: table;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	border-radius: 4px;
	width: 99%;
	&:hover {
		text-decoration: none;
		/* box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25); */
	}
	@media (max-width: 768px) {
		margin-bottom: 12px;
	}
`;

export const Cover = styled.img`
	height: 120px;
	width: 120px;
	display: table;
	margin: 0 auto;
	border-radius: 10px;
	@media (max-width: 1199px) {
			width: 100px;
			height: 100px;
			border-radius: 9px;
	}
	@media (max-width: 424px) {
			width: 100px;
			height: 100px;
	}
`;

export const InfoDiv = styled.div`
	position: absolute;
	top: 0px;
`;

export const Ul = styled.ul`
	height: 100%;
	padding-left: 0;
`;

export const Title = styled.h4`
	color: #333;
	font-weight: 900;
	font-size: 18px;
	margin-bottom: 0px;
	max-width: 245px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
	@media (max-width: 991px) {
		font-size: 17px;
	}
	@media (max-width: 768px) {
		font-size: 16px;
	}
	@media (max-width: 498px) {
		font-size: 16px;
		line-height: 20px;
		margin-top: 2px;
		margin-bottom: 2px;
	}
	@media (max-width: 464px) {
		font-size: 15px;
		line-height: 17px;
	}
`;

export const UploadedOn = styled.p`
	color: #999;
	margin-bottom: 0px;
	font-size: 13px;
	text-transform: uppercase;
	@media (max-width: 991px) {
		font-size: 12px;
	}
	@media (max-width: 420px) {
		font-size: 11px;
	}
	@media (max-width: 398px) {
		font-size: 10px;
	}
	@media (max-width: 340px) {
		font-size: 9px;
	}
`;

export const Category = styled.b`
	color: #999;
	margin-bottom: 0px;
	float: left;
	font-size: 14px;
	line-height: 24px;
	@media (max-width: 991px) {
		font-size: 13px;
	}
	@media (max-width: 420px) {
		font-size: 12px;
	}
	@media (max-width: 398px) {
		font-size: 11px;
	}
	@media (max-width: 340px) {
		font-size: 10px;
	}
`;

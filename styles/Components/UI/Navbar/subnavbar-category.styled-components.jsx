/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SubNavigatorBar = styled.nav`
  padding: 0 0 3px 0;
  background: #fff;
  margin-top: -1px;
  background-color: #ffcd2b;
  position: sticky;
  letter-spacing: 1px;
  border-bottom: 1px solid #000;
  z-index: 999999999;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const Ul = styled.ul`
  list-style: none;
  font-size: 20px;
  margin-bottom: 0;
  overflow-y: scroll;
	overflow-y: hidden;
  white-space: nowrap;
  padding-left: 0;
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
`;

export const Li = styled.li`
  display: inline-block;
  margin: 0 20px 0 0;
`;

export const CategoryLinkTo = styled.a`
  color: #000;
  font-size: 14px;
  &:hover {
    text-decoration: none;
    color: #000;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 440px) {
    font-size: 13px;
  }

`;

export const Separator = styled.span`
  font-size: 11px;
  color: #000;
  @media (max-width: 768px) {
    font-size: 11px;
  }
  @media (max-width: 440px) {
    font-size: 10px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (max-width: 240px) {
    font-size: 9px;
  }
`;

export const Container = styled.div`
  padding-left: 15px!important;
  padding-right: 15px!important;
  @media (max-width: 991px) {
    padding-left: 15px!important;
    padding-right: 15px!important;
  }
  @media (max-width: 768px) {
    padding-left: 0px!important;
    padding-right: 0px!important;
  }
  @media (max-width: 577px) {
    padding-left: 15px!important;
    padding-right: 15px!important;
  }
`;

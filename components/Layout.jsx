import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Navbar from './UI/Navbar/Navbar';
import Footer from './UI/Footer/Footer';

import store from '../store';

const layoutStyle = {
  height: '100%',
  width: '100%',
};

const Layout = (props) => (
  <div className="Layout" style={layoutStyle}>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
    </Head>

    <Navbar />
    {props.children}
    <Footer />

    <style jsx global>
      {`
      * {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        height: 100%;
        width: 100%;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: "Montserrat";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .Layout {

      }

      .Content {

      }

      @keyframes showSideDrawer {
        0% {
          transform: translateX(-250px);
          box-shadow: 1px 6px 6px 1px rgba(0,0,0,0);
        }
        100% {
          transform: translateX(0px);
          box-shadow: 1px 6px 6px 1px rgba(0,0,0,0.2);
        }
      }

      @keyframes showBackgroundSideDrawer {
        0% {
          background: rgba(0, 0, 0, 0);
        }
        100% {
          background: rgba(0, 0, 0, .2);
        }
      }

      @keyframes hideSideDrawer {
        0% {
          transform: translateX(0px);
          box-shadow: 1px 6px 6px 1px rgba(0,0,0,0.2);
        }
        100% {
          transform: translateX(-250px);
          box-shadow: 1px 6px 6px 1px rgba(0,0,0,0);
        }
      }

      @keyframes hideBackgroundSideDrawer {
        0% {
          background: rgba(0, 0, 0, .2);
          display: block!important;
        }
        100% {
          background: rgba(0, 0, 0, 0);
          display: none!important;
        }
      }

      .showSideDrawer {
        animation: showSideDrawer 0.25s ease-in-out;
        animation-fill-mode: forwards;  
      }

      .showBackgroundSideDrawer {
        display: block!important;
        animation: showBackgroundSideDrawer 0.25s ease-in-out;
        animation-fill-mode: forwards;  
      }

      .hideSideDrawer {
        animation: hideSideDrawer 0.25s ease-in-out;
        animation-fill-mode: forwards;  
      }

      .hideBackgroundSideDrawer {
        animation: hideBackgroundSideDrawer 0.25s ease-in-out;
        animation-fill-mode: forwards;  
      }
    `}

    </style>
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
  </div>
);

export default Layout;

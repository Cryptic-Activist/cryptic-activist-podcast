/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';

import 'isomorphic-fetch';

import Profile from '../components/Pages/Profile/Profile';

class Index extends Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    return { isServer };
  }


  render() {
    return (
      <Profile />
    );
  }
}

export default Index;

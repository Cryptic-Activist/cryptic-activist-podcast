/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';

import 'isomorphic-fetch';

import Publish from '../../components/Pages/Admin/Publish/Publish'

class Index extends Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    return { isServer };
  }

  render() {
    return (
      <Publish />
    );
  }
}

export default Index;

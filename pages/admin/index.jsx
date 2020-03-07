import React, { Component } from 'react'
import 'isomorphic-fetch';

import Admin from '../../components/Pages/Admin/Admin';

class AdminIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    return { isServer };
  }


  render() {
    return (
      <Admin />
    );
  }
}

export default AdminIndex;

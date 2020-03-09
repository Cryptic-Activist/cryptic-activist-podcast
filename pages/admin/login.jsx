import React, { Component } from 'react'
import 'isomorphic-fetch';

import Login from '../../components/Pages/Admin/Login/Login';

class AdminLogin extends Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    return { isServer };
  }

  render() {
    return (
      <Login />
    );
  }
}

export default AdminLogin;

import React, { Component } from 'react'
import 'isomorphic-fetch';

import Register from '../../components/Pages/Admin/Register/Register';

class AdminRegister extends Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;

    return { isServer };
  }

  render() {
    return (
      <Register />
    );
  }
}

export default AdminRegister;

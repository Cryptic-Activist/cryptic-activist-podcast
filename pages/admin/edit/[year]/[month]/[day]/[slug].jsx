import React, { Component } from 'react'
import 'isomorphic-fetch';

import {
  editPodcast
} from '../../../../../../store/actions/podcasts/admin/editPodcast';

import Edit from '../../../../../../components/Pages/Admin/Edit/Edit';

class AdminEdit extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(12, asPath.length);
    store.dispatch(editPodcast(slug))

    return { isServer };
  }

  render() {
    return (
      <Edit />
    );
  }
}

export default AdminEdit;

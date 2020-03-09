/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import PublicProfileComponent from '../../components/Pages/PublicProfile/PublicProfile'

import {
  getPublicProfile,
} from '../../store/actions/user/publicProfile'

class PublicProfile extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    store.dispatch(getPublicProfile(asPath.substring(6, asPath.length)));
    // store.dispatch(getMainBlogPost());
    // store.dispatch(getMostRecentVideos());
    return { isServer };
  }
  render() {
    return (
      <PublicProfileComponent />
    );
  }
}

export default PublicProfile;

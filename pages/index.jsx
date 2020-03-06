import React, { Component } from 'react';
import Head from 'next/head';
import 'isomorphic-fetch';

import Logo from '../assets/img/no-content-img.png';

import {
  getPodcasts,
} from '../store/actions/podcasts/podcasts';

import Podcasts from '../components/Pages/Home/Podcasts';

import Layout from '../components/Layout';

class Index extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    store.dispatch(getPodcasts());
    
    return { isServer, asPath };
  }

  render() {
    return (
      <Layout>
        <Podcasts pathname={this.props.asPath} />
      </Layout>
    );
  }
}

export default Index;

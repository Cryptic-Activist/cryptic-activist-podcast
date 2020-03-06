/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import 'isomorphic-fetch';

import {
  getPodcast,
} from '../../../../store/actions/podcasts/podcast';

import {
  getGetRelatedPodcasts,
} from '../../../../store/actions/podcasts/relatedPodcast';

import Podcast from '../../../../components/Pages/Podcast/Podcast';

class PostIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(1, asPath.length);
    store.dispatch(getPodcast(slug));
    // store.dispatch(getGetRelatedPodcasts());
    return { isServer, asPath };
  }

  render() {
    return (
      <Podcast pathname={this.props.asPath} />
    );
  }
}

export default PostIndex;
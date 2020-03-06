/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import 'isomorphic-fetch';

import {
  getPodcastsByCategory,
} from '../../store/actions/podcasts/podcastsByCategory';

import Category from '../../components/Pages/Category/ByCategory';

class CategoryIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(10, asPath.length);
    console.log('slug test:', slug)
    store.dispatch(getPodcastsByCategory(slug));
    return { isServer, asPath };
  }

  render() {
    return (
      <Category pathname={this.props.asPath} />
    );
  }
}

export default CategoryIndex;

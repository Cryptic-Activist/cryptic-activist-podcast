/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import 'isomorphic-fetch';

import {
  getPostsByTag,
} from '../../store/actions/blog/postsByTag';

import Tag from '../../components/Pages/Tag/ByTags';

class TagIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(5, asPath.length);
    console.log('slug tag asPath:', slug)
    store.dispatch(getPostsByTag(slug));
    return { isServer, asPath };
  }

  render() {
    return (
      <Tag pathname={this.props.asPath} />
    );
  }
}

export default TagIndex;

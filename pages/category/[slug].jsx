/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import 'isomorphic-fetch';

import {
  getPostsByCategory,
} from '../../store/actions/blog/postsByCategory';

import Category from '../../components/Pages/Category/ByCategory';

class CategoryIndex extends Component {
  static async getInitialProps(props) {
    const { store, isServer, asPath } = props.ctx;
    const slug = asPath.substring(10, asPath.length);
    store.dispatch(getPostsByCategory(slug));
    return { isServer, asPath };
  }

  render() {
    return (
      <Category pathname={this.props.asPath} />
    );
  }
}

export default CategoryIndex;

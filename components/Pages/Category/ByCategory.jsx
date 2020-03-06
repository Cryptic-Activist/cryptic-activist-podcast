import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Head from 'next/head';

import {
  FaSpinner,
} from 'react-icons/fa';

import BitcoinDoddle from '../../../assets/img/no-content-img.png';
import BlogPostList from '../../UI/Lists/ByCategory/ByCategoryList';
import SubNavBar from '../../../components/UI/Navbar/SubNavBar';
import MostRecentPost from '../../Pages/Post/MostRecentPost';
import Ads from '../../Ads/Square/AdvertisementSquare';

import Layout from '../../Layout'

import {
  PostList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
  WrapperAd,
  AsideDiv,
  LoadingAllContent,
} from '../../../styles/Pages/ByCategory/by-category.styled-components';

const mapStateToProps = (state) => {
  const {
    postsByCategory,
  } = state;
  return {
    postsByCategory,
  }
}

const ByCategory = (props) => {
  const {
    postsByCategory: postsList,
  } = props;

  let head;
  let allPosts;
  let categorySubNav;

  if (postsList.loading) {
    allPosts = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (postsList.fetched) {
    if (!_.isEmpty(postsList.data)) {

      console.log('asPath:', props.asPath)
      head = (
        <Head>
          <title>{`${postsList.data[0].category} - Category | Cryptic Activist Blog`}</title>
          <meta
            name="description"
            content="Blog Posts"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="Cryptic Activist Blog" />
          <meta property="og:description" content="Meta description" />
          <meta property="og:title" content={`${postsList.data[0].category} - Category | Cryptic Activist Blog`} />
          <meta property="og:image" content={`${postsList.data[0].cover.url}`} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:image:alt" content={postsList.data[0].cover.name} />
          <meta property="og:url" content={`https://crypticactivist.com${props.asPath}`} />
          <meta property="og:type" content="article" />

          <meta name="twitter:site" content="Cryptic Activist Blog" />
          <meta name="twitter:title" content={`${postsList.data[0].category} - Category | Cryptic Activist Blog`} />
          <meta name="twitter:description" content="metaDescription" />
          <meta name="twitter:image" content={postsList.data[0].cover.url} />
          <meta name="twitter:card" content="article" />
        </Head>
      );

      categorySubNav = (
        <SubNavBar
          media="Blog"
          category="Category"
          title={`${postsList.data[0].category.replace(/^\w/, (c) => c.toUpperCase())}`}
        />
      );

      allPosts = (
        <>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <PostList>

                <div className="row">
                  {postsList.data.reverse().map((post, key) => (
                    <BlogPostList
                      key={key}
                      type="Blog"
                      slug={post.slug}
                      imgSrc={post.cover.url}
                      title={post.title}
                      publishedOn={post.publishedOn}
                    />
                  ))}
                </div>

              </PostList>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <AsideDiv>
                <StickyWrapper>
                  <WrapperAd>
                    <MostRecentPost />
                  </WrapperAd>
                  <Ads />
                </StickyWrapper>
              </AsideDiv>
              <AsideDiv>
                <StickyWrapper>
                  <Ads />
                </StickyWrapper>
              </AsideDiv>
            </div>
          </div>
        </>
      );
    } else {
      allPosts = (
        <>
          <div className="row">
            <div className="col-12">
              <NoContentDiv>
                <NoContentImg src={BitcoinDoddle} />
                <NoContentP>
                    No blog posts has been found.
                </NoContentP>
              </NoContentDiv>
            </div>
          </div>
        </>
      );
    }
  }


  return (
    <>
      <Layout>
        {head}
        {categorySubNav}
        <div className="container" style={{ margin: '25px auto' }}>
          {allPosts}
        </div>
      </Layout>
    </>
  );
};

ByCategory.propTyps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ByCategory);

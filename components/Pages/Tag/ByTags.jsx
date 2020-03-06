import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Head from 'next/head'

import {
  FaSpinner,
} from 'react-icons/fa';
import BitcoinDoddle from '../../../assets/img/no-content-img.png';

import BlogPostList from '../../UI/Lists/ByCategory/ByCategoryList';
import SubNavBar from '../../../components/UI/Navbar/SubNavBar';
import MostRecentPost from '../../Pages/Post/MostRecentPost';
import Ads from '../../Ads/Square/AdvertisementSquare';

import Layout from '../../Layout'

import StringConverter from '../../../utils/StringConverter';

import {
  PostList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
  WrapperAd,
  AsideDiv,
  LoadingAllContent,
} from '../../../styles/Pages/ByTag/by-tag.styled-components';

const mapStateToProps = (state) => {
  const {
    postsByTag,
  } = state;
  return {
    postsByTag,
  }
}

const ByTags = (props) => {
  const {
    postsByTag: postsList,
    pathname,
  } = props;

  let head;
  let allPosts;
  let subMenu;

  if (postsList.loading) {
    subMenu = (
      <>
      </>
    );
    allPosts = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (postsList.fetched) {
    if (!_.isEmpty(postsList.data)) {
      const stringConverter = new StringConverter();

      const slug = pathname.substring(5, pathname.length)

      head = (
        <Head>
          <title>{`${stringConverter.convertSlugToTitle(slug)} - Tag | Cryptic Activist Blog`}</title>
          <meta
            name="description"
            content="Blog Posts"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="Cryptic Activist Blog" />
          <meta property="og:description" content="Meta description" />
          <meta property="og:title" content={`${stringConverter.convertSlugToTitle(slug)} - Tag | Cryptic Activist Blog`} />
          <meta property="og:image" content={`${postsList.data[0].cover.url}`} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:image:alt" content={postsList.data[0].cover.name} />
          <meta property="og:url" content={`https://crypticactivist.com${props.pathname}`} />
          <meta property="og:type" content="article" />

          <meta name="twitter:site" content="Cryptic Activist Blog" />
          <meta name="twitter:title" content={`${stringConverter.convertSlugToTitle(slug)} - Tag | Cryptic Activist Blog`}/>
          <meta name="twitter:description" content="metaDescription" />
          <meta name="twitter:image" content={postsList.data[0].cover.url} />
          <meta name="twitter:card" content="article" />
        </Head>
      );

      subMenu = (
        <>
          <SubNavBar
            media="Blog"
            category="Tag"
            // title={`${postsList.data[0].tags.replace(/^\w/, (c) => c.toUpperCase())}`}
            title="Test"
          />
        </>
      );
      allPosts = (
        <>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
              <PostList>
                <div className="row">
                  {postsList.data.map((post, key) => (
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
                  <Ads
                    IsLast="last"
                  />
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
        {subMenu}
        <div className="container" style={{ margin: '25px auto' }}>
          {allPosts}
        </div>
      </Layout>
    </>
  );
};

ByTags.propTyps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(ByTags);

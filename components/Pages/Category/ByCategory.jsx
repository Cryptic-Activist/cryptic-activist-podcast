import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  FaSpinner,
} from 'react-icons/fa';

import BitcoinDoddle from '../../../assets/img/no-content-img.png';

import PodcastsList from '../../../components/UI/Lists/ByCategory/ByCategoryList';
import SubNavBar from '../../../components/UI/Navbar/SubNavBar';

import Ads from '../../../components/Ads/Square/AdvertisementSquare';
import Layout from '../../Layout';

import DateFormatter from '../../../utils/DateFormatter';

import {
  LoadingAllContent,
  InfinitePodcastList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
} from '../../../styles/Pages/ByCategory/by-category.styled-components';

const mapStateToProps = (state) => {
  const {
    podcastsByCategory,
  } = state;
  return {
    podcastsByCategory,
  }
}

const PodcastsByCategory = (props) => {
  const {
    podcastsByCategory: podcasts,
  } = props;

  const dateFormatter = new DateFormatter()

  let allPodcasts;
  if (podcasts.loading) {
    console.log('fetching data on podcast category...');
    allPodcasts = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (podcasts.fetched) {
    if (!_.isEmpty(podcasts.data)) {
      allPodcasts = (
        <>
          <div
            className="col-lg-9 col-md-9 col-sm-12 col-12"
            style={{
              marginTop: '25px',
              marginBottom: '25px',
            }}
          >
            <div className="row">
              {podcasts.data.map((podcast) => (
                <PodcastsList
                  key={podcast.id}
                  category={podcast.category}
                  title={podcast.title}
                  date={dateFormatter.formatDateFullDate(podcast.uploadedOn)}
                  slug={podcast.slug}
                  cover={podcast.cover.url}
                  liID={`p-${podcast.id}`}
                />
              ))}
            </div>
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-12 col-12"
            style={{
              marginTop: '25px',
              marginBottom: '25px',
            }}
          >
            <StickyWrapper>
              <Ads />
            </StickyWrapper>
          </div>
        </>
      );
    } else {
      allPodcasts = (
        <>
          <NoContentDiv>
            <NoContentImg src={BitcoinDoddle} />
            <NoContentP>
              No Podcast has been found.
            </NoContentP>
          </NoContentDiv>
        </>
      );
    }
  }
  return (
    <>
      <Layout>
        <SubNavBar media="Podcasts" category="Category" title="" />
        <div className="container">
          <div className="row">
            {allPodcasts}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default connect(mapStateToProps)(PodcastsByCategory);

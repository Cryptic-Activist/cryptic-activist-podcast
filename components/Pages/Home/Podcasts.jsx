/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';

import _ from 'lodash';

import {
  FaSpinner,
} from 'react-icons/fa';

import BitcoinDoddle from '../../../assets/img/no-content-img.png';
import GooglePodcast from '../../../assets/img/google-podcasts.svg';
import SpotifyPodcast from '../../../assets/img/spotify.svg';
import ITunesPodcast from '../../../assets/img/itunes.svg';
import HostPicture from '../../../assets/img/davi-silva.png';

import Ads from '../../Ads/Square/AdvertisementSquare';

import PodcastsList from '../../UI/Lists/Home/PodcastsList';

// import * as PodcastsAction from '../../store/actions/podcasts/podcasts';

import {
  AvailableOn,
  Logo,
  Host,
  LoadingAllContent,
  InfinitePodcastList,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  StickyWrapper,
} from '../../../styles/Pages/Home/home.styled-components';

const Podcasts = (props) => {
  const podcasts = useSelector((state) => state.podcasts);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(PodcastsAction.getPodcasts());
  }, []);


  const {
    location,
  } = props;

  let allPodcasts;
  let helmet;

  if (podcasts.loading) {
    helmet = (
      <>
        <Helmet title="Loading..." media="Podcasts" />
      </>
    );
  } else if (podcasts.fetched) {
    helmet = (
      <>
        <Head>
          <title>Home | Cryptic Activist Podcast</title>
          <meta
            name="description"
            content="Meta Description"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="Cryptic Activist" />
          <meta property="og:description" content="Meta Description" />
          <meta property="og:title" content="Home - Podcast | Cryptic Activist" />
          {/* <meta property="og:url" content={`https://crypticactivist.com${location.pathname}`} /> */}

          <meta name="twitter:site" content="Cryptic Activist" />
          <meta name="twitter:title" content="Home - Podcast | Cryptic Activist" />
          <meta name="twitter:description" content="Meta Description" />

          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="music.song" />
        </Head>
      </>
    );
  }


  if (podcasts.loading) {
    allPodcasts = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (podcasts.fetched && !_.isEmpty(podcasts.data)) {
    if (podcasts.data.length > 0) {
      allPodcasts = (
        <>
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="row">
              {podcasts.data.map((podcast) => (
                <PodcastsList
                  key={podcast.id}
                  category={podcast.category}
                  title={podcast.title}
                  date={podcast.uploadedOn}
                  slug={podcast.slug}
                  cover={podcast.cover.url}
                  liID={`p-${podcast.id}`}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <StickyWrapper>
              <Ads />
            </StickyWrapper>
          </div>
        </>
      );
    }
  }

  if (podcasts.data.length === 0 && podcasts.fetched) {
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
  return (
    <>
      {helmet}
      <div
        className="container"
        style={{
          marginTop: '15px',
          marginBottom: '50px',
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <Logo className="podcast-logo" src={BitcoinDoddle} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <Host>
              <Link href="https://twitter.com/" target="_blank">
                <a>
                  <ul>
                    <li>
                      <img src={HostPicture} alt="" />
                    </li>
                    <li className="hostInfo">
                      <p>Davi Silva</p>
                      <p className="twitter">@thecrypticdavid</p>
                      <p className="desc">Host of Cryptic Activist</p>
                    </li>
                  </ul>
                </a>
              </Link>
            </Host>
          </div>
          <AvailableOn className="col-12">
            <h6>Also Available on</h6>
            <ul>
              <li>
                <Link href="https://www.google.ca/" target="_blank">
                  <a>
                    <img src={GooglePodcast} alt="" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://podcasters.spotify.com/" target="_blank">
                  <a>
                    <img src={SpotifyPodcast} alt="" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.apple.com/ca/itunes/podcasts/discover/" target="_blank">
                  <a>
                    <img src={ITunesPodcast} alt="" />
                  </a>
                </Link>
              </li>
            </ul>
          </AvailableOn>

        </div>
      </div>
      <div className="container" style={{ marginTop: '25px' }}>
        <div className="row">
          {allPodcasts}
        </div>
      </div>
    </>
  );
};

export default Podcasts;

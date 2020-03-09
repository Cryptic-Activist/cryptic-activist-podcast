/* eslint react/prop-types: 0 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';

import {
  FaSpinner,
} from 'react-icons/fa';

import _ from 'lodash';
import slugify from 'slugify';

import ListenOnGooglePodcast from '../../../assets/img/listen-on-google-podcasts.svg';
import ListenOnSpotifyPodcast from '../../../assets/img/listen-on-spotify.svg';
import ListenOnITunesPodcast from '../../../assets/img/listen-on-apple.svg';

import Layout from '../../../components/Layout';
import SubNavBar from '../../../components/UI/Navbar/SubNavBar';
import ShareButtons from '../../../components/UI/ShareButtons/ShareButtons';
import AudioPlayer from '../../../components/UI/Player/AudioPlayer';
import Comments from './Comments';

import DateFormatter from '../../../utils/DateFormatter';

import {
  Wrapper,
  Aside,
  ShareButtonsDiv,
  Cover,
  Title,
  Category,
  Description,
  TagsUl,
  TagLi,
  Tag,
  UploadedOn,
  MoreEpisodes,
  RelatedPodcast,
  RelatedPodcastLabel,
  ExternalEpisodeLabel,
  ExternalEpisodeUl,
  RelatedPodcastList,
  RelatedPodcastLi,
  RelatedPodcastH6,
  LoadingAllContent,
} from '../../../styles/Pages/Podcast/podcast.styled-components';

const mapStateToProps = (state) => {
  const {
    podcast,
  } = state;
  return {
    podcast,
  }
}

let count = 0;

const Podcast = (props) => {
  const {
    podcast,
    pathname,
  } = props;

  const dateFormatter = new DateFormatter();

  // useEffect(() => {
  //   const { match } = props;
  //   const fullSlug = match.url.slice(9, match.url.length);
  //   // dispatch(PodcastActions.getPodcast(fullSlug));
  // }, []);

  let content;
  let subMenu;

  if (podcast.podcast.loading) {
    subMenu = (
      <SubNavBar media="Podcast" category="" title="" />
    );
    content = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );

  } else if (podcast.podcast.fetched) {

    if (!_.isEmpty(podcast.podcast.data)) {
      if (count === 0) {
        // dispatch(RelatedPodcasts.getGetRelatedPodcasts(podcast.podcast.data.category, podcast.podcast.data.slug));
        count += 1;
      }
    }



    subMenu = (
      <SubNavBar media="Podcast" category={podcast.podcast.data.category} title={podcast.podcast.data.title} />
    );
    content = (
      <>
        <Head>
          <title>{`${podcast.podcast.data.title} - Podcast | Cryptic Activist`}</title>
          <meta
            name="description"
            content="Meta Description"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="es_GB" />
          <meta property="og:site_name" content="Cryptic Activist" />
          <meta property="og:description" content="Meta Description" />
          <meta property="og:title" content={podcast.podcast.data.title} />
          <meta property="og:image" content={`${podcast.podcast.data.cover}`} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />
          <meta property="og:url" content={`https://crypticactivist.com${pathname}`} />

          <meta name="twitter:site" content="Cryptic Activist" />
          <meta name="twitter:title" content={podcast.podcast.data.title} />
          <meta name="twitter:description" content="Meta Description" />
          <meta name="twitter:image" content={podcast.podcast.data.cover} />

          <meta property="og:music:duration" content="" />
          <meta property="og:type" content="music.song" />
          <meta property="og:image:alt" content={podcast.podcast.data.coverAlt} />
          <meta property="og:audio:type" content="audio/mpeg" />
          <meta property="og:audio:type" content="audio/mp3" />
          <meta property="og:audio" content={podcast.podcast.data.audioFile.url} />
          <meta property="og:audio:secure_url" content={podcast.podcast.data.audioFile.url} />

          <meta name="twitter:card" content="music.song" />
          <meta name="twitter:image:alt" content="Podcast cover" />
          <meta name="twitter:player" content={podcast.podcast.data.audioFile.url} />
          <meta name="twitter:width" content="100" />
          <meta name="twitter:height" content="200" />
          <meta name="twitter:player:stream" content={podcast.podcast.data.audioFile.url} />
        </Head>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <Aside>
            <Cover
              src={podcast.podcast.data.cover.url}
              alt={podcast.podcast.data.coverAlt}
            />
            <ShareButtonsDiv>
              <ShareButtons
                path={`https://podcast.crypticactivist.com${pathname}`}
                size={30}
              />
            </ShareButtonsDiv>
          </Aside>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <Wrapper>
            {podcast.podcast.data.updatedOn === null ? (
              <UploadedOn>
                Uploaded on&nbsp;
                <span style={{ color: '#333', fontWeight: '700' }}>{dateFormatter.formatDateFullDate(podcast.podcast.data.uploadedOn)}</span>
              </UploadedOn>
            ) : (
              <UploadedOn>
                Updated on&nbsp;
                <span style={{ color: '#333', fontWeight: '700' }}>{dateFormatter.formatDateFullDate(podcast.podcast.data.updatedOn)}</span>
              </UploadedOn>
            )}
            <Title>{podcast.podcast.data.title}</Title>
            <Link href={`/category/${slugify(podcast.podcast.data.category.toLowerCase())}`}>
              <Category>
                {podcast.podcast.data.category}
              </Category>
            </Link>
            {(!_.isEmpty(podcast.podcast.data.audioFile)) && (
              <AudioPlayer
                audioFileUrl={podcast.podcast.data.audioFile.url}
              />
            )}
            <Description
              dangerouslySetInnerHTML={{ __html: podcast.podcast.data.description }}
            />
            <ExternalEpisodeLabel>
              Also available on
            </ExternalEpisodeLabel>
            <br />
            <ExternalEpisodeUl>
              {(podcast.podcast.data.googleEpisodeUrl !== '') && (
                <li>
                  <a href={podcast.podcast.data.googleEpisodeUrl} target="_blank" rel="noopener noreferrer">
                    <img src={ListenOnGooglePodcast} alt="Listen on Google Podcasts" />
                  </a>
                </li>
              )}
              {(podcast.podcast.data.spotifyEpisodeUrl !== '') && (
                <li>
                  <a href={podcast.podcast.data.spotifyEpisodeUrl} target="_blank" rel="noopener noreferrer">
                    <img src={ListenOnSpotifyPodcast} alt="Listen on Spotify Podcasts" />
                  </a>
                </li>
              )}
              {(podcast.podcast.data.itunesEpisodeUrl !== '') && (
                <li>
                  <a href={podcast.podcast.data.itunesEpisodeUrl} target="_blank" rel="noopener noreferrer">
                    <img src={ListenOnITunesPodcast} alt="Listen on iTunes Podcasts" />
                  </a>
                </li>
              )}
            </ExternalEpisodeUl>
            <TagsUl>
            {
              podcast.podcast.data.tags.map((tag) => (
                <TagLi
                  key={tag.id}
                >
                  <Link href={`/tag/${slugify(tag.toLowerCase())}`}>
                    <Tag>
                      {tag}
                    </Tag>
                  </Link>
                </TagLi>
              ))
            }
            </TagsUl>
            <Link href="/">
              <MoreEpisodes>
                More Episodes
              </MoreEpisodes>
            </Link>
            {(!_.isEmpty(podcast.relatedPodcasts.data)) && (
              <RelatedPodcastLabel>
                Related Blog Posts
                <br />
                <RelatedPodcastList>
                  {
                podcast.relatedPodcasts.data.map((related) => (
                  <RelatedPodcastLi
                    key={related.id}
                  >
                        <Link href={`/${podcast.podcast.data.slug}`}>
                          <RelatedPodcast>
                            <img
                              src={related.cover.url}
                              alt={related.cover.name}
                              style={{
                                borderRadius: '5px',
                              }}
                            />
                            <br />
                            <RelatedPodcastH6>
                              {related.title}
                            </RelatedPodcastH6>
                          </RelatedPodcast>
                        </Link>
                  </RelatedPodcastLi>
                ))
              }
                </RelatedPodcastList>
              </RelatedPodcastLabel>
            )}
            <Comments
              podcastId={podcast.podcast.data._id}
            />
          </Wrapper>
        </div>
      </>
    );
  }

  return (
    <>
      <Layout>
        {subMenu}
        <div className="container">
          <div className="row">
            {content}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default connect(mapStateToProps)(Podcast);

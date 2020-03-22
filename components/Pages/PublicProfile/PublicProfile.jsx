/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import _ from 'lodash';

import {
  FaSpinner,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

import Layout from '../../Layout'

import {
  Wrapper,
  UserInfoDiv,
  ProfileImage,
  DisplayName,
  Quote,
  EmptyQuote,
  FollowButton,
  UnfollowButton,
  MemberSince,
  SocialMediaUser,
  SocialMediaUserLink,
  LoadingAllContent,
  LoadingAllContentFollow,
  LoadingAllContentUnfollow,
  FollowUl,
  FollowDivUl,
} from '../../../styles/Pages/PublicProfile/public-profile.styled.components';

import RecentActivities from '../Profile/RecentActivities';

import * as UserActions from '../../../store/actions/user/user';

import Formatter from '../../../utils/DateFormatter';

const mapStateToProps = (state) => {
  const {
    publicProfile,
    user,
  } = state;

  return {
    publicProfile,
    user
  }
}

const PublicProfile = (props) => {
  const [isFollowing, setIsFollowing] = useState(null);

  const dispatch = useDispatch();

  const {
    publicProfile,
    user,
  } = props;

  const dateFormatter = new Formatter();

  const handleVerifyFollow = async (userId, authorId) => {
    console.log('userId:', userId)
    console.log('authorId:', authorId)
    const res = await fetch('http://localhost:5002/users/verify/following/author',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          authorId,
        }),
      });
    const data = await res.json(res);
    return data;
  };

  const handleFollowAuthor = async () => {
    console.log('publicProfile.publicProfile.data:', publicProfile.publicProfile.data)
    const res = await handleVerifyFollow(publicProfile.publicProfile.data._id, user.data._id);
    if (res.following === -1) {
      dispatch(UserActions.setFollowAuthor(user.data._id, publicProfile.publicProfile.data._id));
    } else {
      console.log('already following...');
    }
  };

  const handleUnfollowAuthor = async () => {
    const res = await handleVerifyFollow(publicProfile.publicProfile.data._id, user.data._id);
    if (res.following >= 0) {
      dispatch(UserActions.setUnfollowAuthor(publicProfile.publicProfile.data._id, user.data._id));
    } else {
      console.log('already following...');
    }
  };

  const handleVerify = async () => {
    const res = await handleVerifyFollow(publicProfile.publicProfile.data._id, user.data._id);
    if (res.following >= 0) {
      setIsFollowing(true);
    } else if (res.following === -1) {
      setIsFollowing(false);
    }
  };

  handleVerify();

  let FollowBtn;

  if (user.fetched) {
    if (publicProfile.publicProfile.data._id === user.data._id) {
      FollowBtn = (
        <>
        </>
      );
    } else if (!_.isEmpty(user.data)) {
      if (isFollowing) {
        if (user.loading) {
          FollowBtn = (
            <>
              <UnfollowButton>
                <LoadingAllContentUnfollow>
                  <FaSpinner />
                </LoadingAllContentUnfollow>
              </UnfollowButton>
            </>
          );
        } else
        if (user.fetched) {
          FollowBtn = (
            <>
              <UnfollowButton
                onClick={handleUnfollowAuthor}
              >
                Following
              </UnfollowButton>
            </>
          );
        }
      }

      if (!isFollowing) {
        if (user.loading) {
          FollowBtn = (
            <>
              <FollowButton>
                <LoadingAllContentFollow>
                  <FaSpinner />
                </LoadingAllContentFollow>
              </FollowButton>
            </>
          );
        } else
        if (user.fetched) {
          FollowBtn = (
            <>
              <FollowButton
                onClick={handleFollowAuthor}
              >
                Follow +
              </FollowButton>
            </>
          );
        }
      }
    }
  }


  let User;
  let github;
  let linkedin;
  let twitter;
  let quote;

  if (publicProfile.publicProfile.loading) {
    User = (
      <>
        <LoadingAllContent>
          <FaSpinner />
        </LoadingAllContent>
      </>
    );
  } else if (publicProfile.publicProfile.fetched) {
    if (!_.isEmpty(publicProfile.publicProfile.data)) {
      if (publicProfile.publicProfile.data.quote === '') {
        quote = (
          <>
            <Quote>{publicProfile.publicProfile.data.quote}</Quote>
          </>
        );
      } else {
        quote = (
          <>
            <EmptyQuote>{publicProfile.publicProfile.data.quote}</EmptyQuote>
          </>
        );
      }

      if (publicProfile.publicProfile.data.socialMedia.github === '') {
        github = (
          <>
          </>
        );
      } else {
        github = (
          <>
            <li>
              <SocialMediaUserLink
                href={publicProfile.publicProfile.data.socialMedia.github}
                target="_blank"
              >
                <FaGithub />
              </SocialMediaUserLink>
            </li>
          </>
        );
      }
      if (publicProfile.publicProfile.data.socialMedia.linkedin === '') {
        linkedin = (
          <>
          </>
        );
      } else {
        linkedin = (
          <>
            <li>
              <SocialMediaUserLink
                href={publicProfile.publicProfile.data.socialMedia.linkedin}
                target="_blank"
              >
                <FaLinkedinIn />
              </SocialMediaUserLink>
            </li>
          </>
        );
      }
      if (publicProfile.publicProfile.data.socialMedia.twitter === '') {
        twitter = (
          <>
          </>
        );
      } else {
        twitter = (
          <>
            <li>
              <SocialMediaUserLink
                href={publicProfile.publicProfile.data.socialMedia.twitter}
                target="_blank"
              >
                <FaTwitter />
              </SocialMediaUserLink>
            </li>
          </>
        );
      }

      User = (
        <>
          <Head>
            <title>{publicProfile.publicProfile.data.name} | Cryptic Activist Blog</title>
            <meta
              name="description"
              content="Blog Posts"
            />
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="en_CA" />
            <meta property="og:locale:alternate" content="es_GB" />
            <meta property="og:site_name" content="Cryptic Activist" />
            <meta property="og:description" content="Meta description" />
            <meta property="og:title" content={`${publicProfile.publicProfile.data.name} | Cryptic Activist`} />
            <meta property="og:image" content={publicProfile.publicProfile.data.profileImage.url} />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            <meta property="og:image:alt" content={`${publicProfile.publicProfile.data.name} profile picture`} />
            <meta property="og:url" content="https://blog.crypticactivist.com/profile" />
            <meta property="og:type" content="article" />

            <meta name="twitter:site" content="Cryptic Activist" />
            <meta name="twitter:title" content={`${publicProfile.publicProfile.data.name} | Cryptic Activist`} />
            <meta name="twitter:description" content="metaDescription" />
            <meta name="twitter:image" content={publicProfile.publicProfile.data.profileImage.url} />
            <meta name="twitter:creator" content={publicProfile.publicProfile.data.profileImage.url} />
            <meta name="twitter:card" content="article" />
            <meta name="twitter:image:alt" content={publicProfile.publicProfile.data.name} />
          </Head>
          <Wrapper>
            <li className="user-cover">
              <ProfileImage src={publicProfile.publicProfile.data.profileImage.url} alt="Profile Placeholder" />
              <SocialMediaUser>
                {github}
                {linkedin}
                {twitter}
              </SocialMediaUser>
            </li>
            <li className="user-info">
              <UserInfoDiv>
                <DisplayName>
                  {publicProfile.publicProfile.data.name}
                </DisplayName>
                {FollowBtn}
                {/* <Quote>{publicProfile.publicProfile.data.quote}</Quote> */}
                {publicProfile.publicProfile.data.quote === '' ? (
                  <EmptyQuote>{publicProfile.publicProfile.data.quote}</EmptyQuote>
                ) : (
                  <Quote>{publicProfile.publicProfile.data.quote}</Quote>
                )}
                <MemberSince>
                  Since
                  {' '}
                  {dateFormatter.formatDateMonthOnly(publicProfile.publicProfile.data.createdOn)}
                </MemberSince>
              </UserInfoDiv>
              <FollowUl>
                <li>
                  <FollowDivUl>
                    <li>
                      <b>
                        Posts
                      </b>
                    </li>
                    <li
                      className="number"
                    >
                      <span>{publicProfile.publicProfile.data.posts.length}</span>
                    </li>
                  </FollowDivUl>
                </li>
                <li>
                  <FollowDivUl>
                    <li>
                      <b>
                        Following
                      </b>
                    </li>
                    <li
                      className="number"
                    >
                      <span>{publicProfile.publicProfile.data.following.length}</span>
                    </li>
                  </FollowDivUl>
                </li>
                <li>
                  <FollowDivUl>
                    <li>
                      <b>
                        Follower
                      </b>
                    </li>
                    <li
                      className="number"
                    >
                      <span>{publicProfile.publicProfile.data.followers.length}</span>
                    </li>
                  </FollowDivUl>
                </li>
              </FollowUl>
            </li>
          </Wrapper>
          <div className="container">
            <div className="row">
              {/* <RecentActivities
                activities={publicProfile.activities}
                authorPicture={publicProfile.publicProfile.data.profileImage.url}
              /> */}
            </div>
          </div>
        </>
      );
    }
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {User}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default connect(mapStateToProps)(PublicProfile);

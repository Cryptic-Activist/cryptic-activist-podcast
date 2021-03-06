import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';

import Layout from '../../Layout';

import {
  FaTimes,
} from 'react-icons/fa';

import PodcastsContent from '../../UI/Lists/Contributor/Podcasts';
import CommentsList from '../../UI/Lists/Contributor/CommentsList';

import BitcoinDoddle from '../../../assets/img/no-content-img.png'

import {
  Wrapper,
  PageTitle,
  Buttons,
  CloseButton,
  NoList,
  PublishA,
} from '../../../styles/Pages/Admin/admin.styled-components';

const Index = () => {
  const userInfo = useSelector((state) => state.user)

  const [postsState, setPostsState] = useState(false);
  const [commentsState, setCommentsState] = useState(false);

  if (userInfo.fetched) {
    console.log('userInfo.data.isAdmin:', userInfo.data.isAdmin);
    if (!userInfo.data.isAdmin) {
      Router.push('/');
    }
  }

  const handlePosts = () => {
    setPostsState(true);
    setCommentsState(false);
  }

  const handleComments = () => {
    setCommentsState(true);
    setPostsState(false);
  }

  const handleCloseLists = () => {
    setPostsState(false);
    setCommentsState(false);
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Wrapper>
              <PageTitle>Contributor Panel</PageTitle>
              {postsState? (
                <Buttons style={{
                  borderBottom: '1px solid #000',
                  background: 'rgba(0, 0, 0, 0.07)',
                }}>Podcasts</Buttons>
              ) : (
                <Buttons
                  onClick={handlePosts}
                >
                  Podcasts
                </Buttons>
              )}
              {commentsState? (
                <Buttons style={{
                  borderBottom: '1px solid #000',
                  background: 'rgba(0, 0, 0, 0.07)',
                }}>Comments</Buttons>
              ) : (
                <Buttons
                  onClick={handleComments}
                >
                  Comments
                </Buttons>
              )}
              <Link href="/admin/publish">
                <PublishA>
                  Publish
                </PublishA>
              </Link>

              {(postsState || commentsState) && (
                <CloseButton
                  onClick={handleCloseLists}
                >
                  <FaTimes />
                </CloseButton>
              )}

              {postsState && (
                <PodcastsContent />
              )}
              {commentsState && (
                <CommentsList />
              )}
              {!postsState && !commentsState && (
                <NoList>
                  <div>
                    <p>No list opened</p>
                  </div>
                </NoList>
              )}
            </Wrapper>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

import React, { useState } from 'react';
import Link from 'next/link';

import Layout from '../../Layout';

import {
  FaTimes,
} from 'react-icons/fa';

import PostsContent from '../../UI/Lists/Contributor/Posts'
import CommentsList from '../../UI/Lists/Contributor/CommentsList';

import BitcoinDoddle from '../../../assets/img/no-content-img.png'

import {
  Wrapper,
  PageTitle,
  Buttons,
  CloseButton,
  NoList,
  PublishA,
} from '../../../styles/Pages/Contributor/contributor.styled-components';

const Index = () => {

  const [postsState, setPostsState] = useState(false);
  const [commentsState, setCommentsState] = useState(false);

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
                }}>Posts</Buttons>
              ) : (
                <Buttons
                  onClick={handlePosts}
                >
                  Posts
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
              <Link href="/contributor/publish">
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
                <PostsContent />
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

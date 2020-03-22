/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  CommentsWrapper,
  Wrapper,
  LinkToProfile,
  AuthorPicture,
  AuthorName,
  PostedOn,
  Content,
  UserInfoWrapper,
  CommentsTitle,
} from '../../../styles/Pages/Podcast/comment.styled-components';

import AddComment from './AddComment';

import {
  getCommentsPodcast
} from '../../../store/actions/podcasts/podcast';

const Comments = (props) => {
  const comments = useSelector((state) => state.podcast.comments);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    podcastId,
  } = props;


  console.log('comments:', comments);

  useEffect(() => {
    dispatch(getCommentsPodcast(podcastId));
  }, []);

  const parseDate = (input) => {
    const parts = input.match(/(\d+)/g);
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  const formatDate = (uploadedOn) => {
    const dateFormatted = parseDate(uploadedOn);
    const months = [
      'January',
      'February',
      'March',
      'April',
      'may',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return `${months[dateFormatted.getMonth()]} ${dateFormatted.getDate()} ${dateFormatted.getFullYear()}`;
  };

  let commentTitle;


  if (comments.fetched) {
    commentTitle = (
      <CommentsTitle>
        Comments:
      </CommentsTitle>
    );
  }

  return (
    <>
      <CommentsWrapper>
        {commentTitle}
        {!_.isEmpty(user.data) ? (
          <AddComment
            user={user.data}
            podcastId={podcastId}
          />
        ) : (
          <></>
        )}


        {comments.loading === true ? (
          <h2>Loading...</h2>
        ) : (
          comments.fetched === true ? (
            comments.data.map((comment) => (
              <Wrapper key={comment.id}>
                <UserInfoWrapper>
                  <ul>
                    <li className="img-li">
                      <Link href={`/user/${comment.author.username}`}>
                        <LinkToProfile>
                          <AuthorPicture
                            src={comment.author.profileImage.url}
                          />
                        </LinkToProfile>
                      </Link>
                    </li>
                    <li className="user-info">
                      <Link href={`/user/${comment.author.username}`}>
                        <LinkToProfile>
                          <AuthorName>
                            {comment.author.name}
                          </AuthorName>
                        </LinkToProfile>
                      </Link>
                      <PostedOn>
                        {formatDate(comment.publishedOn)}
                      </PostedOn>
                    </li>
                  </ul>
                </UserInfoWrapper>
                <Content>{comment.content}</Content>
              </Wrapper>
            ))
          ) : (
            <h2>Error</h2>
          )
        )}
      </CommentsWrapper>
    </>
  );
};

export default Comments;

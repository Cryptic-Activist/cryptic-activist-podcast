import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  TextArea,
  SendButton,
} from '../../../styles/Pages/Podcast/add-comment.styled-components';

import {
  postComment
} from '../../../store/actions/podcasts/podcast';

const AddComment = (props) => {
  const comments = useSelector((state) => state.podcast.comments);
  const [comment, setComment] = useState('');
  const { user, podcastId } = props;
  const dispatch = useDispatch();

  const handleSendComment = async (e) => {
    e.preventDefault();
    dispatch(postComment(user._id, podcastId, comment));
    setComment('');
  };

  const handleTextArea = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSendComment}>
        <TextArea
          placeholder="Comment..."
          onChange={handleTextArea}
          id="comment-textarea"
          value={comment}
        />
        <SendButton>Send</SendButton>
      </Form>
    </>
  );
};

export default AddComment;

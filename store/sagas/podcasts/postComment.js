import {
  put,
  call,
} from 'redux-saga/effects';
import 'isomorphic-fetch';

async function postCommentApi(userId, podcastId, comment) {
  console.log('podcastId in saga:', podcastId)
  const res = await fetch('http://localhost:5000/podcasts/contributor/comment/podcast',
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
        podcastId,
        content: comment
      }),
    });
  const data = await res.json(res);
  return data;
}

export default function* asyncPostCommentApi(action) {
  try {
    const response = yield call(postCommentApi,
      action.payload.userId,
      action.payload.podcastId,
      action.payload.comment);

    yield put({ type: 'SUCCESS_POST_COMMENT', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_POST_COMMENT' });
  }
}

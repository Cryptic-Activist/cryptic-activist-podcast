import {
  put,
  call,
} from 'redux-saga/effects';
import 'isomorphic-fetch';

async function getCommentsPodcastApi(podcastId) {
  const res = await fetch('http://localhost:5000/podcasts/comments', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ podcastId }),
  });
  const data = await res.json();
  return data;
}

export default function* asyncGetCommentsPodcastApi(action) {
  try {
    const response = yield call(getCommentsPodcastApi, action.payload.podcastId);
    yield put({ type: 'SUCCESS_GET_ALL_COMMENTS_PODCAST', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_GET_ALL_COMMENTS_PODCAST' });
  }
}

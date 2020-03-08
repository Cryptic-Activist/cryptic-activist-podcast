import {
  put,
  call,
} from 'redux-saga/effects';
import 'isomorphic-fetch';

async function getCommentsPodcastApi(podcastId) {
  console.log('testing effect:', podcastId)
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
  console.log('data:', data)
  return data;
}

export default function* asyncGetCommentsPodcastApi(action) {
  console.log('action saga:', action)
  try {
    const response = yield call(getCommentsPodcastApi, action.payload.podcastId);
    console.log('response action saga:', response)
    yield put({ type: 'SUCCESS_GET_ALL_COMMENTS_PODCAST', payload: { data: response } });
  } catch (err) {
    console.log('err saga:', err)
    yield put({ type: 'FAILURE_GET_ALL_COMMENTS_PODCAST' });
  }
}

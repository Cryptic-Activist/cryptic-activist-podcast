import {
  put,
  call,
} from 'redux-saga/effects';

async function getPodcastsByTagApi(tag) {
  console.log('tags:', tag)
  const res = await fetch(`https://cryptic-activist-podcast-api.herokuapp.com/podcasts/get/tag/${tag}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

export default function* asyncPodcastsByTagApi(action) {
  try {
    const response = yield call(getPodcastsByTagApi, action.payload.tag);

    console.log('responses:', response)

    yield put({ type: 'SUCCESS_PODCASTS_BY_TAG', payload: { data: response } });
  } catch (err) {
    console.log('err tags:', err)
    yield put({ type: 'FAILURE_PODCASTS_BY_TAG' });
  }
}

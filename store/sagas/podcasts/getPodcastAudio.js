import {
  put,
  call,
} from 'redux-saga/effects';

async function getPodcastAudioApi(slug) {
  const res = await fetch(`http://localhost:5000/podcasts/get/slug/${slug}`, {
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

export default function* asyncGetPodcastAudio(action) {
  try {
    const response = yield call(getPodcastAudioApi, action.payload.slug);

    yield put({ type: 'SUCCESS_PODCAST_AUDIO_BY_SLUG', payload: { data: response[0] } });
  } catch (err) {
    console.log('err:', err)
    yield put({ type: 'FAILURE_PODCAST_AUDIO_BY_SLUG' });
  }
}

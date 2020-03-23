import {
  put,
  call,
} from 'redux-saga/effects';

async function editGetPodcastApi(slug) {
  console.log('did you mean it?')
  const res = await fetch(`https://cryptic-activist-podcast-api.herokuapp.com/admin/podcasts/get/slug/${slug}`, {
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

export default function* asyncEditGetPodcast(action) {
  try {
    const response = yield call(editGetPodcastApi, action.payload.slug);

    console.log('edit response:', response)
    yield put({ type: 'SUCCESS_EDIT_GET_PODCAST', payload: { data: response } });
  } catch (err) {
    console.log('err:', err)
    yield put({ type: 'SUCCESS_EDIT_GET_PODCAST' });
  }
}

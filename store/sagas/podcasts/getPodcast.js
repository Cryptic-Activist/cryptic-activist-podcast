import {
  put,
  call,
} from 'redux-saga/effects';

async function getPodcastApi(slug) {
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

async function getRelatedPodcastsApi(category, slug) {
  const res = await fetch(`http://localhost:5000/podcasts/get/category/newest/${category}/${slug}`, {
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


export default function* asyncGetPodcast(action) {
  try {
    const response = yield call(getPodcastApi, action.payload.slug);

    const responseRelatedPodcasts = yield call(
      getRelatedPodcastsApi,
      response[0].category,
      response[0].slug,
    );
    
    yield put({ type: 'SUCCESS_PODCAST_BY_SLUG', payload: { data: response[0] } });
    yield put({ type: 'SUCCESS_RELATED_PODCASTS', payload: { data: response } });
  } catch (err) {
    console.log('err:', err)
    yield put({ type: 'FAILURE_PODCAST_BY_SLUG' });
  }
}

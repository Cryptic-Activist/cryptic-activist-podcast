import {
  put,
  call,
} from 'redux-saga/effects';
import 'isomorphic-fetch';

async function updateHowManyReadApi(slug, howManyReadNumber) {
  const response = fetch(
    'https://cryptic-activist-podcast-api.herokuapp.com/podcast/update/post/how-many-read',
    {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        slug,
        howManyReadNumber,
      }),
    },
  );
  const data = response.json();
  return data;
}

export default function* asyncUpdateHowManyReadApi(action) {
  try {
    yield call(updateHowManyReadApi, action.payload.slug, action.payload.howManyReadNumber);

    yield put({ type: 'SUCCESS_UPDATE_HOW_MANY_READ' });
  } catch (err) {
    yield put({ type: 'SUCCESS_UPDATE_HOW_MANY_READ' });
  }
}

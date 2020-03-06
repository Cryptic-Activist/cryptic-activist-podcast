import {
  put,
  call,
} from 'redux-saga/effects';
import 'isomorphic-fetch';

async function getTopAuthorsApi() {
  const response = await fetch('http://localhost:5000/blog/get/top-authors', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export default function* asyncTopAuthorsApi() {
  try {
    const response = yield call(getTopAuthorsApi);

    yield put({ type: 'SUCCESS_TOP_AUTHORS', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_TOP_AUTHORS' });
  }
}

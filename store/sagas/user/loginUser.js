import {
  put,
  call,
} from 'redux-saga/effects';

async function getLoginApi() {
  const res = await fetch('http://localhost:5002/auth/user', {
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

export default function* asyncLoginUser() {
  try {
    const response = yield call(getLoginApi);

    yield put({ type: 'SUCCESS_LOGIN_USER', payload: { data: response } });
  } catch (err) {
    console.log('err login user:', err)
    yield put({ type: 'FAILURE_LOGIN_USER' });
  }
}

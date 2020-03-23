import {
  put,
  call,
} from 'redux-saga/effects';

async function updateProfileUserInfoApi(updateObj) {
  const res = await fetch('https://cryptic-activist-user-api.herokuapp.com/users/update', {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateObj),
  });
  const data = await res.json();
  return data;
}

export default function* asyncUpdateProfileUserInfo(action) {
  try {
    const response = yield call(updateProfileUserInfoApi, action.payload.updateObj);
    yield put({ type: 'SUCCESS_UPDATE_USER_INFO', payload: { data: response } });
  } catch (err) {
    yield put({ type: 'FAILURE_UPDATE_USER_INFO' });
  }
}

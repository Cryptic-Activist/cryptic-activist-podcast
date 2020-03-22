import {
  put,
  call,
} from 'redux-saga/effects';

async function getPublicProfileApi(user) {
  const res = await fetch(`http://localhost:5002/users/public-profile/${user}`, {
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

async function getActivities(activities) {
  const response = await fetch('http://localhost:5003/blog/get/user/activities', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      posts: activities,
    }),
  });
  const data = await response.json();
  console.log('data why so serious:', data);
  return data;
};

export default function* asyncGetPublicProfileApi(action) {
  try {
    const response = yield call(getPublicProfileApi, action.payload.user);

    const activities = yield call(getActivities, response.posts);

    yield put({ type: 'SUCCESS_GET_PUBLIC_PROFILE', payload: { data: response } });
    yield put({ type: 'SUCCESS_GET_PUBLIC_PROFILE_ACTIVITIES', payload: { data: activities } });
  } catch (err) {
    console.log('err:', err)
    yield put({ type: 'FAILURE_GET_PUBLIC_PROFILE' });
  }
}

import update from 'immutability-helper';

const initialState = {
  podcast: {
    data: {},
    loading: false,
    fetched: false,
    error: false,
  }
};

export default function editPodcast(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_EDIT_GET_PODCAST':
      return update(state, {
        podcast: {
          loading: { $set: true },
        },
      });
    case 'SUCCESS_EDIT_GET_PODCAST':
      return update(state, {
        podcast: {
          data: { $set: action.payload.data },
          loading: { $set: false },
          fetched: { $set: true },
          error: { $set: false },
        },
      });
    case 'FAILURE_EDIT_GET_PODCAST':
      return update(state, {
        podcast: {
          fetched: { $set: true },
          error: { $set: true },
        },
      });
    default:
      return state;
  }
}

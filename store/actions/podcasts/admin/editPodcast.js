/* eslint-disable import/prefer-default-export */
export function editPodcast(slug) {
  console.log('slug:', slug)
  return {
    type: 'REQUEST_EDIT_GET_PODCAST',
    payload: {
      slug,
    },
  };
}

/* eslint-disable import/prefer-default-export */
export function getPodcast(slug) {
  return {
    type: 'REQUEST_PODCAST_BY_SLUG',
    payload: {
      slug,
    },
  };
}

export function getPodcastAudio(slug) {
  return {
    type: 'REQUEST_PODCAST_AUDIO_BY_SLUG',
    payload: {
      slug,
    },
  };
}

export function getCommentsPodcast(podcastId) {
  return {
    type: 'REQUEST_GET_ALL_COMMENTS_PODCAST',
    payload: {
      podcastId,
    },
  };
}

export function postComment(userId, podcastId, comment) {
  return {
    type: 'REQUEST_POST_COMMENT',
    payload: {
      userId,
      podcastId,
      comment,
    },
  };
}

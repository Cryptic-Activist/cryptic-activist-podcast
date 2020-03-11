import { combineReducers } from 'redux';

import user from './user/user';
import publicProfile from './user/publicProfile';
import navbar from './navbar';
import podcasts from './podcasts/podcasts';
import podcast from './podcasts/podcast';
import uploadedPodcast from './podcasts/uploadPodcast';
import podcastsByCategory from './podcasts/podcastsByCategory';
import podcastsByTag from './podcasts/podcastsByTag';
import editPodcast from './podcasts/editPodcast';

export default combineReducers({
  user,
  publicProfile,
  navbar,
  podcasts,
  podcast,
  uploadedPodcast,
  podcastsByCategory,
  podcastsByTag,
  editPodcast,
});

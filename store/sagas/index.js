import {
  takeLatest,
  all,
} from 'redux-saga/effects';


import asyncLoginUserApi from './user/loginUser';
import asyncRegisterAdminUserApi from './user/registerAdminUser';
import asyncLoginAdminUserApi from './user/loginAdminUser';
import asyncLoginUserProviderApi from './user/loginUserProvider';
import asyncGetPublicProfileApi from './user/getPublicProfile';
import asyncSetFollowAuthorApi from './user/setFollowAuthor';
import asyncSetUnfollowAuthorApi from './user/setUnfollowAuthor';
import asyncLogoutUserApi from './user/logoutUser';
import asyncRefreshUserData from './user/refreshUserData';
import asyncUpdateProfileUserInfo from './user/updateProfileUserInfo';
import asyncGetPodcasts from './podcasts/getPodcasts';
import asyncGetPodcast from './podcasts/getPodcast';
import asyncGetRelatedPodcastsApi from './podcasts/getRelatedPodcast';
import asyncGetCommentsPodcastApi from './podcasts/getCommentsPodcast';
import asyncPostComment from './podcasts/postComment';
import asyncUpdateHowManyReadApi from './podcasts/updateHowManyRead';
import asyncPodcastsByCategoryApi from './podcasts/getPodcastsByCategory';
import asyncPodcastsByTagApi from './podcasts/getPodcastsByTag';

export default function* root() {
  yield all([
    takeLatest('REQUEST_REGISTER_ADMIN_USER', asyncRegisterAdminUserApi),
    takeLatest('REQUEST_LOGIN_ADMIN_USER', asyncLoginAdminUserApi),
    takeLatest('REQUEST_LOGIN_USER', asyncLoginUserApi),
    takeLatest('REQUEST_LOGIN_USER_PROVIDER', asyncLoginUserProviderApi),
    takeLatest('REQUEST_GET_PUBLIC_PROFILE', asyncGetPublicProfileApi),
    takeLatest('REQUEST_SET_FOLLOW_AUTHOR', asyncSetFollowAuthorApi),
    takeLatest('REQUEST_SET_UNFOLLOW_AUTHOR', asyncSetUnfollowAuthorApi),
    takeLatest('REQUEST_LOGOUT_USER', asyncLogoutUserApi),
    takeLatest('REQUEST_REFRESH_USER_DATA', asyncRefreshUserData),
    takeLatest('REQUEST_UPDATE_USER_INFO', asyncUpdateProfileUserInfo),
    takeLatest('REQUEST_ALL_PODCASTS', asyncGetPodcasts),
    takeLatest('REQUEST_PODCAST_BY_SLUG', asyncGetPodcast),
    takeLatest('REQUEST_RELATED_PODCASTS', asyncGetRelatedPodcastsApi),
    takeLatest('REQUEST_POST_COMMENT', asyncPostComment),
    takeLatest('REQUEST_GET_ALL_COMMENTS_PODCAST', asyncGetCommentsPodcastApi),
    takeLatest('REQUEST_UPDATE_HOW_MANY_READ', asyncUpdateHowManyReadApi),
    takeLatest('REQUEST_PODCASTS_BY_CATEGORY', asyncPodcastsByCategoryApi),
    takeLatest('REQUEST_PODCASTS_BY_TAG', asyncPodcastsByTagApi),
  ]);
}

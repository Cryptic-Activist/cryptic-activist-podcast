import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  RecentActivitiesH2,
} from '../../../styles/Pages/Profile/recent-activities.styled-components';

import RecentActivitiesList from '../../UI/Lists/Profile/RecentActivitiesList';

const RecentActivities = (props) => {
  const {
    authorPicture,
    activities,
  } = props;

  return (
    <>
      {(!_.isEmpty(activities.data) && activities.fetched) && (
        <>
          <div className="col-12">
            <RecentActivitiesH2>Recent Activities</RecentActivitiesH2>
          </div>
          {activities.data.map((activity) => (
            <RecentActivitiesList
              title={activity.title}
              publishedOn={activity.publishedOn}
              coverUrl={activity.cover.url}
              slug={activity.slug}
              authorPicture={authorPicture}
            />
          ))}
        </>
      )}
    </>
  );
};

RecentActivities.propTypes = {
  activities: PropTypes.shape().isRequired,
  authorPicture: PropTypes.string.isRequired,
};

export default RecentActivities;

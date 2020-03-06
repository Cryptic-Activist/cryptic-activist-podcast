import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  RecentActivitiesCover,
  RecentActivityWrapper,
  RecentActivitiesAuthorPicture,
  RecentActivityTitle,
  RecentActivityPublishedOn,
} from '../../../../styles/Components/UI/Lists/Profile/recent-activities-list.styled-components';

import DateFormatter from '../../../../utils/DateFormatter';

const RecentActivitiesList = (props) => {
  const {
    title,
    publishedOn,
    coverUrl,
    slug,
    authorPicture,
  } = props;

  const dateFormatter = new DateFormatter();

  return (
    <div
      className="col-lg-4 col-md-6 col-sm-6 col-12"
    >
      <Link href={`/${slug}`}>
        <RecentActivityWrapper>
          <RecentActivitiesCover
            style={{
              backgroundImage: `url(${coverUrl})`,
            }}
          />
          <RecentActivitiesAuthorPicture
            src={authorPicture}
          />
          <RecentActivityTitle>
            {title}
          </RecentActivityTitle>
          <RecentActivityPublishedOn>
            {dateFormatter.formatDateFullDate(publishedOn)}
          </RecentActivityPublishedOn>
        </RecentActivityWrapper>
      </Link>
    </div>
  );
};

RecentActivitiesList.propTypes = {
  coverUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  authorPicture: PropTypes.string.isRequired,
};


export default RecentActivitiesList;

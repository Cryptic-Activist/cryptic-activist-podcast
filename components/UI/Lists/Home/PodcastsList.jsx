import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  Wrapper,
  Cover,
  InfoDiv,
  Ul,
  UploadedOn,
  Category,
  Title,
} from '../../../../styles/Components/UI/Lists/Home/podcasts-list.styled-components';

import DateFormatter from '../../../../utils/DateFormatter';
import StringFormatter from '../../../../utils/StringConverter';

const PodcastsList = (props) => {
  const {
    category,
    title,
    date,
    slug,
    cover,
  } = props;

  const dateFormatter = new DateFormatter();
  const stringFormatter = new StringFormatter();

  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
      <Link href={`/${slug}`}>
        <Wrapper>
          <Ul>
            <li
              style={{
                display: 'inline-block',
                marginRight: '8px',
              }}
            >
              <Cover src={cover} />
            </li>
            <li
              style={{
                display: 'inline-block',
              }}
            >
              <InfoDiv>
                <UploadedOn>
                  <b style={{ color: '#333' }}>{dateFormatter.formatDateFullDate(date)}</b>
                </UploadedOn>
                <Title>
                  {stringFormatter.shortenTitle(title)}
                </Title>
                <Category>
                  {category}
                </Category>
              </InfoDiv>
            </li>
          </Ul>
        </Wrapper>
      </Link>
    </div>
  );
}

PodcastsList.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default PodcastsList;
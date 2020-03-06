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
} from '../../../../styles/Components/UI/Lists/ByCategoryList/by-category-list.styled-components';

const PodcastsList = (props) => {
  const {
    slug,
    cover,
    category,
    title,
    date,
  } = props;

  return (
    <>
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
                    <b style={{ color: '#333' }}>{date}</b>
                  </UploadedOn>
                  <Title>
                    {title}
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
    </>
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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  Card,
  Cover,
  Title,
} from '../../../../styles/Components/UI/Lists/ByCategoryList/by-category-list.styled-components';

import Formatter from '../../../../utils/DateFormatter';

const ByCategoryList = (props) => {
  const {
    title,
    imgSrc,
    slug
  } = props;

  return (
    <Link href={`/${slug}`}>
      <Card
        className="col-lg-4 col-md-6 col-sm-6 col-12"
        style={{ border: 'none' }}
      >
        <Cover
          src={imgSrc}
          alt="React.js"
          width="100%"
          style={{
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <Title>{title}</Title>
      </Card>
    </Link>
  );
}

ByCategoryList.propTypes = {
  type: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  publishedOn: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ByCategoryList;
import React from 'react';
import PropTypes from 'prop-types';
// import AdSense from 'react-adsense';

import { AdSquare } from '../../../styles/Components/Ads/Square/advertisements.styled-components';

const AdvertisementSquare = ({ IsLast }) => {
  let ad;
  if (IsLast === 'last') {
    ad = (
      <>
        <AdSquare
          className="last"
        >
          Ad
        </AdSquare>
      </>
    );
  } else {
    ad = (
      <>
        <AdSquare>
          Ad
        </AdSquare>
      </>
    );
  }

  return (
    <>
      {/* <AdSense.Google
      client="ca-pub-3011749340662383"
      slot="7806394673"
      style={{ width: '100%', height: 300, float: 'left' }}
      format=""
    /> */}
      {ad}
    </>
  );
};

export default AdvertisementSquare;

AdvertisementSquare.propTypes = {
  IsLast: PropTypes.string,
};

AdvertisementSquare.defaultProps = {
  IsLast: undefined,
};

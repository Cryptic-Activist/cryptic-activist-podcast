import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  SubNavigatorBar,
  Ul,
  Li,
  Separator,
} from '../../../styles/Components/UI/Navbar/subnavbar.styled-components';

const SubNavBar = (props) => {
  const { media, category, title } = props;

  return (
    <SubNavigatorBar>
      <Container className="container">
        <div className="row">
          <div className="col-12">
            {title === '' ? (
              <Ul>
                <Li>{media}</Li>
              </Ul>
            ) : (
              <Ul>
                <Li>{media}</Li>
                {' '}
                <Separator>{'>'}</Separator>
                {' '}
                <Li>{category}</Li>
                {' '}
                <Separator>{'>'}</Separator>
                {' '}
                <Li style={{ color: '#000', fontWeight: '900' }}>{title}</Li>
              </Ul>
            )}
          </div>
        </div>
      </Container>
    </SubNavigatorBar>
  );
};

SubNavBar.propTypes = {
  media: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string,
};

SubNavBar.defaultProps = {
  title: '',
};

export default SubNavBar;

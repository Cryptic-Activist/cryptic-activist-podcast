import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  FaSortDown,
  FaPodcast,
  FaTrashAlt,
  FaRegEdit,
} from 'react-icons/fa';

import {
  ToggleButton,
  Expand,
  Edit,
  Delete,
  GoTo,
} from '../../../../styles/Components/UI/Lists/Contributor/posts.styled-components';

import DateFormatter from '../../../../utils/DateFormatter';

const List = (props) => {
  const {
    type,
    title,
    date,
    category,
    slug,
    liID,
  } = props;
  console.log('date podcasts:', props)

  const formatter = new DateFormatter()

  const getBlogPostBySlug = async () => {
    const { slug } = this.state;
    const response = await fetch(
      `http://localhost:5000/blog/get/slug/${slug}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  }

  const onDeletePost = async () => {
    const post = await getBlogPostBySlug();
    // post = post[0];
    const {
      cover,
      id,
    } = post[0];
    await fetch(
      `http://localhost:5000/blog/delete/cover/${cover._id}`,
      {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    await fetch(`http://localhost:5000/blog/delete/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <li style={{
      // margin: '0 10px 5px 10px',
      listStyle: 'none',
    }}
    >
      <ToggleButton
        type="button"
        data-toggle="collapse"
        data-target={`#${liID}`}
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <div className="row">
          <div className="col-10">
            <b
              style={{
                color: '#999',
                marginBottom: '0px',
                float: 'left',
                fontSize: '12px',
                lineHeight: '24px',
              }}
            >
              {`Podcast > ${category}`}

            </b>
            <br />
            <h5
              style={{
                color: '#000',
                marginBottom: '0px',
                float: 'left',
                textAlign: 'initial',
              }}
            >
              {title}
            </h5>
            <br />
            <span
              style={{
                color: '#999',
                fontSize: '14px',
                float: 'left',
              }}
            >
              {formatter.formatDateFullDate(date)}
            </span>
          </div>
          <div className="col-2">
            <Expand to={`/admin/course/${slug}`}>
              <FaSortDown />
            </Expand>
          </div>
        </div>
      </ToggleButton>
      <div
        className="collapse"
        id={liID}
        style={{ height: '40px' }}
      >
        <Delete onClick={onDeletePost}>
          <FaTrashAlt />
          &nbsp; Delete
        </Delete>
        <Edit to={`/edit/post/${slug}`}>
          <FaRegEdit />
          &nbsp; Edit
        </Edit>
        <Link href={`/${slug}`}>
          <GoTo>
            <FaPodcast />
              &nbsp; Blog Page
          </GoTo>
        </Link>
      </div>
    </li>
  );
}

List.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  slug: PropTypes.string,
  liID: PropTypes.string,
};

List.defaultProps = {
  type: '',
  title: '',
  date: '',
  category: '',
  slug: '',
  liID: '',
};

export default List;
import React from 'react'
import { connect } from 'react-redux';
import Link from 'next/link';

import {
  Heading,
  Ul,
  Li,
  A,
  Div,
  Number,
  Title,
  CategoryDate,
  Category,
  Sep,
  Date,
} from '../../../../styles/Components/UI/Lists/Aside/category-aside.styled-components'

import Formatter from '../../../../utils/DateFormatter';

const mapStateToProps = (state) => {
  const {
    blog,
  } = state;

  const {
    mainBlogPost,
  } = blog;

  return {
    mainBlogPost,
  }
}

function MostPopular(props) {
  const {
    mainBlogPost
  } = props;

  const dateFormatter = new Formatter();

  return (
    <>
      <Heading>
        Most Popular
      </Heading>
      <Ul>
        {mainBlogPost.data.map((post, index) => (
          <Li
            key={post.slug}
          >
            <Link href={`/${post.slug}`}>
              <A>
                <Div>
                  <Number>
                  {`0${index + 1}`}
                  </Number>
                </Div>
                <Div>
                  <Title>
                    {post.title}
                  </Title>
                  <CategoryDate>
                    <Category>
                      {post.category}
                    </Category>
                    <Sep>.</Sep>
                    <Date>
                      {dateFormatter.formatDateFullDate(post.publishedOn)}
                    </Date>
                  </CategoryDate>
                </Div>
              </A>
            </Link>
          </Li>
        ))}
      </Ul>
    </>
  )
}

export default connect(mapStateToProps)(MostPopular);

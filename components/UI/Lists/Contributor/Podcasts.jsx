/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {
  FaSpinner,
} from 'react-icons/fa';
import List from './PodcastsList';

import BitcoinDoddle from '../../../../assets/img/no-content-img.png';

import {
  LoadingAllContent,
  NoContentDiv,
  NoContentImg,
  NoContentP,
  InfinitePostList,
  Scroller,
} from '../../../../styles/Components/UI/Lists/Contributor/posts.styled-components';


const PodcastsContent = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [found, setFound] = useState(false);

  console.log('posts list:', posts)

  const getFirstPosts = async () => {
    const response = await fetch(
      'http://localhost:5000/podcasts/',
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

  const getMorePosts = async () => {
    setPage(page + 1);
    const tempPage = page + 1;
    const response = await fetch(`http://localhost:5000/podcasts/?page=${tempPage}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.length < 10) {
      setPosts(posts.concat(data));
      setTimeout(() => {
        setHasMore(false);
      }, 10);
    } else {
      setPosts(posts.concat(data));
    }
  }

  const getAsync = async () => {
    const postsList = await getFirstPosts();
    let more = true;
    if (!postsList.found) {
      setFound(false);
    }
    if (postsList.length > 0) {
      if (postsList.length < 10) {
        more = false;
      }
      setPosts(postsList);
      setHasMore(more);
      setFound(true);
    }
    setPosts(postsList);
    // setTimeout(() => {
    //   getMorePosts();
    // }, 2000);
  }

  useEffect(() => {
    getAsync();
  }, []);

  let list;

  if (!found) {
    list = (
      <>
        <NoContentDiv>
          <NoContentImg src={BitcoinDoddle} />
          <NoContentP>
          No Blog has been found.
          </NoContentP>
        </NoContentDiv>
      </>
    );
  } else {
    list = (
      <InfinitePostList>
        <InfiniteScroll
          dataLength={posts.length}
          hasMore={hasMore}
          next={getMorePosts}
          style={{
            
          }}
          loader={(
            <>
              <LoadingAllContent>
                <FaSpinner />
              </LoadingAllContent>
            </>
                  )}
          endMessage={(
            <div />
                  )}
        >
          {posts.map((post) => {
            const { id } = post;
            return (
              <List
                key={id}
                type={post.type}
                category={post.category}
                title={post.title}
                date={post.uploadedOn}
                content={post.content}
                slug={post.slug}
                liID={`b-${post.id}`}
                coverFileId={post.cover._id}
              />
            );
          })}
        </InfiniteScroll>
      </InfinitePostList>
    );
  }


  return (
    <Scroller>
      {list}
    </Scroller>
  );
}

export default PodcastsContent;
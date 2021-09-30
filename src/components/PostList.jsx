import React from 'react';
import PostItem from './PosItem';

const PostList = ({posts, title}) => {
// const PostList = (props) => {
  return (
    <div>
      <h1 style={ { textAlign: 'center' } }>
        {title}
        {/*{ props.title }*/}
      </h1>
      { posts.map(
      // { props.posts.map(
        post =>
          <PostItem post={ post } key={ post.id }/>
      ) }
    </div>
  );
};

export default PostList;

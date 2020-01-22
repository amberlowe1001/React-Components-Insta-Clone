// // You do not need to change any code in this file

// import React from "react";
// import "./Posts.css";

// const PostHeader = props => {
//   return (
//     <div className="post-header">
//       <div className="post-thumb-wrapper">
//         <img
//           alt="post header"
//           className="post-thumb"
//           src={props.thumbnailUrl}
//         />
//       </div>
//       <h2>{props.username}</h2>
//     </div>
//   );
// };

export default PostHeader;
import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsHeader = props => {

  if (!props.posts.length) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="posts-thumb-wrapper">
      {props.posts.map(post => <Post
        key={post.imageUrl}
        post={post} />)}
    </div>
  );
};

export default PostsHeader;
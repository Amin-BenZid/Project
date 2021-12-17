import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

function PostList() {
  const post = useSelector((state) => state.postReducer.newPost);

  return (
    <div>
      {post
        .slice(0)
        .reverse()  
        .map((post) => {
          return <Post post={post} />;
        })}
    </div>
  );
}

export default PostList;

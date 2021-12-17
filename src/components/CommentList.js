import React from "react";
import Comment from "./Comment";
import { useSelector } from "react-redux";

function CommentList() {
  const comment = useSelector((state) => state.postReducer.newComment);

  return (
    <div>
      {comment.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </div>
  );
}

export default CommentList;

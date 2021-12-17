import React, { useState } from "react";
import "./Posts.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addNewComment } from "../redux/userRegister/postSlice";
import { v4 as uuidv4 } from "uuid";

function CommentInput() {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewComment({ newComment: newComment, id: uuidv4() }));
  };
  var userName = useSelector((state) => state.register.userLogin.email);

  return (
    <div onSubmit={(e) => handleSubmit(e)}>
      <form className="">
        <input
          onChange={(e) => setNewComment(e.target.value)}
          type="text"
          className="inputcomment"
          placeholder={`Send a comment ${userName}`}
        ></input>
        <button type="submit" className="submitbtn">
          <AiFillPlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}

export default CommentInput;

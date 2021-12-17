import React, { useState } from "react";
import "./Posts.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../redux/userRegister/postSlice";
import { v4 as uuidv4 } from "uuid";

function PostInput() {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    newPost != ""
      ? dispatch(addNewPost({ newPost: newPost, id: uuidv4() }))
      : alert("type somthing but don't spamm it");
    setNewPost("");
  };
  var userName = useSelector((state) => state.register.userLogin.email);

  return (
    <div onSubmit={(e) => handleSubmit(e)}>
      <form className="forum">
        <input
          onChange={(e) => setNewPost(e.target.value)}
          type="text"
          className="postInput"
          placeholder={`What's on your mind ${userName}`}
        ></input>
        <button type="submit">
          <AiFillPlusCircle size={30} />
        </button>
      </form>
    </div>
  );
}

export default PostInput;

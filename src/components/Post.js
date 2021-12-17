import React, { useState } from "react";
import "./Posts.css";
import { IoHeartOutline, IoChatbox } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { delPost } from "../redux/userRegister/postSlice";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
function Post(post) {
  const [like, setLike] = useState(true);
  const [color, setColor] = useState("black");
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  const handleLike = (e) => {
    e.preventDefault();
    like === false ? setLike(true) : setLike(false);
    like === false ? setColor("black") : setColor("red");
    like === true ? setCounter(counter + 1) : setCounter(counter - 1);
  };
  const handleComment = (e) => {
    e.preventDefault();
    show === false ? setShow(true) : setShow(false);
  };
  var userName = useSelector((state) => state.register.userLogin.email);
  var postConst = post.post.newPost;
  const dispatch = useDispatch();
  return (
    <div className="post">
      <div className="profile-name">
        <ImUser size={44} style={{ marginLeft: "15px" }} /> <h5>{userName}</h5>
        <p style={{ marginLeft: "300px", marginTop: "15px" }}>
          {Date().substring(16, 21)}
        </p>
      </div>
      <div className="post-sec">
        <br />
        <p className="p">{postConst}</p>
      </div>
      <div className="line"></div>

      <div className="post-like-comment">
        <div className="post-like">
          <button onClick={handleLike}>
            <IoHeartOutline size={30} color={color} />
          </button>
          {counter}
        </div>
        <div className="post-comment">
          <button onClick={handleComment}>
            <IoChatbox size={30} />
          </button>
          <button
            className="btn del-btn"
            onClick={() => dispatch(delPost(post.post.id))}
          >
            Delete
          </button>
        </div>
      </div>
      {/* Comment sec */}
      {show ? (
        <div className="comment-sec">
          <p>Comments section</p>
          <div>
            <CommentList />
            <CommentInput />
          </div>
          {/* <Comment /> */}
        </div>
      ) : null}
    </div>
  );
}
export default Post;

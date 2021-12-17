import React, { useState } from "react";
import "./Posts.css";
import { IoHeartOutline, IoChatbox } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { delComment } from "../redux/userRegister/postSlice";

function Comment(comment) {
  const [like, setLike] = useState(true);
  const [color, setColor] = useState("black");
  const [counter, setCounter] = useState(0);

  const handleLike = (e) => {
    e.preventDefault();
    like === false ? setLike(true) : setLike(false);
    like === false ? setColor("black") : setColor("red");
    like === true ? setCounter(counter + 1) : setCounter(counter - 1);
  };
  var userName = useSelector((state) => state.register.userLogin.email);
  var commentConst = comment.comment.newComment;
  const dispatch = useDispatch();
  return (
    <div className="">
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "20px" }}>{userName} </p>
        <br />
        <p style={{ marginLeft: "20px", fontSize: "20px" }} className="p">
          : {commentConst}
        </p>
      </div>
      <div
        style={{ width: "400px", height: "1px", backgroundColor: "black" }}
      ></div>

      <div style={{ display: "flex" }}>
        <div className="">
          <button onClick={handleLike} className="btn ">
            <IoHeartOutline size={20} color={color} />
          </button>
          {counter}
        </div>
        <div className="">
          <button
            style={{ marginLeft: "270px" }}
            className="btn submitbtn "
            onClick={() => dispatch(delComment(comment.comment.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Comment;

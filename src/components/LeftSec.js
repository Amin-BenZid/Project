import React from "react";
import {
  FcReadingEbook,
  FcSms,
  FcSteam,
  FcCollaboration,
  FcShop,
  FcSalesPerformance,
  FcOvertime,
} from "react-icons/fc";
import "../components/Login.css";

function LeftSec() {
  const display = { display: "flex", marginLeft: "5px", marginTop: "5px" };
  return (
    <div className="left-sec">
      <button style={display} className="btn ">
        <FcReadingEbook size={40} />
        <h5 style={{ marginTop: "14px", marginLeft: "10px" }}>Friends</h5>
      </button>
      <br />
      <button style={display} className="btn ">
        <FcSms size={40} />
        <h5 style={{ marginTop: "14px", marginLeft: "10px" }}>Messenger</h5>
      </button>
      <br />
      <button style={display} className="btn ">
        <FcSteam size={40} />
        <h5 style={{ marginTop: "14px", marginLeft: "10px" }}>Gaming video</h5>
      </button>
      <br />
      <button style={display} className="btn ">
        <FcCollaboration size={40} />
        <h5 style={{ marginTop: "14px", marginLeft: "10px" }}>Groups</h5>
      </button>
      <br />
      <button style={display} className="btn ">
        <FcShop size={40} />
        <h5 style={{ marginTop: "14px", marginLeft: "10px" }}>Marketplace</h5>
      </button>
      <br />
      <button style={display} className="btn ">
        <FcSalesPerformance size={40} />
        <h5 style={{ marginTop: "14px", marginLeft: "10px" }}>Ads</h5>
      </button>
      <br />
      <button style={display} className="btn ">
        <FcOvertime size={40} />
        <h5 style={{ marginTop: "14px", marginLeft: "10px" }}>Events</h5>
      </button>
      <br />
    </div>
  );
}

export default LeftSec;

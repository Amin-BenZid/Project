import React from "react";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";

function RightSec() {
  const display = { display: "flex", marginLeft: "5px", marginTop: "5px" };

  return (
    <div>
      <div>
        <h6>Sponsored</h6>
        <hr />
      </div>
      <div>
        <h6>Your Pages</h6>
        <hr />
      </div>
      <div>
        <h6>Contacts</h6>
      </div>
      <div className="right-sec">
        <button style={display} className="btn">
          <FcBusinessman size={40} />
          <h6 style={{ marginTop: "14px", marginLeft: "10px" }}>Friend</h6>
        </button>
        <br />
        <button style={display} className="btn">
          <FcBusinesswoman size={40} />
          <h6 style={{ marginTop: "14px", marginLeft: "10px" }}>Friend</h6>
        </button>
        <br />
        <button style={display} className="btn">
          <FcBusinessman size={40} />
          <h6 style={{ marginTop: "14px", marginLeft: "10px" }}>Friend</h6>
        </button>
        <br />
        <button style={display} className="btn">
          <FcBusinessman size={40} />
          <h6 style={{ marginTop: "14px", marginLeft: "10px" }}>Friend</h6>
        </button>
        <br />
        <button style={display} className="btn">
          <FcBusinesswoman size={40} />
          <h6 style={{ marginTop: "14px", marginLeft: "10px" }}>Friend</h6>
        </button>
        <br />
        <button style={display} className="btn">
          <FcBusinesswoman size={40} />
          <h6 style={{ marginTop: "14px", marginLeft: "10px" }}>Friend</h6>
        </button>
        <br />
        <button style={display} className="btn">
          <FcBusinessman size={40} />
          <h6 style={{ marginTop: "14px", marginLeft: "10px" }}>Friend</h6>
        </button>
        <br />
        <button style={display} className="btn">
          <FcBusinessman size={40} />
          <h6 style={{ marginTop: "14px", marginLeft: "10px" }}>Friend</h6>
        </button>
        <br />
      </div>
    </div>
  );
}

export default RightSec;

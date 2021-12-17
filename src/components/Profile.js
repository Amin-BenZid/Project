import React, { useState } from "react";
import NavBar from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";
import "./profile.css";
import { useSelector } from "react-redux";
import { ImUser } from "react-icons/im";

function Profile() {
  const userName = useSelector((state) => state.register.userLogin.email);
  const input = { display: "flex" };
  const inputStyle = {
    border: "1px solid gray",
    outline: "none",
    borderRadius: "10px 10px 10px 10px",
    marginLeft: "20px",
    paddingLeft: "20px",
  };
  const [gender, setGender] = useState("Male");
  const [birthDay, setBirthDay] = useState("dd/mm/yy");
  const [hobies, setHobies] = useState();

  return (
    <div>
      <NavBar />
      <Container>
        <Row style={{ display: "flex" }}>
          <Col sm={12} className="background-pic">
            <Col sm={4} className="profile-pic">
              <ImUser size={170} style={{ marginLeft: "15px" }} />
            </Col>
          </Col>
          {/* auto bio regenerator */}
          <Col className="my-info">
            <Row style={{ marginLeft: "260px", marginTop: "70px" }}>
              <Col style={{ display: "flex" }}>
                <h4>Username :</h4>
                <h5
                  style={{
                    marginLeft: "20px",
                    marginTop: "5px",
                    color: "gray",
                  }}
                >
                  {userName}
                </h5>
              </Col>
              <Col style={input}>
                <h4>Gender :</h4>
                <select
                  name="Gender"
                  style={inputStyle}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </Col>
            </Row>
            <Row style={{ marginLeft: "260px", marginTop: "40px" }}>
              <Col style={input}>
                <h4>Birthday :</h4>
                <input
                  type="date"
                  style={inputStyle}
                  onChange={(e) => setBirthDay(e.target.value)}
                />
              </Col>
              <Col style={input}>
                <h4>Hobies :</h4>
                <input
                  style={inputStyle}
                  placeholder="your hobie"
                  onChange={(e) => setHobies(e.target.value)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <p>
            Hello! My name is ({userName}) , I was born in ({birthDay}) , i like
            to ({hobies}) , and im a ({gender})
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Profile;

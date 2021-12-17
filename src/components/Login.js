import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../components/Login.css";
import { AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { login } from "../redux/userRegister/registerSlice";

function Login() {
  const input = {
    padding: "10px",
    marginTop: "15px",
    width: "400px",
    borderRadius: "4px",
    border: "1px solid gray",
  };
  const inputpass = {
    padding: "10px",
    marginLeft: "30px",
    marginTop: "15px",
    width: "360px",
    borderRadius: " 4px 0 0 4px",
    border: "1px solid gray",
  };

  const btn = {
    padding: "10px",
    marginTop: "30px",
    width: "400px",
    borderRadius: "4px",
  };
  const [passType, setPassType] = useState("password");
  const [show, setShow] = useState(true);
  const handleClickPass = (event) => {
    event.preventDefault();
    show === false ? setShow(true) : setShow(false);
    show === false ? setPassType("password") : setPassType("text");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <div className="page1">
      <Container className="login-page">
        <Row>
          <Col sm={7} className="des-sec">
            <h1 className="fb-title">Facebook</h1>
            <h4>
              Connect with friends and the world <br /> around you on Facebook.
            </h4>
          </Col>
          <Col sm={5}>
            <div className="login-sec" onSubmit={(e) => handleSubmit(e)}>
              <form>
                <input
                  value={email}
                  style={input}
                  placeholder="Username"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div style={{ display: "flex", position: "relative" }}>
                  <input
                    value={password}
                    style={inputpass}
                    placeholder="Password"
                    type={passType}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <button
                    style={{
                      padding: "10px",
                      marginTop: "15px",
                      width: "40px",
                      border: "1px solid gray",
                      borderRadius: " 0 4px 4px 0",
                      backgroundColor: "white",
                    }}
                    onClick={handleClickPass}
                  >
                    <AiFillEye />
                  </button>
                </div>
                <br />
                <Button variant="primary" style={btn} type="submit">
                  <h4>Log In</h4>
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;

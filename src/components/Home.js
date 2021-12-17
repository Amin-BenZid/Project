import React from "react";
import "./Home.css";
import NavBar from "./NavBar";
import Post from "./Post";
import PostInput from "./PostInput";
import Login from "./Login";
import PostList from "./PostList";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import LeftSec from "./LeftSec";
import RightSec from "./RightSec";
function Home() {
  var user = useSelector((state) => state.register.userLogin.loggedIn);
  return (
    <div className="home">
      {user ? (
        <Container fluid>
          <Row>
            <NavBar />
            <Col sm={2} style={{ marginTop: "20px" }}>
              <LeftSec />
            </Col>
            <Col style={{ overflow: "auto", height: "660px" }}>
              <PostInput />
              <PostList />
            </Col>
            <Col sm={2}>
              <RightSec />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid>
          <Row>
            <Login />
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Home;

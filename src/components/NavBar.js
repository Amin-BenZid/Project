import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { RiFacebookCircleFill } from "react-icons/ri";
import { ImUser } from "react-icons/im";

function NavBar() {
  return (
    <div
      style={{ height: "60px", backgroundColor: "#3B3B3B", display: "flex" }}
    >
      <Container fluid>
        <Row style={{ marginTop: "9px" }}>
          <Col sm={10}>
            <Link to="/">
              <RiFacebookCircleFill size={45} />
            </Link>
          </Col>
          <Col sm={1}></Col>
          <Col sm={1}>
            <Link to="/profile">
              <ImUser size={44} />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default NavBar;

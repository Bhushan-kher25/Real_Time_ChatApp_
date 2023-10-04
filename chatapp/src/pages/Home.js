import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css"

export default function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div className="box">
          <h1>Share the world with your Family and Friends</h1>
          <p>Chat And lets you connect with the World</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get Started
              <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>

      {/* column no 2 */}
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
}

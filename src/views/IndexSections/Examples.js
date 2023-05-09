
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
        <Row>
          <Col sm="6">
            <Link to="Material">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/234.jpeg")}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="Material"
              tag={Link}
            >
              Material
            </Button>
          </Col>
          <Col sm="6">
            <Link to="Project">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/123.jpeg")}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="Project"
              tag={Link}
            >
              Projects
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

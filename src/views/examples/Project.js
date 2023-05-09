
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
export default function Computer() {
   
  return (
    <>
    <IndexNavbar/>
      <div className="wrapper">
        <section className="section-coins">
        <Container className="text-center">
        <h1 align='center' icon='icon-tag'>PROJECT'S</h1>

        <Row>
          <Col sm="4">
           
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/pro1.png")}
              />
            <a href="https://github.com/NinadVyas/WeatherApp" 
                target="_blank">
            <Button
              color="info" >
              Github
            </Button>
            </a>
          </Col>
          <Col sm="4">
           
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/pro2.png")}
              />
            <a href="https://github.com/NinadVyas/NotesWeb" 
                target="_blank"  tag={Link} to="">
            <Button
              color="info" >
              Github
            </Button>
            </a>
          </Col>
          <Col sm="4">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/pro3.png")}
              />
            <a href="https://github.com/NinadVyas/quizweb" 
                target="_blank"  tag={Link} to="">
            <Button
              color="info" >
              Github
            </Button>
            </a>
          </Col>
        </Row>
      </Container>
       
        </section>
      </div>
    </>
  );
}


import React from "react";
import { Link } from "react-router-dom";
import {
Card,
  Container,
  Row,
  Col,
  CardImg
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
export default function Computer() {
  return (
    <>
    <IndexNavbar/>
      <div className="wrapper">
        <section className="section-coins">
          
        <Container>
        <h1 align='center' icon='icon-tag'>Computer Science Engineering</h1>
        <Row xs={1} md={4} className="g-4">
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          <CardImg src={require("assets/img/cse1.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
         
          <CardImg src={require("assets/img/cse2.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
         
          <CardImg src={require("assets/img/cse3.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
        
          <CardImg src={require("assets/img/cse4.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <br/>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          
          <CardImg src={require("assets/img/cse5.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          <CardImg src={require("assets/img/cse6.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          <CardImg src={require("assets/img/cse7.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          <CardImg src={require("assets/img/cse8.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
        </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

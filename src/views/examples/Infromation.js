
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
        <h1 align='center' icon='icon-tag'>Information Technology</h1>
        <Row xs={1} md={4} className="g-4">
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          <CardImg src={require("assets/img/it1.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
         
          <CardImg src={require("assets/img/it2.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
         
          <CardImg src={require("assets/img/it3.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
        
          <CardImg src={require("assets/img/it4.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <br/>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          
          <CardImg src={require("assets/img/it5.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          <CardImg src={require("assets/img/it6.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          <CardImg src={require("assets/img/it7.png")}
            style={{ width: '15rem',height: '12rem' }} />
                </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem',height: '12rem' }} tag={Link} to="/Sem4">
          <CardImg src={require("assets/img/it8.png")}
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

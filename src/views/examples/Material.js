
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  Progress
} from "reactstrap";

// core components
import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
    <IndexNavbar/>
      <div className="wrapper">
        <section className="section-coins">

          <Container>
            <Row>
              <Col md="6">
                <hr className="line-info" />
                <h1>
                  Choose Your Branch & Subject 
                  <span className="text-info"> Get The Best Material's</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ce.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                  
                  </CardBody>
                  <CardFooter className="text-center">
 
                    <Button className="btn-simple" color="primary" target="_blank"
                tag={Link} to="/Computer" >
                      Computer Engineering
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/cse.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success" target="_blank"
                tag={Link} to="/Science">
                      Computer Science & Engineering
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/it.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <hr className="line-info" />
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info" target="_blank"
                tag={Link} to="/Information">
                      Information Technology
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}


import React,{ useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { toast } from 'react-toastify';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
export default function RegisterPage() {
  const mystyle = {
    
    color: "#ba54f5",
    marginBottom : '0px',
    marginLeft: 'auto', 
    marginRight: 'auto',
    textTransform : 'capitalize',
    fontSize : '50px',
    border: '1px  ', 
    borderRadious:'',
    boxShadow:''
  };
  const mystyle1 = {
    alignItems: 'center',
    justifyContent: 'center',
      };
  const mystyle2 = {
    backdropFilter: 'blur(1px)' ,
    opacity:'0.9',
    background:'',
    boxShadow:'rgba(151, 65, 252, 0.2) 0 15px 30px -5px',
    // border:'1px solid ',
    borderRadious:'50px',

  };
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth,email,password)
      toast.success('Successfuly Join!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      console.log(user)
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          {/* <div className="page-header-image" /> */}
          <div className="content">
            <Container>
            <Col className="offset-lg-0 offset-md-3" lg="5" md="6">

            <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-6"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  </Col>
              <Row style={mystyle1}>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                 
                  <Card style={mystyle2} className="card-register">
                    <CardHeader>
                      <CardTitle align='center'style={mystyle} >Community</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                      <Label for="exampleEmail">Email</Label>
                        <InputGroup >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="example@gmail.com"
                            type="email"
                            onChange={(event) => {
                              setEmail(event.target.value);
                            }}
                          />
                        </InputGroup>
                        <Label for="exampleEmail">Password</Label>
                        <InputGroup
                         
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                          />
                        </InputGroup>
                        <FormGroup check className="text-left">
                          <Label check>
                            <Input type="checkbox" />
                            <span className="form-check-sign" />I agree to the{" "}
                            <a
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              terms and conditions
                            </a>
                            .
                          </Label>
                        </FormGroup>
                      </Form>
                    </CardBody>
                    <CardFooter align='center'>
                      <Button   onClick={register} className="btn-round" color="primary" size="lg">
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div  />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

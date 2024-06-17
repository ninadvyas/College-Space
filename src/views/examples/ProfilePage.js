import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PerfectScrollbar from "perfect-scrollbar";
import {
  Container,
  Row,
  Col,
  Progress
} from "reactstrap";

let ps = null;
export default function ProfilePage() {
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
          <IndexNavbar/>
        <div  style={{ marginTop : '80px'}}>
          <img
            alt="dots"
            className="dots"
            src={require("assets/img/dots.png")}/>
          <img
            alt="dots"
            className="path"/>
            <Container className="align-items-center">
            <Row align='center' >
              <Col lg="18">
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div  className="icon icon-primary">
                        <i  className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Scope</h4>
                      <hr className="line-primary" />
                      <p>
                       To able to give all types of good materials 
                       for the study purpose and project purpose.
                      </p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Purpose</h4>
                      <hr className="line-warning" />
                      <p>
                      We want to make this space easily accessible for students
                      and provide good materials for Learners.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Future Scope</h4>
                      <hr className="line-success" />
                      <p>
                       We'll make this better learning experience 
                       for everyone who wants to learn something in 
                       CS.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* Progress */}
            
        <div className="progress-container progress-primary">
          <span className="progress-badge">CE</span>
          <Progress max="100" value="100" barClassName="progress-bar-primary">
            <span className="progress-value">100%</span>
          </Progress>
        </div>
        <div className="progress-container progress-success">
          <span className="progress-badge">CSE</span>
          <Progress max="100" value="100" barClassName="progress-bar-success">
            <span className="progress-value">100%</span>
          </Progress>
        </div>
        <div className="progress-container progress-info">
          <span className="progress-badge">IT</span>
          <Progress max="100" value="100" barClassName="progress-bar-info">
            <span className="progress-value">100%</span>
          </Progress>
        </div>
            {/* profile cards */}
            <Row style={{ marginTop : '80px'}} className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
              <div style={{backgroundColor: 'transperent',
                borderRadius: '5px',
                boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
                color: '#B3B8CD',
                paddingTop: '30px',
                width: '300px',
                height:'425px',
                maxWidth: '100%',
                textAlign: 'center'}} 
              >
              <img style={{ border: '1px solid #03BFCB',
                maxWidth:'55%',
                borderRadius: '50%',
                padding: '7px'}} 
                src={require("assets/img/ninad.png")} />
              <h3 style={{margin: '10px 0'}}>Ninad Vyas</h3>
              <h6 style={{  margin: '5px 0',
                 textTransform: 'uppercase'}}>India</h6>
              <p style={{ fontSize: '14px',
                lineHeight: '21px'}}>User interface designer and <br/> front-end developer</p>
              <div class="buttons">
              <div>
                  <a href='https://www.facebook.com/Ninad.Vyas.87/'> <i style={{ paddingLeft: '0px',fontSize: '20px',marginBottom: '20px',cursor: 'pointer',
                  transition: '.5s',color:'white'}} class="fab fa-facebook-f"></i>
                  </a>
                  <a href='https://www.instagram.com/ninaddv7/'> <i style={{ paddingLeft: '20px',fontSize: '20px',marginBottom: '20px',cursor: 'pointer',
                  transition: '.5s',color:'white'}} class="fab fa-instagram"></i>
                  </a>
                  <a href='https://www.youtube.com/channel/UC-GFeuKUUYdVEqrjMJtItDQ'>   <i style={{ paddingLeft: '20px',fontSize: '20px',marginBottom: '20px',cursor: 'pointer',
                  transition: '.5s',color:'white'}} class="fab fa-youtube"></i>
                  </a>
                  <a href='https://github.com/NinadVyas'><i style={{ paddingLeft: '20px',fontSize: '20px',marginBottom: '20px',cursor: 'pointer',
                  transition: '.5s',color:'white'}} class="fab fa-github"></i>
                  </a>
                </div>
                <a href="mailto:ninadvyas07@gmail.com">
                <button style={{ backgroundColor: '#03BFCB',
                    border: '1px solid #03BFCB',
                    borderRadius: '3px',
                    color:' #231E39',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '500',
                    padding: '10px 25px'}}>
                  Message
                </button>
                </a>
              </div>
            </div>
                  </Col>
                  <Col lg="5">
            
                  </Col>
                  <Col lg="3">
              <div style={{backgroundColor: 'transperent',
                borderRadius: '5px',
                boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
                color: '#B3B8CD',
                paddingTop: '30px',
                width: '300px',
                height:'425px',
                maxWidth: '100%',
                textAlign: 'center'}} 
              >
              <img style={{ border: '1px solid #03BFCB',
                maxWidth:'55%',
                borderRadius: '50%',
                padding: '7px'}} 
                src={require("assets/img/jyot1.jpg")} />
              <h3 style={{margin: '10px 0'}}>Jyot Dhamelia</h3>
              <h6 style={{  margin: '5px 0',
                 textTransform: 'uppercase'}}>India</h6>
              <p style={{ fontSize: '14px',
                lineHeight: '21px'}}>User interface designer and <br/> front-end developer</p>
              <div class="buttons">
              <div align='center'>
              <a href='https://www.facebook.com/jyot.dhameliya.3?mibextid=ZbWKwL'> <i style={{ paddingLeft: '0px',fontSize: '20px',marginBottom: '20px',cursor: 'pointer',
                  transition: '.5s',color:'white'}} class="fab fa-facebook-f"></i>
                  </a>
                  <a href='https://instagram.com/jyot_dhamelia_111?igshid=ZDdkNTZiNTM='> <i style={{ paddingLeft: '20px',fontSize: '20px',marginBottom: '20px',cursor: 'pointer',
                  transition: '.5s',color:'white'}} class="fab fa-instagram"></i>
                  </a>
                  <a href='https://youtube.com/@JYOTYT111'>   <i style={{ paddingLeft: '20px',fontSize: '20px',marginBottom: '20px',cursor: 'pointer',
                  transition: '.5s',color:'white'}} class="fab fa-youtube"></i>
                  </a>
                  <a href='https://github.com/NinadVyas'><i style={{ paddingLeft: '20px',fontSize: '20px',marginBottom: '20px',cursor: 'pointer',
                  transition: '.5s',color:'white'}} class="fab fa-github"></i>
                  </a>
                </div>
                <a href="mailto:jyotdhamelia@gmail.com">
                <button style={{ backgroundColor: '#03BFCB',
                    border: '1px solid #03BFCB',
                    borderRadius: '3px',
                    color:' #231E39',
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: '500',
                    padding: '10px 25px'}}>
                  Message
                </button>
                </a>
              </div>
            </div>
                  </Col>
                </Row>
              </Col>
            </Row>
                
          </Container>
        </div>
        <div className="section">
        </div>
    </>
  );
}

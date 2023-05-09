import React from "react";
import "./Sem4.css";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,  
  Button,
  Col,
  Table,
} from "reactstrap";

// core components
const dsa18_url="dsa-18.pdf";
const dsa1819_url="dsa-18-19.pdf";
const dsa19_url="dsa-19.pdf";
const dsa191_url="dsa-19-1.pdf";
const dsa192_url="dsa-2019.pdf";
const dsa1920_url="dsa-19-20.pdf";
const dbms18_url="DBMS-18.pdf";
const dbms181_url="DBMS-18-1.pdf";
const dbms182_url="DBMS-18-2.pdf";
const dbms19_url="DBMS-19.pdf";
const dbms1920_url="DBMS-19-20.pdf";
const dbms2021_url="DBMS-20-21.pdf";
const mpco1415_url="MPCO-14-15.pdf";
const mpco1516_url="MPCO-15-16.pdf";
const mpco2021_url="MPCO-20-21.pdf";
const mpcounit22_url="MPCO-22.pdf";
const mpco22_url="MPCOUNIT22.pdf";
const dbmspracticalfile="DBMS_Practicalfile";
const dsapracticalfile="DSA_Practicalfile";
const mpcopracticalfile="MPCO_Practicalfile";
const pythonpracticalfile="Python_Practicalfile";
const dsanotes="DSANOTES.pdf";
const dbmsnotes="DBMSNOTES.pdf";
const mpconotes="COANOTES.pdf";
const pythonnotes="PYTHONNOTES.pdf";

const unit1mpco_url="unit1mpco.pdf";
const unit2mpco_url="unit2mpco.pdf";
const unit3mpco_url="unit3mpco.pdf";
const unit4mpco_url="unit4mpco.pdf";
const unit6mpco_url="unit6mpco.pdf";
const unit7mpco_url="unit7mpco.pdf";
const unit8mpco_url="unit8mpco.pdf";
const unit9mpco_url="unit9mpco.pdf";
const unit10mpco_url="unit10mpco.pdf";
const unit1dsa_url="unit1dsa.pdf";
const unit2dsa_url="unit2dsa.pdf";
const unit1dbms_url="unit1dbms.pdf";
const unit2dbms_url="unit2dbms.pdf";
const unit3dbms_url="unit3dbms.pdf";
const unit4dbms_url="unit4dbms.pdf";
const unit5dbms_url="unit5dbms.pdf";
const unit6dbms_url="unit6dbms.pdf";
const unit7dbms_url="unit7dbms.pdf";
const unit8dbms_url="unit8dbms.pdf";
const unit9dbms_url="unit9dbms.pdf";
const unit10dbms_url="unit10dbms.pdf";
const mpcopractical_url = "mpco_practical.pdf";
const pythonpractical_url = "python_practical.pdf";
const mpcosyllabus_url = "mpco_syllabus.pdf";
const syllabus_url = "Dsa_syllabus.pdf";
const dbmspractical_url = "dbms_practical.pdf";
const practical_url = "Dsa_practical.pdf";
const dsa_ch4_5_url = "Dsa_practical.pdf";
const dbmssyllabus_url="dbms_syllabus.pdf";
function Docs() {
  const [iconPills, setIconPills] = React.useState("1");
  const filedownload = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download",filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove(); 
  }
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="12" xl="18">
              <p className="category">Semester-4</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        Data Structure
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Database Managment
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Microprocessor and Computer 
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Python Programming
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    {/* //iconPills1 */}
                    <TabPane tabId="iconPills1">
                    <Button color="info" onClick={() =>{filedownload(syllabus_url);} }>Syllabus</Button>
                    <Button color="info" onClick={() =>{filedownload(practical_url);} }>Practical-List</Button>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Chapter's</th>
                                <th>Reference Books</th>
                                <th className="text-center">Papers</th>
                                <th className="text-right">ExtraNotes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td onClick={() =>{filedownload(unit1dsa_url);} }>Ch-1</td>
                                <td onClick={() =>{filedownload(dsapracticalfile);} }>Practical-1</td>
                                <td className="text-center" onClick={() =>{filedownload(dsa18_url);} }>2018</td>
                                <td className="text-right">
                                <Button onClick={() =>{filedownload(dsanotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td  onClick={() =>{filedownload(unit2dsa_url);} }>Ch-2</td>
                                <td onClick={() =>{filedownload(dsapracticalfile);} }>Practical-2</td>
                                <td className="text-center" onClick={() =>{filedownload(dsa1819_url);} }>2018-19</td>
                                <td className="text-right">
                                <Button onClick={() =>{filedownload(dsanotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>Ch-3</td>
                                <td onClick={() =>{filedownload(dsapracticalfile);} }>Practical-3</td>
                                <td className="text-center" onClick={() =>{filedownload(dsa19_url);} }>2019</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dsanotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(dsa_ch4_5_url);} }>Ch-4</td>
                                <td onClick={() =>{filedownload(dsapracticalfile);} }>Practical-4</td>
                                <td className="text-center" onClick={() =>{filedownload(dsa191_url);} }>2019/1</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dsanotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(dsa_ch4_5_url);} }>Ch-5</td>
                                <td onClick={() =>{filedownload(dsapracticalfile);} }> Practical-5</td>
                                <td className="text-center" onClick={() =>{filedownload(dsa192_url);} }>2019/2</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dsanotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>Ch-6</td>
                                <td onClick={() =>{filedownload(dsapracticalfile);} }> Practical-6</td>
                                <td className="text-center" onClick={() =>{filedownload(dsa1920_url);} }>2019-20</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dsanotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                        </tbody>
                      </Table>
                    </TabPane>
                    {/* //iconPills2 */}
                    <TabPane tabId="iconPills2">
                    <Button color="primary" onClick={() =>{filedownload(dbmssyllabus_url);} }>Syllabus</Button>
                    <Button color="primary" onClick={() =>{filedownload(dbmspractical_url);} }>Practical-List</Button>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Chapter's</th>
                                <th>Practical's</th>
                                <th className="text-center">Papers</th>
                                <th className="text-right">ExtraNotes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td onClick={() =>{filedownload(unit1dbms_url);} }>Ch-1</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-1</td>
                                <td className="text-center" onClick={() =>{filedownload(dbms18_url);} }>2018</td>
                                <td className="text-right">
                                <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td onClick={() =>{filedownload(unit2dbms_url);} }>Ch-2</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-2</td>
                                <td className="text-center" onClick={() =>{filedownload(dbms181_url);} }>2018/1</td>
                                <td className="text-right">
                                <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit3dbms_url);} }>Ch-3</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-3</td>
                                <td className="text-center" onClick={() =>{filedownload(dbms182_url);} }>2018/2</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit4dbms_url);} }>Ch-4</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-4</td>
                                <td className="text-center" onClick={() =>{filedownload(dbms19_url);} }>2019</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit5dbms_url);} }>Ch-5</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-5</td>
                                <td className="text-center" onClick={() =>{filedownload(dbms1920_url);} }>2019-20</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit6dbms_url);} }>Ch-6</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-6</td>
                                <td className="text-center" onClick={() =>{filedownload(dbms2021_url);} }>2020-21</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit7dbms_url);} }>Ch-7</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-7</td>
                                <td className="text-center"></td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit8dbms_url);} }>Ch-8</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-8</td>
                                <td className="text-center"></td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit9dbms_url);} }>Ch-9</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-8</td>
                                <td className="text-center"></td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit10dbms_url);} }>Ch-10</td>
                                <td onClick={() =>{filedownload(dbmspracticalfile);} }>Practical-10</td>
                                <td className="text-center"></td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(dbmsnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                        </tbody>
                      </Table>
                    </TabPane>
                    {/* iconPills3 */}
                    <TabPane tabId="iconPills3">
                    <Button color="success" onClick={() =>{filedownload(mpcosyllabus_url);} }>Syllabus</Button>
                    <Button color="success" onClick={() =>{filedownload(mpcopractical_url);} }>Practical-List</Button>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Chapter's</th>
                                <th>Practical's</th>
                                <th className="text-center">Papers</th>
                                <th className="text-right">ExtraNotes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td onClick={() =>{filedownload(unit1mpco_url);} }>Ch-1</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-1</td>
                                <td className="text-center" onClick={() =>{filedownload(mpco1415_url);} }>2014-15</td>
                                <td className="text-right">
                                <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td onClick={() =>{filedownload(unit2mpco_url);} }>Ch-2</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-2</td>
                                <td className="text-center" onClick={() =>{filedownload(mpco1516_url);} }>2015-16</td>
                                <td className="text-right">
                                <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit3mpco_url);} }>Ch-3</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-3</td>
                                <td className="text-center" onClick={() =>{filedownload(mpco2021_url);} }>2020-21</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit4mpco_url);} }>Ch-4</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-4</td>
                                <td className="text-center" onClick={() =>{filedownload(mpcounit22_url);} }>2022/Internal</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td>Ch-5</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-5</td>
                                <td className="text-center" onClick={() =>{filedownload(mpco22_url);} }>2022</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit6mpco_url);} }>Ch-6</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-6</td>
                                <td className="text-center"></td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit7mpco_url);} }>Ch-7</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-7</td>
                                <td className="text-center"></td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit8mpco_url);} }>Ch-8</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-8</td>
                                <td className="text-center"></td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit9mpco_url);} }>Ch-9</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-9</td>
                                <td className="text-center"></td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(unit10mpco_url);} }>Ch-10</td>
                                <td onClick={() =>{filedownload(mpcopracticalfile);} }>Practical-10</td>
                                <td className="text-center"></td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(mpconotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                        </tbody>
                      </Table>
                    </TabPane>
                    {/* //iconPills4 */}
                    <TabPane tabId="iconPills4">
                    
                    <Button color="danger" onClick={() =>{filedownload(pythonpractical_url);} }>Practical-List</Button>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Practical's</th>
                                <th className="text-right">ExtraNotes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">1</td>
                                <td onClick={() =>{filedownload(pythonpracticalfile);} }>Practical-1</td>
                                <td className="text-right">
                                <Button onClick={() =>{filedownload(pythonnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">2</td>
                                <td onClick={() =>{filedownload(pythonpracticalfile);} }>Practical-2</td>
                                <td className="text-right">
                                <Button onClick={() =>{filedownload(pythonnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(pythonpracticalfile);} }>Practical-3</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(pythonnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(pythonpracticalfile);} }>Practical-4</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(pythonnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(pythonpracticalfile);} }>Practical-5</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(pythonnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">3</td>
                                <td onClick={() =>{filedownload(pythonpracticalfile);} }>Practical-6</td>
                                <td className="text-right">
                                    <Button onClick={() =>{filedownload(pythonnotes);} } className="btn-icon btn-simple" color="info" size="sm">
                                        <i className="fa fa-user"></i>
                                    </Button>{` `}
                                   
                                </td>
                            </tr>
                        </tbody>
                      </Table>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
           
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Docs;

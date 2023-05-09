
import React from "react";
import { Container } from "reactstrap";

export default function PageHeader() {
  const size1 ={
    fontSize:'50rem'
  }
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo" style={{size1}}>COLLEGE•SPACE</h1>
          <h3 className="d-none d-sm-block">
            Source Of All Material
          </h3>
        </div>
      </Container>
    </div>
  );
}

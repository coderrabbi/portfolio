import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Progress from "../Progress/Progress";
import Repeat from "../Repeat/Repeat";
import "./Pro.css";

const Pro = () => {
  return (
    <Container className="p-3">
      <Row>
        <Col lg={12} md={12}>
          <Repeat title={"My Skils"}></Repeat>
          <div className="pro__container">
            <Progress done="90" skill="HTML" />
            <Progress done="80" skill="CSS" />
            <Progress done="70" skill="JAVASCRIPT" />
            <Progress done="70" skill="REACT JS" />
            <Progress done="90" skill="WORDPRESS" />
            <Progress done="70" skill="SEO" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Pro;

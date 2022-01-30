import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
//style
import "./style.css";

function Header() {
  const ipn = "../../assets/images/Logo_IPN.png";
  const escom = "../../assets/images/Logo_ESCOM.png";
  return (
    <Container fluid className="header">
      <Row>
        <Col xs={{ span: 2, order: 1 }} className="center-flex-content">
          <Image className="header-image ipn-img" src={ipn} alt="Logo IPN" />
        </Col>
        <Col xs={{ span: 2, order: 3 }} className="center-flex-content">
          <Image className="escom-img" src={escom} alt="Logo ESCOM" />
        </Col>
        <Col
          xs={{ span: 8, order: 2 }}
          className="center-flex-content header-title-container"
        >
          <div>Polilibro Académico de Finanzas Empresariales</div>
        </Col>
      </Row>
    </Container>
  );
} //Header

export default Header;

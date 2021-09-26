import React from "react";
import { Row, Col, Container, Table, Image } from "react-bootstrap";

function Header() {
  const ipn = "../../assets/images/Logo_IPN.png";
  const escom = "../../assets/images/Logo_ESCOM.png";
  return (
    <Container fluid className="header">
      <Row>
        <Col sm={3}>
          <Image className="responsiveLogo set-left" src={ipn} alt="Logo IPN" />
        </Col>
        <Col className="header-title-container">
          <div>Polilibro de Finanzas Empresariales</div>
        </Col>
        <Col sm={3}>
          <Image
            className="responsiveLogo set-right"
            src={escom}
            alt="Logo ESCOM"
          />
        </Col>
      </Row>
    </Container>
  );
} //Header

export default Header;

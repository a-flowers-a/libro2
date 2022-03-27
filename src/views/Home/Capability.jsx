import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";

function Capability() {
  const capabilityImg = "../../../../assets/images/capability.png";
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <HomeMenu />
        <Container className="padding-md">
          <Row>
            <ToBookButton />
          </Row>
          <Row className="m-v-space ">
            <Col>
              <h2>Unidad de competencia</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={3}>
              <Image className="full-img" src={capabilityImg} alt="Path" />
            </Col>
            <Col sm={8}>
              <div className="full-card justify-text">
                <p>
                  Reconoce el papel de las finanzas a partir del contexto
                  empresarial.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Capability

export default Capability;

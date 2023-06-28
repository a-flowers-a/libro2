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
              <h2>Propósito de la unidad de aprendizaje</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={3}>
              <Image className="full-img" src={capabilityImg} alt="Path" />
            </Col>
            <Col sm={8}>
              <div className="full-card justify-text">
                <p>
                  Utiliza las herramientas matemáticas y financieras a partir de
                  la información generada en la empresa.
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

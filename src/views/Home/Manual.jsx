import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";

function Manual() {
  const manualImg = "../../../../assets/images/manual.svg";
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
              <h2>Manual de usuario</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image className="full-img" src={manualImg} alt="Map" />
            </Col>
          </Row>
          <Row className="justify-content-center"></Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Manual

export default Manual;

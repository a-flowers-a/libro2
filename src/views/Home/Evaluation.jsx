import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";

function Evaluation() {
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
              <h2>Evaluación de los aprendizajes</h2>
            </Col>
          </Row>

          <Row className="justify-content-center"></Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Evaluation

export default Evaluation;

import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Container } from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";

function IntroduccionIV() {
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <Row>
            <Col>
              <h2>Introducción</h2>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col m={9} className="justify-text">
              <p>
                En esta unidad temática te familiarizarás con algunas
                operaciones que tienen que ver con: el cálculo de la cantidad de
                dinero que necesitas hoy para tener una cantidad específica en
                una fecha posterior, el cálculo del valor de los ahorros en
                fechas futuras, la amortización de préstamos, la planeación
                financiera, y el presupuesto maestro.
              </p>
              <p>
                Comprender cómo se realizan las operaciones antes mencionadas te
                facilitará la toma de decisiones financieras.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
}
export default IntroduccionIV;

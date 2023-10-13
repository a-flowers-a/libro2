import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Container } from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";

function CierreIV() {
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <Row>
            <Col>
              <h2>Cierre de la unidad temática</h2>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col m={9}>
              <p className="justify-text">
                Tal y como lo estudiaste en esta unidad temática, el presupuesto
                maestro se conforma de un conjunto de presupuestos de operación
                y financieros a partir de los cuales se construyen los estados
                financieros proforma. Uno de dichos presupuestos es el
                presupuesto de flujo de efectivo, con el que es posible calcular
                los flujos netos de efectivo (FNE) que son la base para evaluar
                proyectos de inversión, tema que estudiarás en la siguiente
                unidad temática.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col className="center-text">
              <h5 className="navy">
                Te invitamos a continuar con el estudio de las siguientes
                unidades temáticas de este polilibro.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
}
export default CierreIV;

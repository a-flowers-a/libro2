import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Container } from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";

function CierreIII() {
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
                <div className="inline bold purple-text">¡Enhorabuena!</div> Has
                terminado la unidad temática 3. En este momento ya tienes un
                panorama más claro de cómo se realiza el análisis de la
                información contenida en los estados financieros y comprendes la
                importancia que tiene dicho análisis para la toma de decisiones
                y desde luego para la planeación financiera. La planeación
                financiera y los elementos de matemáticas financieras son temas
                que estudiarás en la siguiente unidad temática.
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
export default CierreIII;

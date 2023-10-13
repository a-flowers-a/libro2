import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Container } from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";

function IntroduccionIII() {
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
                En la unidad 2 estudiaste qué es la información financiera, cómo
                se genera y en cuáles documentos financieros se muestra. En esta
                unidad temática 3, aprenderás no solo a relacionar las
                diferentes partidas (cuentas) de los estados financieros, sino a
                interpretar sus resultados; es decir, aprenderás a analizar la
                información financiera con base en métodos de análisis
                verticales y horizontales.
              </p>
              <p>
                Vale la pena resaltar que el proceso más importante de un
                negocio es la toma de decisiones, y éstas se basan en gran
                medida en la información obtenida del análisis financiero.
              </p>
              <p>
                El análisis financiero es una herramienta para medir el
                desempeño de la administración (reflejado principalmente en las
                utilidades obtenidas), permite también identificar algunos
                problemas existentes (red flags), por lo que es importante que
                se realice en forma sistemática y periódica. Adicionalmente, las
                decisiones sobre préstamos e inversión también se basan en el
                análisis financiero.
              </p>
              <p>
                En definitiva, el análisis financiero permite trazar estrategias
                con la finalidad de maximizar los recursos monetarios de la
                empresa.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
}
export default IntroduccionIII;

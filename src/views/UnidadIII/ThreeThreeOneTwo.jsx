import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeThreeOneTwo = () => {
  // const imgVerticales = "../../assets/images/verticales.png";
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <Row>
            <Col>
              <h2>3.3.1.2 Punto de equilibrio con un producto con utilidad</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                También podemos calcular el punto de equilibrio con utilidad.
                Continuando con nuestro ejemplo (venta de hamburguesas
                sencillas) y considerando que deseamos una utilidad de $40,000
                mensuales, entonces el punto de equilibrio se calcularía así:
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeOneTwo;

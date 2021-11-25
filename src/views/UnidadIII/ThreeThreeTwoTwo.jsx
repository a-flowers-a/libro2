import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeThreeTwoTwo = () => {
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
              <h2>
                3.3.2.2 punto de equilibrio para una mezcla de productos con
                utilidad
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                También podemos calcular el punto de equilibrio, para una mezcla
                de productos, con utilidad. Continuando con nuestro ejemplo y
                considerando que la empresa desea obtener una utilidad de 45,000
                pesos mensuales, entonces el punto de equilibrio se calcula así:
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeTwoTwo;

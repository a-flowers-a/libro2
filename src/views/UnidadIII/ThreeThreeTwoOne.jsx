import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeThreeTwoOne = () => {
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
                3.3.2.1 punto de equilibrio para una mezcla de productos sin
                utilidad
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Continuando con el ejemplo de las hamburguesas, supongamos que
                ahora venderemos hamburguesas sencillas y hamburguesas
                hawaianas. Del total de las hamburguesas vendidas al mes el 20%
                son sencillas y el 80% son hawaiana con queso
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeTwoOne;

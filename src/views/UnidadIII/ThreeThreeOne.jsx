import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeThreeOne = () => {
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
                3.3.1 Modelo matemático del punto de equilibrio con un producto
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Lo más común es encontrar empresas que produzcan y vendan más de
                un tipo de productos; sin embargo, hay empresas que solo venden
                un tipo de artículo o prestan un servicio en particular. Cuando
                se trata de este último caso, podemos calcular el punto de
                equilibrio sin utilidad y con utilidad.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeOne;

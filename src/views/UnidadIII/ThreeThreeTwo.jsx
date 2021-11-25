import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeThreeTwo = () => {
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
                3.3.2 Modelo matemático del punto de equilibrio con
                multiproductos (mezcla de dos o más productos)
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Tal como se mencionó anteriormente, lo más común es encontrar
                empresas que venden más de dos tipos de productos, si ese es el
                caso, podemos calcular el punto de equilibrio de la mezcla sin y
                con utilidad.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeTwo;

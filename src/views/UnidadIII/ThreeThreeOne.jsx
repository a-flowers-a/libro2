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
                Cuando una empresa fabrica y/o vende un solo tipo de producto o
                presta un servicio en particular, es muy sencillo calcular su
                punto de equilibrio.
              </p>
              <p>
                Recordemos que el punto de equilibrio nos indica la cantidad que
                hay que producir y vender para no ganar y no perder, en este
                caso estaríamos hablando del punto de equilibrio sin utilidad;
                sin embargo, las empresas tienen objetivos en cuanto a las
                utilidades que desean obtener y para saber la cantidad que
                tendrían que producir y/o vender para alcanzar dicha utilidad
                podrían utilizar la fórmula del punto de equilibrio con
                utilidad.
              </p>
              <p>
                Los subtemas punto de equilibrio de un producto sin utilidad y
                punto de equilibrio de un producto con utilidad los abordarás a
                continuación.
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

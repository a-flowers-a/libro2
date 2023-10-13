import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeTwoTwo = () => {
  const img322 = "../../assets/images/322.png";
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
              <h2>3.2.2 Análisis horizontal</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Los métodos de análisis financiero horizontal son aquellos que
                comparan valores de estados financieros de una entidad económica
                que corresponden a varios periodos contables.
              </p>
              <p>
                Elizondo (1999), considera que los principales métodos de
                análisis financiero horizontal son: método de aumentos y
                disminuciones, método de tendencias y método de control
                presupuestal <b>(Figura 3.9)</b>.
              </p>
            </Col>
          </Row>
          <Row className="img-source center-text m-v-space">
            <Col>
              <b>Figura Figura 3.9 Métodos horizontales</b>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={5}>
              <Image
                src={img322}
                className="full-img"
                alt="Métodos horizontales"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoTwo;

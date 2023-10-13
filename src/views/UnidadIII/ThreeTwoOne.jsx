import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeTwoOne = () => {
  const imgVerticales = "../../assets/images/verticales.png";
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
              <h2>3.2.1. Análisis vertical</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Los métodos de análisis financiero vertical se aplican a un
                período contable; se clasifican en reducción a porcientos,
                razones simples y razones estándar, tal como se aprecia en la
                figura 3.3.
              </p>
            </Col>
          </Row>
          <Row className="img-source center-text m-v-space">
            <Col>Figura 3.3 Métodos verticales para el análisis financiero</Col>
          </Row>
          <Row>
            <Col>
              <Image
                className="full-img"
                src={imgVerticales}
                alt="Métodos verticales para el análisis financiero"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoOne;

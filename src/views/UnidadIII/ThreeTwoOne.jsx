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
            <Col className="justify-text">
              <h2>3.2.1. Análisis vertical (razones financieras y Dupont)</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Los métodos verticales se aplican a <b>un período contable</b>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                className="full-img"
                src={imgVerticales}
                alt="Figura 1.1 La empresa"
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

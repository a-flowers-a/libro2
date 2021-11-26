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
                análisis financiero horizontal son:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={6}>
              <Image
                src={img322}
                className="full-img"
                alt="Figura 3.2.2 análisis horizontal"
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

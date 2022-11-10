import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeTwo = () => {
  const imgAnalisis = "../../assets/images/analisis.png";
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
              <h2>3.2. Métodos para el análisis financiero</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Los principales métodos para realizar el análisis financiero se
                muestran en la (Figura 3.2)
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                className="full-img"
                src={imgAnalisis}
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

export default ThreeTwo;

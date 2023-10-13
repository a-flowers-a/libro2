import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeTwoOneThree = () => {
  const metodoDupont = "../../assets/images/dupont.png";
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
              <h2>3.2.1.3 Método Dupont</h2>
            </Col>
          </Row>
          <Row className="img-source center-text m-v-space">
            <Col>
              <b>Figura 3.7 Método Dupont.</b>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={10}>
              <Image
                className="full-img"
                src={metodoDupont}
                alt="Método Dupont"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoOneThree;

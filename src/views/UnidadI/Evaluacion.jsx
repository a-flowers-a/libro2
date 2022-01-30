import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const Evaluacion1 = () => {
  const buildingImg = "../../assets/images/building.png";

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
              <h2>Evaluación</h2>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col md={6}>
              <h5>
                <i>Ups! esta página aún está en construcción</i>
              </h5>
              <Image
                className="full-img"
                src={buildingImg}
                alt="Página web en construcción"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default Evaluacion1;

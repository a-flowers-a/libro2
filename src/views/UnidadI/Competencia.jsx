import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const Competencia1 = () => {
  const ideaImg = "../../assets/images/idea.png";
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
              <h2>Unidad de competencia</h2>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col md={6}>
              Reconoce el papel de las finanzas a partir del contexto
              empresarial.
            </Col>
            <Col md={6}>
              <Image
                className="full-img"
                src={ideaImg}
                alt="Man holding laptop"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default Competencia1;

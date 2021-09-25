import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Image, Container } from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";

const OneOne = () => {
  const img11 = "../../assets/images/11.png";
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <Row>
            <Col>
              <Row>
                <Col>
                  <h2>1.1 La empresa </h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p className="justify-text">
                    Sin importar el lugar en donde te encuentres en este
                    momento, mira a tu alrededor y notarás la existencia de una
                    gran cantidad de satisfactores (bienes). Estos son
                    producidos y/o distribuidos por diferentes empresas.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Algunas definiciones de empresa son:</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ul>
                    <li>
                      Acción de emprender una cosa con un riesgo implícito
                      (Münch, 2017).
                    </li>
                    <li className="justify-text">
                      Unidad económica de producción dedicada a actividades
                      industriales, mercantiles o de prestación de servicios,
                      cuyo objetivo dependerá del sistema de organización
                      económica en que se desarrolle. En una economía de
                      mercado, el fin de la empresa consiste en la obtención del
                      máximo beneficio o lucro (Graue, 2009).
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Row>
                <Col>
                  <Image
                    className="full-img"
                    src={img11}
                    alt="Figura 1.1 La empresa"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default OneOne;

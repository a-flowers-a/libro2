import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const IntroduccionI = () => {
  const introImg = "../../assets/images/intro1.png";
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
              <h2>Introducción</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col md={8}>
              <p>
                Las empresas, al producir bienes y con estos satisfacer las
                necesidades del mercado, constituyen la columna vertebral de la
                economía. Una empresa antes de iniciar operaciones debe, entre
                otros trámites, constituirse jurídicamente y darse de alta ante
                el Servicio de Administración Tributaria (SAT) derivándose así,
                tanto derechos como obligaciones en función del régimen fiscal
                en el que se haya inscrito.
              </p>
              <p>
                En una economía de mercado el fin de la empresa es la obtención
                del máximo beneficio o lucro, que dependerá, entre otros
                factores, de la administración que se haga del dinero y de las
                decisiones que se tomen en relación a ¿cuánto gastar?, ¿en qué
                gastar?, ¿en qué invertir?, etc.; es decir, la obtención de
                utilidades dependerá en gran medida de la actividad financiera
                de la empresa.
              </p>
              <p>
                En esta unidad temática conocerás las diferentes formas de
                constitución jurídica en México; la función y objetivo de las
                finanzas empresariales; la relación que tienen las finanzas con
                otras disciplinas y los factores del micro y macro ambiente que
                impactan a las empresas y desde luego a sus finanzas.
              </p>
            </Col>
            <Col md={4}>
              <Image
                className="full-img"
                src={introImg}
                alt="Figura 1.1. La empresa"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default IntroduccionI;

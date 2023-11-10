import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const IntroduccionV = () => {
  // const imgVerticales = "../../assets/images/verticales.png";
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
            <Col>
              <p>
                Todas las personas en nuestra vida cotidiana tenemos múltiples
                necesidades que pueden satisfacerse con una gran variedad de
                bienes y servicios, estos antes de ser comercializados surgieron
                como una idea de proyecto de inversión. Ten en cuenta que,
                independientemente del área o campo de que se trate, siempre que
                haya necesidades por satisfacer o problemáticas por resolver,
                existirá la posibilidad de emprender proyectos de inversión.
                Todo proyecto de inversión requiere de investigación,
                documentación, análisis, y evaluación desde diferentes puntos de
                vista. En esta unidad temática aplicarás los métodos de
                evaluación financiera de proyectos y, con base en los criterios
                de decisión de cada uno de ellos, aprenderás a interpretar los
                resultados, lo que te permitirá seleccionar la mejor opción
                entre las alternativas evaluadas.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default IntroduccionV;

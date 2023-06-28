import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";

function Method() {
  const methodImg = "../../../../assets/images/method.png";

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <HomeMenu />
        <Container className="padding-md">
          <Row>
            <ToBookButton />
          </Row>
          <Row className="m-v-space ">
            <Col>
              <h2>Metodología</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={4}>
              <Image className="full-img" src={methodImg} alt="Path" />
            </Col>
          </Row>
          <Row className="justify-content-center ">
            <Col sm={11}>
              <div className="full-card justify-text">
                <p>
                  Con este Polilibro académico de la unidad de aprendizaje de
                  Finanzas empresariales, tendrás la posibilidad de fortalecer
                  el aprendizaje autónomo, el trabajo individual y el trabajo
                  colaborativo. Es importante mencionar que por cada 4.5 horas
                  de clases por semana, requerirás de 1.5 horas de trabajo
                  autónomo.
                </p>
                <p>
                  El propósito de esta unidad de aprendizaje es: utiliza las
                  herramientas matemáticas y financieras a partir de la
                  información generada en la empresa.
                </p>
                <p>
                  Para lograr dicho propósito abordaremos las siguientes
                  unidades temáticas:
                </p>
                <p>
                  <b>I.La empresa y su entorno</b>
                </p>
                <p>
                  Con el estudio de esta unidad temática reconocerás el papel
                  que tienen las finanzas a partir del contexto empresarial.
                </p>
                <p>
                  <b>
                    II. Importancia y utilización de la información financiera
                  </b>
                </p>
                <p>
                  Al estudiar esta unidad temática podrás construir estados
                  financieros básicos con base en las normas de información
                  financiera (NIF) vigentes.
                </p>
                <p>
                  <b>III. Análisis de la información financiera</b>
                </p>
                <p>
                  Al abordar esta unidad temática podrás analizar la información
                  de los estados financieros con base en los métodos de análisis
                  financiero.
                </p>
                <p>
                  <b>
                    IV. Elementos de matemáticas financieras y planeación
                    financiera
                  </b>
                </p>
                <p>
                  Al desarrollar esta unidad temática contarás con los elementos
                  necesarios que te permitirán construir estados financieros
                  proforma (estimados).
                </p>
                <p>
                  <b>V. Métodos de evaluación de proyectos de inversión</b>
                </p>
                <p>
                  En esta unidad temática aprenderás a aplicar los métodos de
                  evaluación de proyectos de inversión con base en las
                  herramientas de matemáticas financieras.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Method

export default Method;

import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";

function Welcome() {
  const bienvenida = "../../assets/images/bienvenida.png";

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <HomeMenu />
        <Container className="padding-md">
          <Row>
            <ToBookButton />
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  <h2>Bienvenida</h2>
                </Col>
              </Row>
              <Row className="m-v-space justify-content-center">
                <Col sm={11}>
                  <div className="full-card justify-text soft-blue-bg">
                    <Row>
                      <Col>
                        <p>
                          Estimados estudiantes de la unidad de aprendizaje de
                          Finanzas empresariales, perteneciente al segundo
                          semestre del programa académico de Ingeniería en
                          Inteligencia Artificial y al tercer semestre de los
                          programas académicos de Ingeniería en Sistemas
                          Computacionales y de Licenciatura en Ciencia de Datos,
                          que se imparten en diferentes campus del Instituto
                          Politécnico Nacional, reciban la más cordial de las
                          bienvenidas a este recurso didáctico digital (RDD):
                          Polilibro académico de la unidad de aprendizaje
                          Finanzas empresariales, que fue construido con el
                          propósito de facilitar los procesos de
                          enseñanza-aprendizaje y favorecer el aprendizaje
                          autónomo.
                        </p>
                        <p>
                          Esperamos que las siguientes semanas sean
                          enriquecedoras de experiencias de aprendizaje.
                        </p>
                        <p>¡Te deseamos el mayor de los éxitos!</p>
                      </Col>
                    </Row>
                    <Row className=" m-v-space justify-content-center">
                      <Col xs={10} md={8}>
                        <Image
                          src={bienvenida}
                          alt="Bienvenida"
                          className="full-img"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Welcome

export default Welcome;

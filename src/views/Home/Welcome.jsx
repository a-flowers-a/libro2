import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Container, Image, Row, Col } from "react-bootstrap";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";

function Welcome() {
  const welcomeImg = "../../assets/images/person.png";

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
                      <Col sm={8}>
                        <p>
                          Recibe la más cordial bienvenida a este recurso
                          didáctico digital (RDD) de la Unidad de Aprendizaje
                          (UA) de Administración de Proyectos que se imparte en
                          la Escuela Superior de Cómputo del Instituto
                          Politécnico Nacional. Este RDD fue construido con el
                          propósito de promover el aprendizaje autónomo, así
                          como de facilitar, enriquecer y fortalecer los
                          procesos de enseñanza-aprendizaje de la UA en cuestión
                          en la modalidad escolarizada.
                        </p>
                      </Col>
                      <Col sm={4}>
                        <Image
                          className="full-img"
                          src={welcomeImg}
                          alt="person"
                        />
                      </Col>

                      <p>
                        Esperamos que las próximas semanas sean enriquecedoras
                        de experiencias de aprendizaje, para lo cual es
                        indispensable tener en cuenta algunos elementos clave
                        tales como: el compromiso e interacción de los actores
                        (participantes y facilitadores del aprendizaje), la
                        conformación de un gran equipo de trabajo colaborativo y
                        la realización de las actividades de aprendizaje de
                        acuerdo con las especificaciones proporcionadas y en los
                        tiempos establecidos.
                      </p>
                      <p>
                        Nuestra intención es que disfrutes esta experiencia
                        educativa, ¡te deseamos el mayor de los éxitos!
                      </p>
                      <p>
                        Para cualquier duda o comentario, en relación a este
                        material, puedes contactarnos en:
                      </p>
                      <p>johernandezja@ipn.mx y jimenezg@ipn.mx</p>
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

import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Container, Image, Row, Col, Card, CardGroup } from "react-bootstrap";
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
                    <Row>
                      <CardGroup>
                        <Card>
                          <Card.Img variant="top" src={welcomeImg} />
                          <Card.Body>
                            <Card.Title>Josefina Hernández Jaime</Card.Title>
                            <Card.Text>
                              <p>
                                Maestra en Ciencias de la Administración por la
                                UPIICSA, del IPN.
                              </p>
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>johernandezja@ipn.mx</Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={welcomeImg} />
                          <Card.Body>
                            <Card.Title>Eduardo Rodríguez Flores</Card.Title>
                            <Card.Text>
                              <p>Maestro en administración por la UNAM.</p>
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>erodriguezf@ipn.mx</Card.Footer>
                        </Card>
                        <Card>
                          <Card.Img variant="top" src={welcomeImg} />
                          <Card.Body>
                            <Card.Title>Yasmin Ivette Jiménez Galán</Card.Title>
                            <Card.Text>
                              <p>
                                Doctora en educación por el Centro de Estudios
                                Superiores en Educación CESE
                              </p>
                              <p>
                                M. en C. con especialidad en Administración de
                                negocios por la ESCA Sto. Tomás.
                              </p>
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer>yjimenezg@ipn.mx</Card.Footer>
                        </Card>
                      </CardGroup>
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

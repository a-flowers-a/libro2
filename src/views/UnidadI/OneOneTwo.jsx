import React from "react";
import { Row, Col, Image, Container, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import Actividad from "../../components/Actividad";
import SideMenu from "../../components/SideMenu/SideMenu";
import {
  faBookReader,
  faExternalLinkAlt,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import { others } from "../../linksToAssets/Other/Others";

const OneOneTwo = () => {
  const img112 = "../../assets/images/112.png";
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
                  <h2>
                    1.1.2 El área financiera en la estructura organizacional
                  </h2>
                </Col>
              </Row>

              <Row className="justify-text">
                <Col>
                  <p>
                    Para explicar en qué consiste la estructura organizacional
                    usaremos la siguiente analogía: el ser humano tiene un
                    sistema óseo que le permite tener movimiento, un sistema
                    respiratorio que le proporciona el oxígeno para vivir; un
                    sistema digestivo que le suministra nutrientes; un sistema
                    circulatorio que transporta la sangre y distribuye
                    nutrientes; un sistema excretor que lo limpia de impurezas;
                    un cerebro que rige el funcionamiento general del organismo;
                    entre otros, del mismo modo las organizaciones requieren de
                    una estructura para su funcionamiento.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <Image
                        className="full-img"
                        src={img112}
                        alt="Figura 1.1.2 Estructura Organizacional"
                      />
                    </Col>
                  </Row>
                  <Row className="img-source center-text">
                    <Col>
                      Hernández, J., Rodríguez, E. & Jiménez, Y. (2021).
                    </Col>
                  </Row>
                </Col>
                <Col md={6} className="v-center-content justify-text">
                  <p>
                    Así como no hay dos personas iguales, tampoco hay dos
                    estructuras organizacionales iguales. La estructura
                    organizacional se diseña en función de las necesidades de
                    cada organización considerando aspectos como el tamaño, el
                    giro y el tipo de organización. Por lo que es un hecho que
                    entre más grande sea la empresa su organización será más
                    robusta.
                  </p>
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

export default OneOneTwo;

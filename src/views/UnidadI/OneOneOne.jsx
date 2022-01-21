import React, { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
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
import { scrollTop } from "../../helpers/general";

const OneOneOne = () => {
  const tdAllCenterTransparent = {
    verticalAlign: "middle",
    textAlign: "center",
    backgroundColor: "#f6f6f6", //must be same as BODY
  };
  const tdAllCenter = {
    verticalAlign: "middle",
    textAlign: "center",
  };

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
              <Row>
                <Col>
                  <h2>1.1.1 Constitución jurídica</h2>
                </Col>
              </Row>
              <Row className="justify-text m-b-space">
                <Col>
                  <p>
                    En México de acuerdo con el Servicio de Administración
                    Tributaria (SAT) para fines fiscales existen las siguientes
                    figuras: personas físicas y personas morales.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="bold">Persona física</span>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  "Individuo que realiza cualquier actividad económica
                  (vendedor, comerciante, empleado, profesionista, etc.), el
                  cual tiene derechos y obligaciones (SAT, s.f). En el siguiente
                  link conoce las actividades que como persona física se pueden
                  realizar":
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={3}>
                  <Actividad
                    color="aqua"
                    icon={faExternalLinkAlt}
                    link={others[0]}
                    type={"Régimenes Fiscales"}
                    number={""}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="bold">Persona moral</span>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    "Es el conjunto de personas físicas, que se unen para la
                    realización de un fin colectivo, son entes creados por el
                    derecho, no tienen una realidad material o corporal (no se
                    pueden tocar como tal como en el caso de una persona
                    física), sin embargo, la ley les otorga capacidad jurídica
                    para tener derechos y obligaciones (SAT, s.f)".
                  </p>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Cabe señalar que la persona moral es una agrupación de
                    personas que pueden constituirse jurídicamente como
                    sociedades o asociaciones, las más usuales se pueden
                    visualizar en la tabla 1.1
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                Tabla 1.1 Constitución jurídica de las personas morales
              </Row>
              <Row className="vertical-align-rows">
                <Col>
                  <Table striped bordered responsive size="sm">
                    <thead>
                      <tr className="center-text">
                        <th>Sociedad/Asociación:</th>
                        <th>Regulada por:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sociedad en nombre colectivo (S.N.C)</td>
                        <td rowSpan="6">
                          Ley General de Sociedades Mercantiles (L.G.S.M)
                        </td>
                      </tr>
                      <tr>
                        <td>Sociedad en comandita simpe (S.C.S)</td>
                      </tr>
                      <tr>
                        <td>Sociedad de responsabilidad limitada (S.R.L)</td>
                      </tr>
                      <tr>
                        <td>Sociedad anónima (S.A)</td>
                      </tr>
                      <tr>
                        <td>Sociedad en comandita por acciones (S.C.A)</td>
                      </tr>
                      <tr>
                        <td>Sociedad por acciones simplificada (S.A.S)</td>
                      </tr>
                      <tr>
                        <td>Sociedad cooperativa</td>
                        <td>
                          Ley General de Sociedades Cooperativas (L.G.S.C)
                        </td>
                      </tr>
                      <tr>
                        <td>Asociación civil (A.C)</td>
                        <td rowSpan="6" style={tdAllCenter}>
                          Código Civil
                        </td>
                      </tr>
                      <tr>
                        <td>Sociedad civil (S.C) </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2021). Con base en
                  la Ley General de Sociedades Mercantiles, Ley General de
                  Sociedades Cooperativas y Código Civil.
                </div>
              </Row>
              <Row>
                <Col className="justify-text">
                  <p>
                    Es importante señalar que algunas de las sociedades antes
                    mencionadas han caído en desuso, tal es el caso de la
                    sociedad en nombre colectivo, la sociedad en comandita
                    simple y la sociedad en comandita por acciones.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="justify-text">
                  En la siguiente lectura encontrarás más información sobre las
                  empresas y su constitución jurídica.
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={3}>
                  <Actividad
                    color="aqua"
                    icon={faBookReader}
                    link={"TODO://link"}
                    type={"Lectura"}
                    number={""}
                  />
                </Col>
                <Col md={6} className="v-center-content text-descrip">
                  Las organizaciones y un tipo particular de éstas: la empresa
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={3}>
                  <Actividad
                    color="aqua"
                    icon={faPuzzlePiece}
                    link={"TODO://link"}
                    type={"Actividad 1.1"}
                    number={""}
                  />
                </Col>
                <Col md={6} className="v-center-content text-descrip">
                  Actividad 1.1 La empresa y su constitución jurídica
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

export default OneOneOne;

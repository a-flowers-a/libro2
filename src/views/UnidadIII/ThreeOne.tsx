import { useEffect } from "react";
import { Row, Col, Container, Card, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeOne = () => {
  const img31 = "../../assets/images/31.jpg";
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
                  <h2>3.1 El análisis financiero en la empresa</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <p>
                  Recuerda que la contabilidad registra los hechos (operaciones)
                  del pasado de la organización y los resume en los estados
                  financieros. Éstos después de ser analizados e interpretados
                  proporcionan información valiosa para la toma de decisiones y
                  para la planeación.
                </p>
                <p>
                  Antes de abordar los métodos que se utilizan para realizar
                  análisis financiero es importante que conozcas en que consiste
                  el análisis financiero.
                </p>
                <Card className="m-b-space">
                  <Card.Body>
                    <blockquote>
                      <p>
                        “El análisis financiero es la situación actual de la
                        empresa basada principalmente en las decisiones pasadas
                        de la empresa”. (González, 2009, p.14).
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                <Card className="m-b-space">
                  <Card.Body>
                    <blockquote>
                      <p>
                        El análisis de los estados financieros consiste en el
                        “uso de ciertas herramientas y técnicas que se aplican a
                        los reportes y estados de índole financiera para obtener
                        algunas medidas y relaciones que facilitan la toma de
                        decisiones”. Dichas decisiones pueden estar encaminadas
                        a: modificar, consolidar o mejorar el rumbo financiero
                        de la empresa. (García, 2006, p.82).
                      </p>
                    </blockquote>
                  </Card.Body>
                </Card>
                <p>
                  Básicamente el análisis financiero radica en identificar las
                  relaciones que existen entre las principales partidas
                  (cuentas) de los estados financieros (estado de situación
                  financiera y estado de resultados), lo que permite medir el
                  desempeño de la administración (condiciones actuales y
                  resultados) a una fecha específica, información que tiene
                  relevancia para la toma de decisiones administrativas y
                  financieras.
                </p>
                <p>
                  A los medios o herramientas de apoyo que nos ayudan a realizar
                  el análisis e interpretación de los estados financieros se les
                  conoce como métodos de análisis financiero. (Figura 3.1)
                </p>
              </Row>
              <Row className="img-source center-text m-v-space">
                <Col>Figura 3.1 El análisis financiero.</Col>
              </Row>
              <Row>
                <Col>
                  <Image
                    className="full-img"
                    src={img31}
                    alt="Figura Análisis financiero"
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

export default ThreeOne;

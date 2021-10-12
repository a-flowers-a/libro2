import React, { useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

const OneOneTwo = () => {
  const img12 = "../../assets/images/12.png";

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
              <Row className="m-v-space">
                <Col md={6}>
                  <Row>
                    <Col>
                      <Image
                        className="full-img"
                        src={img12}
                        alt="Figura 1.2 Estructura Organizacional"
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
              <Row>
                <Col className="justify-text">
                  <p>
                    A partir de este momento, por ser el tema central de este
                    recurso didáctico digital, solo nos enfocaremos en el área
                    financiera la cual se lleva a cabo mediante dos actividades
                    importantes: Tesorería y Contraloría.
                  </p>
                  <ul>
                    <li className="m-b-space">
                      <b>Tesorería:</b>Se enfoca en el manejo de los recursos
                      financieros
                    </li>
                    <li>
                      <b>Contraloría:</b>Responsable de la actividad contable,
                      planeación, presupuestos y auditoría interna.
                      <ul>
                        <li className="m-b-space">
                          <i>Contabilidad: </i> Se encarga del registro, en
                          tiempo y forma, de todas las operaciones realizadas en
                          la organización.
                        </li>
                        <li className="m-b-space">
                          <i>Presupuestos: </i> Planifica, coordina y evalúa
                          todas las actividades en términos financieros, analiza
                          y compara los gastos del presupuesto anterior con el
                          presupuesto vigente, a fin de determinar acciones para
                          el ajuste del presupuesto de la organización.
                        </li>
                        <li className="m-b-space">
                          <i>Auditoría: </i> Se encarga de revisar, examinar y
                          evaluar los resultados de la gestión de una
                          dependencia o entidad.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="justify-text">
                    La organización delimita las actividades y la toma de
                    decisiones en cada una de las áreas. Cabe destacar que todas
                    las organizaciones, independientemente de su tamaño y giro
                    cuentan con un área financiera. Las demás áreas de la
                    empresa (capital humano, ventas, manufactura, marketing y
                    sistemas, etc.) están en constante comunicación con el área
                    financiera, por ejemplo, para justificar sus requerimientos
                    de recursos humanos y negociar diferentes presupuestos
                    operativos, entre otros.
                  </p>
                  <p className="justify-text">
                    Es importante señalar que en las empresas pequeñas la
                    actividad financiera es llevada a cabo por el departamento
                    de contabilidad, el encargado de dicho departamento evita
                    las insolvencias y realiza planes acerca de los usos y
                    necesidades del dinero.
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

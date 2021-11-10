import React, { useEffect } from "react";
import { Row, Col, Container, Image, Accordion } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Info from "../../components/Info";
import { scrollTop } from "../../helpers/general";

const ThreeTwoOneTwo = () => {
  const razonesSimples = "../../assets/images/razonesSimples.png";
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
              <h2>3.2.1.2 Método de razones simples</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Las razones o índices (ratios en el idioma inglés), se ocupan en
                la vida diaria, por ejemplo, algunas personas decidirán comprar
                un automóvil considerando el recorrido por litro de gasolina, es
                decir; utilizan índices para valorar un desempeño específico, en
                este caso de un automóvil. Del mismo modo, los índices o razones
                financieras se utilizan para ponderar y evaluar el desempeño
                operativo de las empresas.
              </p>
              <p>
                Matemáticamente se denomina "razón" a la relación que existe
                entre dos cantidades de la misma especie. Ahora bien, entre los
                diversos rubros que constituyen a los estados financieros
                existen ciertas relaciones, que dan información sobre la
                estructura financiera y la productividad de la entidad.
              </p>
              <p>
                El análisis financiero por el método de razones simples es de
                gran apoyo para las empresas, permite identificar puntos fuertes
                y probables puntos débiles (principales problemas) en el negocio
                y, adicionalmente puede utilizarse también para determinar
                probabilidades y tendencias. Es importante considerar que este
                método es solo una herramienta; sirve como auxiliar para el
                estudio de las cifras de los negocios, por lo que es necesario
                reconocer sus limitaciones y en este sentido resaltar la
                relevancia que tiene el <i>feeling</i> del analista financiero.
              </p>
              <p>
                Cabe señalar que no es conveniente limitar el número de las
                razones ni su aplicación en cada caso concreto; pueden existir
                tantas razones financieras como relaciones se deseen hacer entre
                los diferentes renglones de los estados financieros, siempre y
                cuando dicha relación entre los elementos se describa y tenga un
                sentido lógico.
              </p>
              <p>
                Para efectos de este curso, nos enfocaremos en los siguientes
                grupos de razones simples: índices de rentabilidad, índices de
                liquidez, índices de endeudamiento, índices de rotación o
                administración de activos e índices para la valuación de las
                inversiones <b>(Figura x)</b>.
              </p>
            </Col>
          </Row>
          <Row className="center-text">
            <Col>
              <Image
                className="mid-img"
                src={razonesSimples}
                alt="Estado de resultados"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Enseguida encontrarás la explicación con su respectivo ejemplo
                de los índices incluidos en cada uno de los grupos de razones
                simples antes mencionados.
              </p>
              <Info color="purple">
                NOTA: Antes de continuar descarga los siguientes estados
                financieros, porque en éstos se basa el cálculo de todas las
                razones financieras que se explican a continuación
              </Info>
            </Col>
          </Row>
          <Row className="m-v-space">
            <b>I. Índices de rentabilidad</b>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    I.1 Margen de utilidad o de rentabilidad
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    I.2 Retorno sobre Activos Totales (RAT) o Retorno de la
                    Inversión (ROI) o ROA por sus siglas en inglés
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    I.3 Retorno sobre el capital contable (ROE)
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-v-space">
            <b>II. Índices de liquidez</b>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    II.1 Razón de liquidez, razón circulante o razón corriente
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    II.2 Prueba del ácido o razón de liquidez inmediata
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>II.3 Capital de trabajo</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    II.4 Ciclo de conversión de efectivo o ciclo operativo
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-v-space">
            <b>III. Índices de endeudamiento</b>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    III.1 Apalancamiento o deuda sobre el activo total
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    III.2 Razón de cobertura de intereses
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-v-space">
            <b>IV. Índices de rotación o administración de activos</b>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    IV.1 Rotación de la cartera o rotación de cuentas por cobrar
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    IV.2 Rotación de cuentas por pagar
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    IV.3 Rotación de inventarios
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    IV.4 Rotación de activos fijos
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    IV.5 Rotación de activos totales
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-v-space">
            <b>V. Razones para valuación de inversiones</b>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    V.1 Razón de precio a utilidad por acción
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    V.2 Razón de valor en libros
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    V.3 Razón precio de mercado a valor en libros
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    V.4 Razón de rendimiento de dividendos
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-t-space">
            <i>
              Fuente: Elaboración propia, con base en Moyer, Mcguigan, Kretlow
              (2005); Actinver (s.f).
            </i>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoOneTwo;

import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourOneOne = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  const FlujoDeEfectivo = "../../assets/images/FlujosDeEfectivo.png";

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
                  <h2>4.1.1 Valor futuro y valor presente</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Del valor del dinero en el tiempo hay dos conceptos básicos
                    que debemos comprender: valor futuro y valor presente.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="bold light-navy">Valor futuro</p>
                  <p>
                    Es el efectivo que se recibirá en una fecha futura. La
                    técnica de valor futuro utiliza la capitalización para
                    encontrar el valor futuro de cada flujo de efectivo.{" "}
                  </p>
                  <p className="bold light-navy">Valor presente</p>
                  <p>
                    Término que se usa para referirse al valor actual del
                    dinero. La técnica del valor presente utiliza la tasa de
                    descuento. Aunque el valor futuro es más atractivo por
                    naturaleza, el valor presente es más útil para la toma de
                    decisiones financieras (Gitman, 2012).
                  </p>
                  <p>
                    No olvides que el valor del dinero se determinan sobre los
                    flujos de caja o flujos de efectivo. De acuerdo con Vidal y
                    González (2014) el flujo de efectivo tiene como propósito
                    determinar todas las entradas y salidas de dinero; es decir,
                    los ingresos, costos, gastos e inversiones producidos por
                    una empresa o proyecto en el futuro. Siguiendo a Gitman
                    (2012), los flujos de efectivo se presentan como cantidades
                    únicas (montos únicos), anualidades e ingreso mixto
                    <b>(figura 4.1).</b>
                  </p>
                </Col>
              </Row>
              <Row className="img-source center-text m-v-space">
                <Col>
                  <b>Figura 4.1 Flujos de efectivo</b>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col sm={8}>
                  <Image src={FlujoDeEfectivo} className="full-img" />
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <span className="bold">Cantidad única</span>
                  <p>
                    Es cualquier cantidad de dinero que se posee hoy o que se
                    espera tener en alguna fecha futura. Por ejemplo, $1,000
                    pesos o $200 pesos o $5,000 pesos que se tiene el día de hoy
                    o bien que se espera recibir en el futuro.
                  </p>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <span className="bold">Anualidad</span>
                  <p>
                    Son cantidades iguales que se repiten periódicamente durante
                    un determinado tiempo. No necesariamente son flujos de
                    efectivo anuales, pueden ser quincenales, mensuales,
                    bimestrales o en cualquier otro periodo de tiempo.
                  </p>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <span className="bold">Ingreso mixto</span>
                  <p>
                    Conjunto de flujos de efectivo periódicos y desiguales que
                    no reflejan un patrón en particular. Por ejemplo, para el
                    período uno $5,000 pesos, para el período dos $4,000 pesos,
                    para el período tres $8,000 pesos, etc.
                  </p>
                  <p>
                    En los siguientes subtemas se abordarán el valor presente y
                    valor futuro tanto de cantidades únicas, así como de
                    anualidades.
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

export default FourOneOne;

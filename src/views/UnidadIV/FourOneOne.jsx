import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourOneOne = () => {
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
                  <h2>4.1.1 Valor futuro y valor presente</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    El valor del dinero en el tiempo hace referencia al valor
                    futuro y al valor presente.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ul>
                    <li>
                      <span className="bold">Valor futuro:</span> Es el efectivo
                      que se recibirá en una fecha futura. La técnica del valor
                      futuro utiliza la capitalización para encontrar el valor
                      futuro de cada flujo de efectivo
                    </li>
                    <li>
                      <span className="bold">Valor presente:</span> Término que
                      se usa para referirse al valor actual del dinero. La
                      técnica del valor presente utiliza la tasa de descuento.
                      Aunque el valor futuro es más atractivo por naturaleza, el
                      valor presente es más útil para la toma de decisiones
                      financieras (Gitman, 2003).
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Es importante mencionar que el valor presente y el valor
                    futuro se determinan sobre los flujos de efectivo –entradas
                    y salidas de dinero– de una empresa, estos flujos de
                    efectivo pueden ser: una cantidad única, una anualidad o una
                    serie combinada.
                  </p>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    <span className="bold">Cantidad única.</span> Cantidad
                    global que se tiene actualmente (valor presente) o que se
                    espera en una fecha futura (valor futuro); es cualquier
                    cantidad que no se repite en forma periódica, si dicha
                    cantidad se repite en forma periódica entonces ya no se
                    trataría de una cantidad única sino de una anualidad. Los
                    conceptos más básicos de valores futuro y presente se
                    refieren a cantidades únicas. (ver{" "}
                    <span className="bold">Figura 29</span>).
                  </p>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    <span className="bold">Anualidad.</span>
                    Es un patrón de flujos de efectivo periódicos iguales
                    (Gitman, 2012). Es importante mencionar que no
                    necesariamente se refiere a periodos anuales. Por ejemplo,
                    pagar o recibir $15,000 al final de cada uno de los próximos
                    10 meses.
                  </p>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    <span className="bold">Serie combinada.</span>
                    Es una serie de flujos de efectivo en periodos desiguales
                    que no refleja un patrón particular (Gitman, 2012).
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

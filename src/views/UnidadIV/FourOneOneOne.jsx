import { useEffect } from "react";
import { Row, Col, Container, Image, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { MathComponent } from "mathjax-react";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourOneOneOne = () => {
  const img4111 = "../../assets/images/4111.jpg";
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
                  <h2>4.1.1.1 Valor futuro de cantidades únicas</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    El valor futuro de una cantidad única se puede determinar,
                    al menos, de dos formas
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ol type="a">
                    <li>Línea de flujo de efectivo</li>
                    <li>Fórmula matemática</li>
                  </ol>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">
                      a. Línea de flujo de efectivo
                    </span>
                  </p>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>Ejemplo:</p>
                  <p>
                    En el supuesto que el día de hoy realizaras una inversión de
                    $100,000 pesos con vencimiento a 3 años con una tasa de
                    interés anual del 10% ¿Cuánto dinero recibirás al finalizar
                    los tres años? Hagamos los cálculos sobre la siguiente línea
                    de flujo de efectivo:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={9}>
                  <Image
                    className="full-img"
                    src={img4111}
                    alt="Línea de Flujo de efectivo"
                  />
                  <Row>
                    <Col className="center-text">
                      Fin del período (en este ejemplo son años)
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Las cantidades que aparecen en la línea de flujo de
                    efectivo, se calcularon de la siguiente forma:
                  </p>
                </Col>
              </Row>
              <Row className="center-text">
                <Col>
                  <p className="bold">Valor futuro de cantidades únicas</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table striped bordered responsive size="sm">
                    <thead>
                      <tr className="center-text">
                        <th>Año</th>
                        <th>Monto inicial</th>
                        <th>Interés 10%</th>
                        <th>Monto final</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="center-text">0</td>
                        <td colSpan="2"></td>
                        <td>100,000</td>
                      </tr>
                      <tr>
                        <td className="center-text">1</td>
                        <td>100,000</td>
                        <td>(100,000) (0.10) = 10,000</td>
                        <td>100,000 + 10,000 = 110,000</td>
                      </tr>
                      <tr>
                        <td className="center-text">2</td>
                        <td>110,000</td>
                        <td>(110,000) (0.10) = 11,000</td>
                        <td>110,000 + 11,000 = 121,000</td>
                      </tr>
                      <tr>
                        <td className="center-text">3</td>
                        <td>121,000</td>
                        <td>(121,000) (0.10) = 12,100</td>
                        <td>121,000 + 12,100 = 133,100</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Como habrás notado, usar la línea de flujo de efectivo
                    resulta sencillo y muy práctico cuando se trata de pocos
                    períodos de tiempo; sin embargo, puede ser laborioso cuando
                    los cálculos son, por ejemplo para 30 años o más. Para
                    facilitar los cálculos contamos con las siguiente fórmula
                    matemática:
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">b. Fórmula matemática</span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="light-navy">
                    La fórmula para calcular el valor futuro (VF) de una
                    cantidad única es:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent tex={String.raw`VF_{n}= VP(1+i)^{n}`} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Para el ejemplo que estamos trabajando quedaría:</p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent
                    className={"full-img"}
                    tex={String.raw`VF_{n}= VP(1+i)^{n}`}
                  />
                  <MathComponent
                    className={"full-img"}
                    tex={String.raw` =(100,000) (1.10)^3=133,100`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Donde:</p>
                  <p>
                    <span className="bold">VP</span> = Valor presente
                  </p>
                  <p>
                    <span className="bold">VF</span> = Valor futuro
                  </p>
                  <p>
                    <span className="bold">
                      <i>i</i>
                    </span>
                    = Tasa de interés
                  </p>
                  <p>
                    <span className="bold">n</span> = período de tiempo
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

export default FourOneOneOne;

import React, { useEffect } from "react";
import { Row, Col, Container, Image, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeOneOne = () => {
  const equilibrioUtilidad1 = "../../assets/images/equilibrioUtilidad1.png";
  const equilibrioUtilidad2 = "../../assets/images/equilibrioUtilidad2.png";
  const tablaEquilibrio = "../../assets/images/tablaEquilibrio.png";

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
              <h2>3.3.1.1 Punto de equilibrio con un producto sin utilidad</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <Row>
                <Col>
                  <p>
                    Supongamos que queremos saber cuántas hamburguesas
                    tendríamos que vender en un lapso de un mes para no ganar ni
                    perder. Tenemos los siguientes datos:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-v-space">
                <Col sm={6} md={4}>
                  <Image src={equilibrioUtilidad1} className="full-img" />
                </Col>
                <Col sm={6} md={4}>
                  <Image src={equilibrioUtilidad2} className="full-img" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Para calcular el P.E en número de unidades y en cantidad de
                    dinero sin utilidad ocuparemos la siguiente fórmula:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-v-space">
                <Col sm={10} md={9}>
                  <Table striped bordered hover responsive size="sm">
                    <thead>
                      <tr>
                        <th>Punto de equilibrio en número de unidades</th>
                        <th>
                          Punto de equilibrio expresado en cantidad de dinero
                          (pesos)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <MathComponent
                            tex={String.raw`P.E\;en\;uds.=\frac{C.F}{M.C.U} `}
                          />
                        </td>
                        <td>
                          <MathComponent
                            tex={String.raw`P.E\;en\;pesos.=\frac{C.F}{1-\frac{C.V.U}{P}}`}
                          />
                          <p>Otra forma de calcular P.E en pesos: </p>
                          <MathComponent
                            tex={String.raw`P.E\;en\;pesos.=(P.E\;en\;uds)(P)`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Sustituyendo los datos tenemos:</p>
                  <MathComponent
                    tex={String.raw`P.E\;en\;uds.=\frac{C.F}{M.C.U}=\frac{30000}{20}`}
                  />
                  <MathComponent
                    tex={String.raw`=1500\;hamburguesas\;mensuales`}
                  />
                  <MathComponent
                    tex={String.raw`P.E\;en\;pesos.= \frac{C.F}{1-\frac{C.V.U}{P}} = 52,500`}
                  />
                  <p>
                    El punto de equilibrio se alcanza al vender 1,500
                    hamburguesas recibiendo por esa venta $52,500
                  </p>
                  <p>
                    Conclusión: Al vender 1,500 hamburguesas solamente
                    estaríamos recuperando el costo total pero no estaríamos
                    ganando, comprobémoslo:
                  </p>
                  <p>
                    Hagamos la gráfica del punto de equilibrio, para lo cual
                    necesitamos:
                  </p>

                  <MathComponent tex={String.raw`I = C.T`} />
                  <MathComponent tex={String.raw`(Q)(P) = C.F + C.V.U (Q)`} />
                  <MathComponent
                    tex={String.raw`(1,500)(35) = 30,000 + (15)(1,500)`}
                  />
                  <MathComponent tex={String.raw`52,500 = 52,500`} />

                  <ol>
                    <li>Definir una escala para las cantidades</li>
                    <li>
                      Las siguientes rectas:
                      <ul>
                        <li>Recta del costo fijo</li>
                        <li>Recta del costo total</li>
                        <li>Recta de ingresos derivado de las ventas</li>
                      </ul>
                    </li>
                  </ol>
                </Col>
              </Row>
              <Row className="justify-content-center m-v-space">
                <Col sm={10}>
                  <Image src={tablaEquilibrio} className="full-img" />
                </Col>
              </Row>
              <p>
                <b>FALTA GRÁFICA</b>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeOneOne;

import React, { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeOneOne = () => {
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
                  <Table striped bordered responsive size="sm">
                    <thead>
                      <tr className="center-text">
                        <th colSpan={2}>Costos fijos mensuales</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Renta</td>
                        <td>$10,000.00</td>
                      </tr>
                      <tr>
                        <td>Sueldos</td>
                        <td>$18,000.00</td>
                      </tr>
                      <tr>
                        <td>Productos de limpieza</td>
                        <td>$1,000.00</td>
                      </tr>
                      <tr>
                        <td>Servicios</td>
                        <td>$1,000.00</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Total</b>
                        </td>
                        <td>
                          <b>$30,000.00</b>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col sm={6} md={4}>
                  <Table striped bordered responsive size="sm">
                    <thead>
                      <tr className="center-text">
                        <th colSpan={3}>Hamburguesa sencilla</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <b>Precio de venta unitario (P)</b>
                        </td>
                        <td>
                          <b>$35.00</b>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <b>Costo variable unitario (C.V.U)</b>
                        </td>
                        <td>
                          <b>$15.00</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Carne</td>
                        <td>$7.00</td>
                        <td />
                      </tr>
                      <tr>
                        <td>Pan</td>
                        <td>$4.00</td>
                        <td />
                      </tr>
                      <tr>
                        <td>Gas</td>
                        <td>$2.00</td>
                        <td />
                      </tr>
                      <tr>
                        <td>Varios</td>
                        <td>$2.00</td>
                        <td />
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <b>Margen de contribución unitario</b>
                        </td>
                        <td>
                          <b>$20.00</b>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <b>Proporción en las ventas totales</b>
                        </td>
                        <td>
                          <b>20%=0.20</b>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <i>
                      <b>Nota: </b>el margen de contribución unitario se obtiene
                      restando el costo variable unitario (CVU) al precio de
                      venta unitario (PVU).
                    </i>
                  </p>
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
              <Row className="center-table-rows justify-content-center">
                <Col sm={10}>
                  <Table striped bordered responsive size="sm">
                    <thead>
                      <tr>
                        <th>
                          <b>Q</b>
                        </th>
                        <th>
                          <b>C.F</b>
                        </th>
                        <th>
                          <b>C.V.U</b>
                        </th>
                        <th>
                          <b>C.V.T</b>
                        </th>
                        <th>
                          <b>C.T</b>
                        </th>
                        <th>
                          <b>P</b>
                        </th>
                        <th>
                          <b>Ingresos</b>
                        </th>
                        <th>
                          <b>Utilidad o pérdida</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0</td>
                        <td>30,000</td>
                        <td>15</td>
                        <td>0</td>
                        <td>30,000</td>
                        <td>35</td>
                        <td>0</td>
                        <td>-30,000</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>30,000</td>
                        <td>15</td>
                        <td>7,500</td>
                        <td>37,500</td>
                        <td>35</td>
                        <td>17,500</td>
                        <td>-20,000</td>
                      </tr>
                      <tr>
                        <td>1,000</td>
                        <td>30,000</td>
                        <td>15</td>
                        <td>15,000</td>
                        <td>45,000</td>
                        <td>35</td>
                        <td>35,000</td>
                        <td>-15,000</td>
                      </tr>
                      <tr>
                        <td>1,500</td>
                        <td>30,000</td>
                        <td>15</td>
                        <td>22,500</td>
                        <td>52,500</td>
                        <td>35</td>
                        <td>52,500</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>2,000</td>
                        <td>30,000</td>
                        <td>15</td>
                        <td>30,000</td>
                        <td>60,000</td>
                        <td>35</td>
                        <td>70,000</td>
                        <td>10,000</td>
                      </tr>
                    </tbody>
                  </Table>
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

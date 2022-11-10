import React, { useEffect } from "react";
import { Row, Col, Container, Table, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeOneOne = () => {
  const PEformulas = "../../../../assets/images/PEformulas.png";
  const PEgrafica = "../../../../assets/images/PEgrafica.png";

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
                      <tr>
                        <th colSpan={2}>Costos fijos mensuales</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Renta</td>
                        <td className="justify-text-right">$10,000.00</td>
                      </tr>
                      <tr>
                        <td>Sueldos</td>
                        <td className="justify-text-right">$18,000.00</td>
                      </tr>
                      <tr>
                        <td>Productos de limpieza</td>
                        <td className="justify-text-right">$1,000.00</td>
                      </tr>
                      <tr>
                        <td>Servicios</td>
                        <td className="justify-text-right">$1,000.00</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Total</b>
                        </td>
                        <td>
                          <b className="justify-text-right">$30,000.00</b>
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
                          <b>Costo variable unitario (CVU)</b>
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
                          <b>Margen de contribución unitario(MCU)</b>
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
                    Para calcular el punto de equilibrio en número de unidades y
                    en cantidad de dinero sin utilidad ocuparemos la siguientes
                    fórmulas:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-v-space">
                <Col sm={10} md={10}>
                  <Image
                    className="full-img"
                    src={PEformulas}
                    alt="Formulas punto de equilibrio"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Sustituyendo los datos tenemos:</p>
                  <MathComponent
                    tex={String.raw`PE\;en\;uds.=\frac{CF}{MCU}=\frac{30000}{20}`}
                  />
                  <MathComponent
                    tex={String.raw`=1500\;hamburguesas\;mensuales`}
                  />
                  <MathComponent
                    tex={String.raw`PE\;en\;pesos.= \frac{CF}{1-\frac{CVU}{P}} = 52,500`}
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
                  <MathComponent tex={String.raw`I = CT`} />
                  <MathComponent tex={String.raw`(Q)(P) = CF + CVU (Q)`} />
                  <MathComponent
                    tex={String.raw`(1,500)(35) = 30,000 + (15)(1,500)`}
                  />
                  <MathComponent tex={String.raw`52,500 = 52,500`} />
                  <p>Donde:</p>
                  <p>I = Ingreso o ventas</p>
                  <p>CT = Costo total</p>
                  <p>Q = Cantidad</p>
                  <p>P = Precio</p>
                  <p>CF = Costos fijos</p>
                  <p>CVU = Costo variable unitario</p>
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
                          <b>CF</b>
                        </th>
                        <th>
                          <b>CVU</b>
                        </th>
                        <th>
                          <b>CVT</b>
                        </th>
                        <th>
                          <b>CT</b>
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
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={10} md={9}>
              <Image
                className="full-img"
                src={PEgrafica}
                alt="Gráfica punto de equilibrio"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeOneOne;

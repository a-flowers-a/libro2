import React, { useEffect } from "react";
import { Row, Col, Container, Image, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeTwoOne = () => {
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
              <h2>
                3.3.2.1 punto de equilibrio para una mezcla de productos sin
                utilidad
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Continuando con el ejemplo de las hamburguesas, supongamos que
                ahora venderemos hamburguesas sencillas y hamburguesas
                hawaianas. Del total de las hamburguesas vendidas al mes el 75%
                son sencillas y el 25% son hawaianas con queso.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
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
                      <b>$50.00</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>Costo variable unitario (CVU)</b>
                    </td>
                    <td>
                      <b>$20.00</b>
                    </td>
                  </tr>
                  <tr>
                    <td>Carne</td>
                    <td>$11.00</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Pan</td>
                    <td>$5.00</td>
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
                      <b>$30.00</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>Proporción en las ventas totales</b>
                    </td>
                    <td>
                      <b>75% o 0.75</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col sm={6} md={4}>
              <Table striped bordered responsive size="sm">
                <thead>
                  <tr className="center-text">
                    <th colSpan={3}>Hamburguesa hawaiana</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2}>
                      <b>Precio de venta unitario (P)</b>
                    </td>
                    <td>
                      <b>$60.00</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>Costo variable unitario (CVU)</b>
                    </td>
                    <td>
                      <b>$25.00</b>
                    </td>
                  </tr>
                  <tr>
                    <td>Carne</td>
                    <td>$11.00</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Pan</td>
                    <td>$5.00</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Gas</td>
                    <td>$2.00</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Piña</td>
                    <td>$3.00</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Varios</td>
                    <td>$4.00</td>
                    <td />
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>Margen de contribución unitario(MCU)</b>
                    </td>
                    <td>
                      <b>$35.00</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>Proporción en las ventas totales</b>
                    </td>
                    <td>
                      <b>25% o 0.25</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
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
                    <td className="justify-text-right">$13,500</td>
                  </tr>
                  <tr>
                    <td>Sueldos</td>
                    <td className="justify-text-right">$20,000</td>
                  </tr>
                  <tr>
                    <td>Productos de limpieza</td>
                    <td className="justify-text-right">$1,000</td>
                  </tr>
                  <tr>
                    <td>Servicios</td>
                    <td className="justify-text-right">$1,500</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Total</b>
                    </td>
                    <td className="justify-text-right">
                      <b>$36,000</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space"></Row>
          <Row>
            <Col>
              <p>
                Para calcular el punto de equilibrio sin utilidad utilizamos la
                siguiente fórmula:
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <MathComponent tex={String.raw`PE\;Mezcla=\frac{CF}{MCPP}`} />
              <p>Donde:</p>
              <p>
                PE Mezcla = punto de equilibrio de la mezcla en número de
                unidades
              </p>
              <p>CF = costos fijos </p>
              <p>MCPP = margen de contribución ponderado promedio</p>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Ahora si ya contamos con todos los valores para sustituirlos en
                la fórmula:
              </p>
            </Col>
            <MathComponent
              tex={String.raw`PE\;Mezcla=\frac{36,000}{(30)(0.75)+(35)(0.25)}=1,152\;hamburguesas`}
            />
            <p>
              1,152 hamburguesas (incluye tanto sencillas como hawaianas). Para
              saber cuántas sencillas y cuántas hawaianas solo hay que
              multiplicar por la proporción en la que participa cada una en las
              ventas totales.
            </p>
            <MathComponent tex={String.raw`(1,152)(0.75)=`} />
            <MathComponent tex={String.raw`864\;hamburguesas\;sencillas`} />
            <MathComponent tex={String.raw`(1,152)(0.25)=`} />
            <MathComponent tex={String.raw`288\;hamburguesas\;hawaianas`} />
            <p>
              De acuerdo con los resultados anteriores el punto de equilibrio se
              obtiene vendiendo 864 hamburguesas sencillas y 288 hawaianas y
              recibiendo por esa venta $60,480 pesos, así no se gana y no se
              pierde, tal y como se muestra en la siguiente tabla:
            </p>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>Sencillas</th>
                    <th>Hawaianas</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>+ Ventas = (Q)(P)</td>
                    <td>$43,200</td>
                    <td>$17,280</td>
                    <td>$60,480</td>
                  </tr>
                  <tr>
                    <td>- Costo variable</td>
                    <td>$17,280</td>
                    <td>$7,200</td>
                    <td>$24,480</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Margen de contribución (MC)</b>
                    </td>
                    <td>$25,920</td>
                    <td>$10,080</td>
                    <td>$36,000</td>
                  </tr>
                  <tr>
                    <td>- Costos fijos (CF)</td>
                    <td colSpan="2"></td>
                    <td>$36,000</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Ganancia</b>
                    </td>
                    <td colSpan="2"></td>
                    <td>$0</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Si se vendieran más de 864 hamburguesas sencillas y más de 288
                hamburguesas hawaianas se tendrían utilidades, de lo contrario
                se tendrían pérdidas.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeTwoOne;

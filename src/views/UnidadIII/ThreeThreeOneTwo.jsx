import React, { useEffect } from "react";
import { Row, Col, Container, Image, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeOneTwo = () => {
  const PEutilidad = "../../../../assets/images/PEformulasUtilidad.png";

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
              <h2>3.3.1.2 Punto de equilibrio con un producto con utilidad</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Recuerda que las empresas tienen objetivos en cuanto a las
                utilidades que desean obtener; para saber la cantidad que
                tendrían que producir y/o vender para alcanzar dicha utilidad
                podrían utilizar la fórmula del punto de equilibrio con utilidad
                que verás enseguida.
              </p>
              <p>Retomemos los datos con los que hemos venido trabajando:</p>
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
                Para calcular el punto de equilibrio en número de unidades y en
                cantidad de dinero sin utilidad ocuparemos la siguientes
                fórmulas:
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
                        tex={String.raw`PE\;en\;uds.=\frac{CF}{MCU} `}
                      />
                    </td>
                    <td>
                      <MathComponent
                        tex={String.raw`PE\;en\;pesos.=\frac{CF}{1-\frac{CVU}{P}}`}
                      />
                      <p>Otra forma de calcular PE en pesos: </p>
                      <MathComponent
                        tex={String.raw`PE\;en\;pesos=(PE\;en\;uds)(P)`}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={10} md={9}>
              <Image
                className="full-img"
                src={PEutilidad}
                alt="Formulas punto de equilibrio para un producto con utilidad"
              />
            </Col>
          </Row>
          <Row>
            <p>
              Continuando con nuestro ejemplo (venta de hamburguesas sencillas)
              y considerando que deseamos obtener una utilidad de $40,000
              mensuales, entonces el punto de equilibrio se calcula así:
            </p>
            <MathComponent
              tex={String.raw`Punto\;de\;equilibrio\;con\;utilidad=`}
            />
            <MathComponent tex={String.raw`\frac{CF+utilidad\;deseada}{MCU}`} />
            <MathComponent tex={String.raw`=\frac{(30,000+40,000)}{20}`} />
            <MathComponent
              tex={String.raw`=3,500\;hamburguesas\;sencillas\;al\;mes`}
            />
            <p>Comprobación:</p>
          </Row>
          <Row className="justify-content-center">
            <Col sm={6}>
              <Table striped bordered responsive hover>
                <tbody>
                  <tr>
                    <td>+ Ventas = (3,500) ($35)</td>
                    <td>$122,500</td>
                  </tr>
                  <tr>
                    <td>- Costo variable total (CVT) = (3,500) (15) </td>
                    <td>$52,500</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Margen de contribución (MC)</b>
                    </td>
                    <td>$70,000</td>
                  </tr>
                  <tr>
                    <td>- Costos fijos (CF)</td>
                    <td>$30,000</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Utilidad</b>
                    </td>
                    <td>
                      <b>$40,000</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Lo que significa que al vender 3,500 hamburguesas al mes se
                estaría recuperando el costo total y quedaría la utilidad
                deseada que es de $40,000.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeOneTwo;

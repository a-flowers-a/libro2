import { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import { MathComponent } from "mathjax-react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

const ThreeThreeOneTwo = () => {
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
              <p>Retomemos los datos con los que hemos estado trabajando:</p>
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
                      <b>$50</b>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>Costo variable unitario (CVU)</b>
                    </td>
                    <td>
                      <b>$20</b>
                    </td>
                  </tr>
                  <tr>
                    <td>Carne</td>
                    <td>$11</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Pan</td>
                    <td>$5</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Gas</td>
                    <td>$2</td>
                    <td />
                  </tr>
                  <tr>
                    <td>Varios</td>
                    <td>$2</td>
                    <td />
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <b>Margen de contribución unitario(MCU)</b>
                    </td>
                    <td>
                      <b>$20</b>
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
                        tex={String.raw`PE\;en\;unidades=\frac{CF}{MCU} `}
                      />
                    </td>
                    <td>
                      <MathComponent
                        tex={String.raw`PE\;en\;pesos.=\frac{CF}{1-\frac{CVU}{P}}`}
                      />
                      <p>Otra forma de calcular PE en pesos: </p>
                      <MathComponent
                        tex={String.raw`PE\;en\;pesos=(PE\;en\;unidades)(P)`}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Donde:</p>
              <p>CF = Costos fijos</p>
              <p>MCU = Margen de contribución unitario</p>
              <p>CVU = Costo variable unitario</p>
              <p>P = Precio</p>
              <p>
                <b>Nota:</b> recuerda que el margen de contribución unitario se
                obtiene restado el costo variable unitario al precio; es decir:
                <MathComponent tex={String.raw`(P-CVU).`} />
              </p>
            </Col>
          </Row>
          <Row>
            <p>
              Continuando con nuestro ejemplo (venta de hamburguesas sencillas)
              y considerando que deseamos obtener una utilidad de $60,000
              mensuales, entonces el punto de equilibrio se calcula así:
            </p>
            <MathComponent
              tex={String.raw`Punto\;de\;equilibrio\;con\;utilidad=`}
            />
            <MathComponent tex={String.raw`\frac{CF+utilidad\;deseada}{MCU}`} />
            <MathComponent tex={String.raw`=\frac{(36,000+60,000)}{30}`} />
            <MathComponent
              tex={String.raw`=3,200\;hamburguesas\;sencillas\;al\;mes`}
            />
            <p>Comprobación:</p>
          </Row>
          <Row className="justify-content-center">
            <Col sm={6}>
              <Table striped bordered responsive hover>
                <tbody>
                  <tr>
                    <td>+ Ventas = (3,200) ($50)</td>
                    <td>$160,000</td>
                  </tr>
                  <tr>
                    <td>- Costo variable total (CVT) = (3,200) ($20) </td>
                    <td>$64,000</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Margen de contribución (MC)</b>
                    </td>
                    <td>$96,000</td>
                  </tr>
                  <tr>
                    <td>- Costos fijos (CF)</td>
                    <td>$36,000</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Utilidad</b>
                    </td>
                    <td>
                      <b>$60,000</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Lo que significa que al vender 3,200 hamburguesas al mes se
                estaría recuperando el costo total y quedaría la utilidad
                deseada que es de $60,000.
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

import React, { useEffect } from "react";
import { Row, Col, Container, Image, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeOneTwo = () => {
  // const imgVerticales = "../../assets/images/verticales.png";
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
                También podemos calcular el punto de equilibrio con utilidad.
                Continuando con nuestro ejemplo (venta de hamburguesas
                sencillas) y considerando que deseamos una utilidad de $40,000
                mensuales, entonces el punto de equilibrio se calcularía así:
              </p>
              <MathComponent
                tex={String.raw`Punto\;de\;equilibrio\;con\;utilidad=`}
              />
              <MathComponent
                tex={String.raw`\frac{C.F+utilidad\;deseada}{M.C.U}`}
              />
              <MathComponent tex={String.raw`=\frac{(30,000+40,000)}{20}`} />
              <MathComponent
                tex={String.raw`=3,500\;hamburguesas\;sencillas\;al\;mes`}
              />
              <p>Comprobación:</p>
            </Col>
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
                    <td>- Costo variable total (C.V.T) = (3,500) (15) </td>
                    <td>$52,500</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Margen de contribución (M.C)</b>
                    </td>
                    <td>$70,000</td>
                  </tr>
                  <tr>
                    <td>- Costos fijos (C.F)</td>
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

import React, { useEffect } from "react";
import { Row, Col, Container, Image, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeTwoOne = () => {
  const equilibrioMezcla1 = "../../assets/images/equilibrioMezcla1.png";
  const equilibrioMezcla2 = "../../assets/images/equilibrioMezcla2.png";
  const equilibrioMezcla3 = "../../assets/images/equilibrioMezcla3.png";
  const MCP = "../../assets/images/MCP.png";

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
                hawaianas. Del total de las hamburguesas vendidas al mes el 20%
                son sencillas y el 80% son hawaiana con queso
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={4}>
              <Image src={equilibrioMezcla1} className="full-img" />
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={4}>
              <Image src={equilibrioMezcla2} className="full-img" />
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={4}>
              <Image src={equilibrioMezcla3} className="full-img" />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Para calcular el punto de equilibrio utilizamos la fórmula de la
                mezcla
              </p>
              <MathComponent tex={String.raw`P.E\;mezcla=\frac{C.F}{M.C.P}`} />
              <p>Necesitamos calcular el M.C.P, se determina así:</p>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={6}>
              <Image src={MCP} className="full-img" />
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>Entonces tenemos</p>
            </Col>
            <MathComponent tex={String.raw`M.C.U=(20)(0.20)+(25)(0.80)`} />
            <MathComponent tex={String.raw`M.C.U=24`} />
            <MathComponent
              tex={String.raw`P.E\;Mezcla=\frac{30,000}{24}=1,250`}
            />
            <p>
              1,250 hamburguesas (incluye tanto sencillas como hawaianas. Para
              saber cuántas sencillas y cuántas hawaianas solo hay que
              multiplicar por la proporción de cada una.
            </p>
            <MathComponent tex={String.raw`(1,250)(0.20)=`} />
            <MathComponent tex={String.raw`250\;hamburguesas\;sencillas`} />
            <MathComponent tex={String.raw`(1,250)(0.80)=`} />
            <MathComponent tex={String.raw`1,000\;hamburguesas\;hawaianas`} />
            <p>
              El punto de equilibrio se obtiene vendiendo 250 hamburguesas
              sencillas y 1,000 hawaianas y recibiendo por esa venta $53,750
              pesos, así no se gana y no se pierde. Por arriba de dichas
              cantidades se tendría utilidad y por debajo de esa cantidad se
              tendrían pérdidas.
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
                    <td>$8,750.00</td>
                    <td>$45,000.00</td>
                    <td>$53,750.00</td>
                  </tr>
                  <tr>
                    <td>- Costo variable</td>
                    <td>$3,750.00</td>
                    <td>$20,000.00</td>
                    <td>$23,750.00</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Margen de contribución (M.C)</b>
                    </td>
                    <td>$5,000.00</td>
                    <td>$25,000.00</td>
                    <td>$30,000.00</td>
                  </tr>
                  <tr>
                    <td>- Costos fijos (C.F)</td>
                    <td colSpan="2"></td>
                    <td>$30,000</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Ganancia</b>
                    </td>
                    <td colSpan="2"></td>
                    <td>$-</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Nota: Para determinar el punto de equilibrio con utilidad para
                uno o más productos (mezcla), solo hay que tener el dato de
                cuánto utilidad se desea obtener en un periodo de tiempo x, se
                aplican las fórmulas de la tabla que te mostré y realizas el
                mismo análisis que hemos hecho a lo largo de este video.
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

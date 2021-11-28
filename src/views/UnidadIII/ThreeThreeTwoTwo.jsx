import React, { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeTwoTwo = () => {
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
                3.3.2.2 punto de equilibrio para una mezcla de productos con
                utilidad
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                También podemos calcular el punto de equilibrio, para una mezcla
                de productos, con utilidad. Continuando con nuestro ejemplo y
                considerando que la empresa desea obtener una utilidad de 45,000
                pesos mensuales, entonces el punto de equilibrio se calcula así:
              </p>
              <MathComponent tex={String.raw`P.E\;Mezcla=`} />
              <MathComponent
                tex={String.raw`\frac{C.F+utilidad\;deseada}{M.C.P}=`}
              />
              <MathComponent tex={String.raw`\frac{30,000+45,000}{24}=`} />
              <MathComponent tex={String.raw`3,125\;hamburguesas`} />
              <p>Donde:</p>
              <p>C.F = costos fijos</p>
              <p>M.C.P = margen de contribución ponderado</p>
              <p>
                Para obtener el punto de equilibrio para cada uno de los
                productos, simplemente se multiplica el punto de equilibrio de
                la mezcla, que en nuestro ejemplo son 3,125 unidades, por la
                proporción en que cada un participa en la producción,
                obteniéndose los siguientes resultados:
              </p>
              <MathComponent tex={String.raw`Hamburguesas\;sencillas=`} />
              <MathComponent tex={String.raw`(3,125)(0.20)=625`} />
              <MathComponent tex={String.raw`Hamburguesas\;hawaianas=`} />
              <MathComponent tex={String.raw`(3,125)(0.80)=2,500`} />
              <MathComponent tex={String.raw` = (2,000) (0.40) = 800 `} />
              <p>
                Ahora, comprobemos que con ese volumen de ventas se obtiene una
                utilidad de $45,000
              </p>
              <p>
                <b>Comprobación</b>
              </p>
            </Col>
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
                    <td>$21,875.00</td>
                    <td>$112,500.00</td>
                    <td>$134,375.00</td>
                  </tr>
                  <tr>
                    <td>- Costo variable</td>
                    <td>$9,375.00</td>
                    <td>$50,000.00</td>
                    <td>$59,375.00</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Margen de contribución (M.C)</b>
                    </td>
                    <td>$12,500.00</td>
                    <td>$62,500.00</td>
                    <td>$75,000.00</td>
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
                    <td>$45,000</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeTwoTwo;

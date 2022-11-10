import React, { useEffect } from "react";
import { Row, Col, Container, Table, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeTwoTwo = () => {
  const PEmezclaUtilidad = "../../../../assets/images/PEmezclaUtilidad.png";

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
                Antes de continuar es importante que hayas leído el tópico
                anterior (3.3.2.1) que corresponde al punto de equilibrio para
                una mezcla de productos sin utilidad. El punto de equilibrio
                para una mezcla de productos con utilidad indica la cantidad de
                productos que se tendrían que producir y/o vender para recuperar
                el costo total y además obtener una utilidad deseada, para ello
                ocuparemos la siguiente fórmula:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={10} md={9}>
              <Image
                className="full-img"
                src={PEmezclaUtilidad}
                alt="Formulas punto de equilibrio para una mezcla de productos con utilidad"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Continuando con nuestro ejemplo y considerando que la empresa
                desea obtener una utilidad de 45,000 pesos mensuales, entonces
                el punto de equilibrio se calcula así:
              </p>
              <MathComponent tex={String.raw`PE\;Mezcla=`} />
              <MathComponent
                tex={String.raw`\frac{CF+utilidad\;deseada}{MCPP}=`}
              />
              <MathComponent tex={String.raw`\frac{30,000+45,000}{24}=`} />
              <MathComponent tex={String.raw`3,125\;hamburguesas`} />
              <p>Donde:</p>
              <p>CF = costos fijos</p>
              <p>MCPP = margen de contribución ponderado promedio</p>
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

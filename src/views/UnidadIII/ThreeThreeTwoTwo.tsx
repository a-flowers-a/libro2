import { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import { MathComponent } from "mathjax-react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
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
                Antes de continuar es importante que hayas leído el tópico
                anterior (3.3.2.1) que corresponde al punto de equilibrio para
                una mezcla de productos sin utilidad.
              </p>
              <p>
                El punto de equilibrio para una mezcla de productos con utilidad
                indica la cantidad de productos que se tendrían que producir y/o
                vender para recuperar el costo total y además obtener una
                utilidad deseada, para ello ocuparemos la siguiente fórmula:
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <MathComponent
                tex={String.raw`PE\;Mezcla=\frac{CF+utilidad\;deseada}{MCPP}`}
              />
              <p>Donde: </p>
              <p>
                PE Mezcla: punto de equilibrio de la mezcla en número de
                unidades
              </p>
              <p>CF = costos fijos</p>
              <p>Utilidad deseada = utilidad que se planea obtener</p>
              <p>MCPP = margen de contribución ponderado promedio</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Continuando con nuestro ejemplo y considerando que la empresa
                desea obtener una utilidad de 80,000 pesos mensuales, entonces
                el punto de equilibrio se calcula así:
              </p>
              <MathComponent tex={String.raw`PE\;Mezcla=`} />
              <MathComponent
                tex={String.raw`\frac{CF+utilidad\;deseada}{MCPP}=`}
              />
              <MathComponent
                tex={String.raw`\frac{36,000+80,000}{(30)(0.75)+(35)(0.25)}=`}
              />
              <MathComponent tex={String.raw`3,712\;hamburguesas`} />
              <p>Donde:</p>
              <p>CF = costos fijos</p>
              <p>MCPP = margen de contribución ponderado promedio</p>
              <p>
                Para obtener el punto de equilibrio para cada uno de los
                productos, simplemente se multiplica el punto de equilibrio de
                la mezcla, que en nuestro ejemplo son 3,712 unidades, por la
                proporción en que cada un participa en la producción,
                obteniéndose los siguientes resultados:
              </p>
              <MathComponent tex={String.raw`Hamburguesas\;sencillas=`} />
              <MathComponent tex={String.raw`(3,712)(0.75)=2,784`} />
              <MathComponent tex={String.raw`Hamburguesas\;hawaianas=`} />
              <MathComponent tex={String.raw`(3,712)(0.25)=928`} />
              <p>
                Ahora, comprobemos que con ese volumen de ventas se obtiene una
                utilidad de $80,000
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
                    <td>$139,200</td>
                    <td>$55,680</td>
                    <td>$194,880</td>
                  </tr>
                  <tr>
                    <td>- Costo variable</td>
                    <td>$55,680</td>
                    <td>$23,200</td>
                    <td>$78,880</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Margen de contribución (M.C)</b>
                    </td>
                    <td>$83,520</td>
                    <td>$32,480</td>
                    <td>$116,000</td>
                  </tr>
                  <tr>
                    <td>- Costos fijos (C.F)</td>
                    <td colSpan={2}></td>
                    <td>$36,000</td>
                  </tr>
                  <tr>
                    <td>
                      <b>= Ganancia</b>
                    </td>
                    <td colSpan={2}></td>
                    <td>$80,000</td>
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

import { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import { MathComponent } from "mathjax-react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

const FiveThreeFour = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md justify-text">
          <Row className="justify-content-left">
            <Col>
              <h2>5.3.4 Valor presente neto (VPN) o valor actual neto (VAN)</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                El VPN o VAN es un método de evaluación de proyectos que toma en
                cuenta el valor del dinero en el tiempo. Se puede definir como
                el valor monetario que resulta de restar la suma de los flujos
                descontados del proyecto a la inversión inicial. Es decir:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`VAN={{I}_{0}}+\frac{{VF}_{1}}{{(1+i)}^{1}}+\frac{{VF}_{2}}{{(1+i)}^{2}}+\frac{{VF}_{3}}{{(1+i)}^{3}}+ \ldots +\frac{{VF}_{n}}{{(1+i)}^{n}}`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <MathComponent display={false} tex={String.raw`VF=`} />
              <span>
                Representa los flujos de caja o de efectivo esperados en cada
                periodo
              </span>
              <br />
              <MathComponent display={false} tex={String.raw`{{I}_{0}}=`} />
              <span>Valor del desembolso inicial de la inversión</span>
              <br />
              <MathComponent display={false} tex={String.raw`n=`} />
              <span>Número de períodos</span>
              <br />
              <MathComponent display={false} tex={String.raw`i=`} />
              <span>
                Tasa de descuento, costo de capital, tasa mínima aceptable de
                rendimiento (TMAR) o tasa de rendimiento mínima aceptable
                (TREMA).
              </span>
              <br />
              <p>
                <b>Nota:</b> El cálculo del VAN depende de la tasa mínima
                aceptable de rendimiento (TMAR) que se establezca para el
                proyecto en cuestión.
              </p>
              <p>
                Los criterios de decisión del VAN se muestran en la tabla 5.2
              </p>
            </Col>
          </Row>
          <Row className="vertical-align-rows justify-content-center">
            <Col sm={8}>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Situación</th>
                    <th>Interpretación del VAN</th>
                    <th>Decisión</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>VAN&gt;0</td>
                    <td>
                      Representa la cantidad de dinero que queda después de
                      recuperar la inversión y la tasa mínima de rendimiento.
                    </td>
                    <td>El proyecto se acepta</td>
                  </tr>
                  <tr>
                    <td>VAN=0</td>
                    <td>
                      Solo se recupera la inversión y la tasa mínima de
                      rendimiento.
                    </td>
                    <td>Indiferente</td>
                  </tr>
                  <tr>
                    <td>VAN&gt;0</td>
                    <td>
                      Representa la cantidad de dinero faltante para recuperar
                      la inversión y la tasa mínima de rendimiento.
                    </td>
                    <td>El proyecto se rechaza</td>
                  </tr>
                </tbody>
              </Table>
              <p>Fuente: Angulo (2016).</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Ejemplo:</b>
              </p>
              <p>
                Pensemos que deseas invertir 50,000 en un proyecto que tiene una
                duración de 3 años y una tasa de descuento (que suele ser el
                costo de capital) del 10%; te ofrecen dos alternativas de
                inversión (proyecto A y proyecto B), a continuación encontrarás
                los datos para cada uno de dichos proyectos:
              </p>
            </Col>
          </Row>
          <Row className="vertical-align-rows justify-content-center">
            <Col sm={9}>
              <p>Proyecto A</p>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Concepto</th>
                    <th colSpan={4}>Período</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Ingresos</td>
                    <td></td>
                    <td>60,000</td>
                    <td>60,000</td>
                    <td>70,000</td>
                  </tr>
                  <tr>
                    <td>Egresos</td>
                    <td>
                      <u>50,000</u>
                    </td>
                    <td>
                      <u>30,000</u>
                    </td>
                    <td>
                      <u>40,000</u>
                    </td>
                    <td>
                      <u>45,000</u>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>FNE (ingresos menos egresos)</b>
                    </td>
                    <td>
                      <b>-50,000</b>
                    </td>
                    <td>
                      <b>30,000</b>
                    </td>
                    <td>
                      <b>20,000</b>
                    </td>
                    <td>
                      <b>25,000</b>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <p className="m-v-space">Proyecto B</p>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Concepto</th>
                    <th colSpan={4}>Período</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Ingresos</td>
                    <td></td>
                    <td>60,000</td>
                    <td>70,000</td>
                    <td>60,000</td>
                  </tr>
                  <tr>
                    <td>Egresos</td>
                    <td>
                      <u>50,000</u>
                    </td>
                    <td>
                      <u>30,000</u>
                    </td>
                    <td>
                      <u>45,000</u>
                    </td>
                    <td>
                      <u>40,000</u>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>FNE (ingresos menos egresos)</b>
                    </td>
                    <td>
                      <b>-50,000</b>
                    </td>
                    <td>
                      <b>30,000</b>
                    </td>
                    <td>
                      <b>25,000</b>
                    </td>
                    <td>
                      <b>20,000</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                A simple vista ¿en cuál de los dos proyectos decidirías invertir
                tus ahorros?
              </p>
              <ol>
                <li>Proyecto A</li>
                <li>Proyecto B</li>
                <li>Es indistinto</li>
              </ol>
              <p>
                Para identificar qué proyecto es más conveniente vamos a
                utilizar la técnica del VAN o VPN.
              </p>
              <p>
                Bien, determinemos el VAN para cada uno de los proyectos, para
                una mayor claridad utilizaremos la línea de flujo de efectivo
                así como la fórmula del VAN
              </p>
              <p>
                <mark>Imaaaagen</mark>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`VAN={{I}_{0}}+\frac{{VF}_{1}}{{(1+i)}^{1}}+\frac{{VF}_{2}}{{(1+i)}^{2}}+\frac{{VF}_{3}}{{(1+i)}^{3}}+ \ldots +\frac{{VF}_{n}}{{(1+i)}^{n}}`}
              />
              <MathComponent
                tex={String.raw`VAN=-50,000+\frac{30,000}{{(1+0.10)}^{1}}+\frac{20,000}{{(1+0.10)}^{2}}+\frac{25,000}{{(1+0.10)}^{3}}`}
              />
              <MathComponent
                tex={String.raw`VAN=-50,000+27,272.73+16,528.92+18,782.87`}
              />
              <MathComponent tex={String.raw`VAN=12,584.52`} />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Al sumar los flujos descontados en el presente y restar la
                inversión inicial equivale a comparar todas las ganancias
                esperadas contra todos los desembolsos necesarios para generar
                esas ganancias, en términos de su valor equivalente en este
                momento o tiempo cero. Para aceptar un proyecto las ganancias
                deberán ser mayores que los desembolsos, lo cual dará por
                resultado que el VAN o VPN sea mayor que cero.
              </p>
              <p>
                Ahora determina el VAN para el proyecto B, la información podrás
                visualizarla en la tabla que se encuentra al principio.
              </p>
              <p>El VAN para el proyecto B es:</p>
              <ul>
                <li>13,280.19</li>
                <li>12,584.52</li>
                <li>
                  <b>12,960.19</b>
                </li>
              </ul>
              <p>
                Aplicando el método del VAN ¿Cuál de los dos proyectos
                analizados conviene más?
              </p>
              <ul>
                <li>Proyecto A</li>
                <li>Proyecto B</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FiveThreeFour;

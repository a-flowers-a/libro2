import { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import { MathComponent } from "mathjax-react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

const FourTwoThreeOne = () => {
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
              <Row>
                <Col>
                  <h2>4.2.3.1 Anualidades y programa de amortización</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Una de las aplicaciones más importantes del interés
                    compuesto es la que se relaciona con los préstamos
                    liquidables con base en anualidades (pagos iguales) a través
                    del tiempo, como por ejemplo los préstamos para la compra de
                    automóviles y los créditos bancarios e hipotecarios, entre
                    otros. Si un préstamo debe pagarse con base en montos
                    periódicos iguales (quincenales, mensuales, trimestrales,
                    anuales, etc.) se dice que es un préstamo amortizable; es
                    decir, un préstamo reembolsable mediante pagos iguales en un
                    determinado periodo de tiempo.
                  </p>
                  <p>
                    Para saber detalladamente cómo será reembolsado un préstamo
                    se realiza un programa de amortización. Éste muestra en
                    forma precisa cómo será pagado un préstamo, indicando el
                    pago requerido en cada fecha y especificando qué cantidad de
                    dicho pago se destina al pago de intereses y qué cantidad al
                    pago de capital o principal. Al proceso de saldar o liquidar
                    una deuda se le llama amortizar.
                  </p>
                  <p>
                    <span className="bold">Ejemplo.</span>Al iniciar sus
                    operaciones, una empresa pide prestados $1,000,000 a una
                    institución bancaria a una tasa de interés anual del 24%, y
                    le conceden un plazo de seis meses para cubrir el adeudo.
                  </p>
                  <p>
                    En el caso de que esta empresa pagara cantidades iguales
                    para cada uno de los periodos de pago determinar:
                  </p>
                  <ol type="a">
                    <li>El valor de los pagos iguales (anualidad).</li>
                    <li>La tabla de amortización del préstamo.</li>
                  </ol>
                  <p>
                    Lo primero que se debe hacer es determinar el monto de la
                    cantidad igual que se pagará cada mes.
                  </p>
                  <p>
                    La fórmula que se utiliza, en el caso de las anualidades
                    ordinarias es:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent
                    tex={String.raw`{PA}=P\frac{(1+i)^{n}-1}{i}`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Donde:</p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent display={false} tex={String.raw`{P}=`} />
                  <span>principal</span>
                  <br />
                  <MathComponent display={false} tex={String.raw`PA=`} />
                  <span>Valor de la anualidad y pago</span>
                  <br />
                  <MathComponent display={false} tex={String.raw`i=`} />
                  <span> tasa de interés</span>
                  <br />
                  <MathComponent display={false} tex={String.raw`n=`} />
                  <span>Número de plazos o períodos</span>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Tomando en cuenta el ejemplo, tenemos los siguientes datos:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent tex={String.raw`{P}=1,000,000`} />
                  <MathComponent tex={String.raw`i=\frac{0.24}{12}=0.02`} />
                  <MathComponent tex={String.raw`n=6`} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Sustituyendo los datos en la fórmula tenemos:</p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent
                    tex={String.raw`{PA}=P\frac{(1+i)^{n}-1}{i}`}
                  />
                  <MathComponent
                    tex={String.raw`=\frac{(1,000,000)(0.02)[({1+0.02}^{6})]}{({1+0.02}^{6})-1}`}
                  />
                  <MathComponent tex={String.raw`=212,158.39`} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Con esto se construye la tabla de amortización del pago de
                    la deuda para determinar qué parte de PA = $212,158.39
                    pagada cada periodo se destina a pagar el préstamo y qué
                    cantidad corresponde al pago de intereses.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table striped responsive bordered size="sm">
                    <thead>
                      <tr className="center-text">
                        <th colSpan={2}>Periodo</th>
                        <th>Interés</th>
                        <th>Anualidad (pago igual)</th>
                        <th>Pago principal (amortización)</th>
                        <th>Deuda despúés de pago o saldo insoluto</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0</td>
                        <td>15/01/20XX</td>
                        <td colSpan={3}></td>
                        <td>1,000,000.00</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>15/02/20XX</td>
                        <td>$20,000.00</td>
                        <td>$212,158.39</td>
                        <td>$192,158.39</td>
                        <td>$807,841.61</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>15/03/20XX</td>
                        <td>$16,156.83</td>
                        <td>$212,158.39</td>
                        <td>$196,001.56</td>
                        <td>$611,840.04</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>15/04/20XX</td>
                        <td>$12,236.80</td>
                        <td>$212,158.39</td>
                        <td>$199,921.59</td>
                        <td>$411,918.45</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>12/05/20XX</td>
                        <td>$8,238.36</td>
                        <td>$212,158.39</td>
                        <td>$203,920.03</td>
                        <td>$207,998.43</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>15/06/20XX</td>
                        <td>$4,159.96</td>
                        <td>$212,158.39</td>
                        <td>$207,998.43</td>
                        <td>$0.00</td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <b>Sumas</b>
                        </td>
                        <td>$60,791.95</td>
                        <td>$1,060,791.95</td>
                        <td>$1,000,000</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col className="center-text">
                  <span className="bold">Tabla 3. Tabla de amortización</span>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p>Explicación del llenado del programa de amortización</p>
                  <p className="bold">Columna A</p>
                  <p>
                    El período cero corresponde al presente, al momento en el
                    que se adquiere la deuda. Los demás períodos corresponden a
                    las fechas en las que se harán cada uno de los pagos hasta
                    liquidar el préstamo.
                  </p>
                  <p className="bold">Columna B</p>
                  <p>
                    El interés del período se obtiene multiplicando el saldo
                    insoluto del periodo anterior (que corresponde al saldo
                    final de ese período y por tanto al inicial para el periodo
                    que se trate) por la tasa de interés, en el ejemplo: para el
                    período 1 el interés es igual a (1,000,000) (0.02) = 20,00;
                    para el período 2 el interés es igual a (807,841.61) (0.02)
                    = 16,156.83 y así sucesivamente.
                  </p>
                  <p className="bold">Columna C</p>
                  <p>
                    La anualidad, renta o cuota es el pago igual que se hará de
                    manera periódica. Una parte de la anualidad es para pagar
                    los intereses y lo que reste es para ir pagando a principal
                    (la deuda).
                  </p>
                  <p className="bold">Columna D</p>
                  <p>
                    El pago a principal o a capital o amortización del préstamo
                    es la cantidad que se está pagando a la deuda; en el
                    ejemplo, de los 212,158.39 que se están pagando en cada
                    período una parte son para cubrir intereses y la otra para
                    ir pagando la deuda. Para calcular el pago a capital se
                    restan los intereses a la anualidad, así en el período 1 se
                    están abonando a la deuda $192,158.39 que resultó de la
                    siguiente operación (212,158.39 – 20,000) = 192,158.39
                  </p>
                  <p className="bold">Columna E</p>
                  <p>
                    La deuda después del pago o saldo insoluto corresponde a la
                    deuda al final de cada período, que también corresponde a la
                    deuda al inicio del periodo siguiente siendo la base para el
                    cálculo de intereses.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FourTwoThreeOne;

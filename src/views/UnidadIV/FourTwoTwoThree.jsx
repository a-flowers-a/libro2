import { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const FourTwoTwoThree = () => {
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
                  <h2>4.2.2.3 Anualidades y programa de amortización</h2>
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
                    operaciones, una empresa pide prestados $1,500,000 a una
                    institución bancaria, a una tasa de interés anual de 12%, y
                    le conceden un plazo de seis meses para cubrir el adeudo. El
                    interés que se paga se capitaliza mensualmente sobre saldos
                    insolutos.
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
                    tex={String.raw`{{VP}_{An}}=PA\frac{1-\frac{1}{{(1+i)}{n}}}{i}`}
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
                  <MathComponent
                    display={false}
                    tex={String.raw`{{VP}_{An}}=`}
                  />
                  <span>Valor presente o principal(cantidad prestada)</span>
                  <br />
                  <MathComponent display={false} tex={String.raw`PA=`} />
                  <span>Valor del pago igual o anualidad</span>
                  <br />
                  <MathComponent display={false} tex={String.raw`i=`} />
                  <span> tasa de interés</span>
                  <br />
                  <MathComponent display={false} tex={String.raw`n=`} />
                  <span>Número de plazos para liquidar el préstamo</span>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Para conocer el valor de la anualidad despejamos PA de la
                    fórmula anterior:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent
                    tex={String.raw`{{VP}_{An}}=PA\frac{1-\frac{1}{{(1+i)}{n}}}{i}`}
                  />
                  <MathComponent
                    tex={String.raw` \Rightarrow PA=\frac{{VP}_{An}{(1+i)}^{n}(i)}{{(1+i)}^{n}-1}`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Datos:</p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent tex={String.raw`{{VP}_{An}}=1,500,000`} />
                  <MathComponent tex={String.raw`i=\frac{0.12}{12}`} />
                  <MathComponent tex={String.raw`n=6`} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table striped bordered responsive size="sm">
                    <thead>
                      <tr className="center-text">
                        <th>VF de una anualidad</th>
                        <th>VP de una anualidad</th>
                        <th>Valor de la anualidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <MathComponent
                            tex={String.raw`{VF}_{An}=PA\frac{{(1+i)}^{n}-1}{i}`}
                          />
                        </td>
                        <td>
                          <MathComponent
                            tex={String.raw`{{VP}_{An}}=PA\frac{1-\frac{1}{{(1+i)}{n}}}{i}`}
                          />
                        </td>
                        <td>
                          <MathComponent
                            tex={String.raw`PA=P\frac{{i(1+i)}^{n}}{(1+i)^{n}-1}`}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="bold">Revisar despeje y fórmula</p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent
                    tex={String.raw`PA=\frac{{VP}_{An}i{(1+i)}^{n}}{(1+i)^{n}-1}`}
                  />
                  <MathComponent
                    tex={String.raw`=\frac{(1,500,000)(0.01)[({1+0.01}^{6})]}{({1+0.01}^{6})-1}`}
                  />
                  <MathComponent tex={String.raw`=258,822.55`} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Con esto se construye la tabla de amortización del pago de
                    la deuda para determinar qué parte de PA = $639,603 pagada
                    cada periodo se destina a pagar el préstamo y qué cantidad
                    corresponde al pago de intereses.{" "}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Table striped responsive bordered size="sm">
                    <thead>
                      <tr className="center-text">
                        <th>Fecha</th>
                        <th>Periodo</th>
                        <th>Saldo inicial</th>
                        <th>Intereses</th>
                        <th>Abono a capital (amortización)</th>
                        <th>Anualidad</th>
                        <th>Saldo final</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>26/05/2021</td>
                        <td>0</td>
                        <td colSpan="4"></td>
                        <td>1,500,000.00</td>
                      </tr>
                      <tr>
                        <td>26/11/2021</td>
                        <td>1</td>
                        <td>1,500,000.00</td>
                        <td>15,000.00</td>
                        <td>243,822.55</td>
                        <td>258,822.55</td>
                        <td>1,256,177.45</td>
                      </tr>
                      <tr>
                        <td>26/05/2022</td>
                        <td>2</td>
                        <td>1,256,177.45</td>
                        <td>12,561.77</td>
                        <td>246,260.78</td>
                        <td>258,822.55</td>
                        <td>1,009,916.67</td>
                      </tr>
                      <tr>
                        <td>26/11/2022</td>
                        <td>3</td>
                        <td>1,009,916.67</td>
                        <td>10,099.17</td>
                        <td>248,723.38</td>
                        <td>258,822.55</td>
                        <td>761,193.29</td>
                      </tr>
                      <tr>
                        <td>26/05/2023</td>
                        <td>4</td>
                        <td>761,193.29</td>
                        <td>7,611.93</td>
                        <td>251,210.62</td>
                        <td>258,822.55</td>
                        <td>509,982.67</td>
                      </tr>
                      <tr>
                        <td>26/11/2023</td>
                        <td>5</td>
                        <td>509,982.67</td>
                        <td>5,099.83</td>
                        <td>253,722.72</td>
                        <td>258,822.55</td>
                        <td>256,259.95</td>
                      </tr>
                      <tr>
                        <td>26/05/2024</td>
                        <td>6</td>
                        <td>2,562.60</td>
                        <td>256,259.95</td>
                        <td>253,722.72</td>
                        <td>258,822.55</td>
                        <td>0</td>
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
                  <Table striped responsive bordered size="sm">
                    <thead>
                      <tr className="center-text">
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Periodo</td>
                        <td>Interés</td>
                        <td>Anualidad(pago igual)</td>
                        <td>Pago a principal (amortización)</td>
                        <td>Deuda después de pago o saldo insoluto</td>
                      </tr>
                      <tr>
                        <td>0</td>
                        <td colSpan="3"></td>
                        <td>$1,500,000</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>$480,000</td>
                        <td>$639,603</td>
                        <td>$0,159,603</td>
                        <td>$1,340,397</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>$428,927</td>
                        <td>$639,603</td>
                        <td>$0,210,676</td>
                        <td>$1,129,721</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>$361,511</td>
                        <td>$639,603</td>
                        <td>$0,278,092</td>
                        <td>$0,851,629</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>$272,521</td>
                        <td>$639,603</td>
                        <td>$0,367,082</td>
                        <td>$0,484,547</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>$155,055</td>
                        <td>$639,603</td>
                        <td>$0,484,547</td>
                        <td>$0,</td>
                      </tr>
                      <tr>
                        <td>Sumas</td>
                        <td>1,968,015</td>
                        <td>3,468,015</td>
                        <td colSpan="2">$1,500,000</td>
                      </tr>
                    </tbody>
                  </Table>
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
                    período 1 el interés es igual a (1,500,000) (0.32) =
                    480,000; para el período 2 el interés es igual a (1,340,397)
                    (0.32) = 428,927.04 y así sucesivamente
                  </p>
                  <p className="bold">Columna C</p>
                  <p>
                    La anualidad, renta o cuota es el pago igual que se hace de
                    manera periódica, mismo que se calculó con la fórmula:{" "}
                  </p>
                  <Row className="justify-content-center m-b-space">
                    <Col md={10}>
                      <MathComponent
                        tex={String.raw`PA=\frac{{VP}_{An}i{(1+i)}^{n}}{(1+i)^{n}-1}`}
                      />
                      <MathComponent
                        tex={String.raw`=\frac{(1,500,000)(0.32)[({1+0.32}^{5})]}{({1+0.32}^{5})-1}`}
                      />
                      <MathComponent
                        tex={String.raw`=639,602.8951 \approx 639,603`}
                      />
                    </Col>
                  </Row>
                  <p className="bold">Columna D</p>
                  <p>
                    El pago a principal o a capital o amortización del préstamo
                    es la cantidad que se está pagando a la deuda; en el
                    ejemplo, de los 639,603 que se están pagando en cada período
                    una parte son para cubrir intereses y la otra para ir
                    pagando la deuda. Para calcular el pago a capital se restan
                    los intereses a la anualidad, así en el período 1 se están
                    abonando a la deuda 159,603 que resulto de la siguiente
                    operación (639,603 – 480,000) = 159,603.
                  </p>
                  <p className="bold">Columna E</p>
                  <p>
                    La deuda después del pago o saldo insoluto corresponde a la
                    deuda al final de cada período.
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

export default FourTwoTwoThree;

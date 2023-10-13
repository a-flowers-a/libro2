import { useEffect } from "react";
import { Row, Col, Container, Image, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const FourTwoTwo = () => {
  const img422 = "../../assets/images/422.png";
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
                  <h2>4.2.2 Valor presente de anualidades ordinarias</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Utilizando los datos del ejemplo anterior (visto en valor
                    futuro de anualidades ordinarias), ahora vamos a determinar
                    el valor presente de la anualidad ordinaria.
                  </p>
                  <p>
                    Replanteamos el problema considerando los datos del ejemplo
                    anterior:
                  </p>
                  <p>
                    Al final de cada año inviertes $10,000 durante los próximos
                    4 años a una tasa de interés del 10% anual ¿cuál es el valor
                    presente de la anualidad ordinaria?
                  </p>
                  <p>Para su cálculo cuentas con al menos dos opciones: </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ol>
                    <li>
                      Utilizando la línea de flujo de efectivo y la fórmula de
                      valor presente como si se tratara de cantidades únicas{" "}
                    </li>
                    <li>
                      Fórmula de valor presente de una anualidad ordinaria
                    </li>
                  </ol>
                  <ol>
                    <li>
                      Cálculo del valor presente de anualidades ordinarias
                      utilizando la línea de flujo de efectivo y la fórmula de
                      valor presente somo si se tratara de cantidades únicas
                    </li>
                  </ol>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={9}>
                  <Image
                    className="full-img"
                    src={img422}
                    alt="Valor presente de anualidades ordinarias utilizando la línea de flujo de efectivo"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    El valor presente que se muestra en la figura anterior, se
                    obtuvo de la siguiente forma:
                  </p>
                  <Row className="justify-content-center m-b-space">
                    <Col md={10}>
                      <MathComponent
                        tex={String.raw`VP=\frac{10,000}{(1.10)^{1}}=9,090.90`}
                      />
                      <MathComponent
                        tex={String.raw`VP=\frac{10,000}{(1.10)^{2}}=8,264.46`}
                      />
                      <MathComponent
                        tex={String.raw`VP=\frac{10,000}{(1.10)^{3}}=7,513.14`}
                      />
                      <MathComponent
                        tex={String.raw`VP=\frac{10,000}{(1.10)^{4}}=6,830.13`}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    2. Utilizando la fórmula de Valor Presente de una anualidad
                    ordinaria.
                  </p>
                  <Row className="justify-content-center m-b-space">
                    <Col md={10}>
                      <MathComponent
                        tex={String.raw`{{VP}_{An}}=PA\left\{ \frac{1-\frac{1}{(1+i)^{n}}}{i}\right\}`}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Donde:</p>
                  <div className="no-marg-bottom inline-formula">
                    <MathComponent tex={String.raw`{VP}_{An}`} />
                    <p>
                      = Valor Presente de una Anualidad Ordinaria a un Periodo
                      de Tiempo
                    </p>
                  </div>
                  <p className="no-marg-bottom">
                    <span className="bold">PA</span> = Valor del Pago Igual o
                    Anualidad
                  </p>
                  <p className="no-marg-bottom">
                    <span className="bold">
                      <i>i</i>
                    </span>
                    = Tasa de Descuento <i>i</i>
                  </p>
                  <p>
                    <span className="bold">n</span> = Periodo de Tiempo
                  </p>
                  <p>Sustituyendo los valores en la fórmula tenemos:</p>
                  <Row className="justify-content-center m-b-space">
                    <Col md={10}>
                      <MathComponent
                        tex={String.raw`{{VP}_{An}}=10,000\frac{1-\frac{1}{(1+0.10)^{4}}}{0.10}`}
                      />
                      <MathComponent tex={String.raw`{{VP}_{An}}=31,698.63`} />
                    </Col>
                  </Row>
                  <p>
                    El resultado: $31,698.63 que corresponde al valor presente
                    considerando todas las anualidades juntas.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 className="light-navy">
                    Fórmulas anualidades ordinarias
                  </h3>
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
                        <td className="red">
                          <MathComponent
                            tex={String.raw`{{VF}_{An}}=PA\frac{(1+i)^{n}-1}{i}`}
                          />
                        </td>
                        <td className="red">
                          <MathComponent
                            tex={String.raw`{{VP}_{An}}=PA\frac{1-\frac{1}{(1+i)^{n}}}{i}`}
                          />
                        </td>
                        <td className="red">
                          <MathComponent
                            tex={String.raw`PA=P(\frac{i(1+i)^{n}}{(1+i)^{n}-1})`}
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
                  <p className="no-marg-bottom">
                    <span className="bold">VFan</span> = Valor futuro de la
                    anualidad
                  </p>
                  <p className="no-marg-bottom">
                    <span className="bold">VPan</span> = Valor presente de la
                    anualidad
                  </p>
                  <p className="no-marg-bottom">
                    <span className="bold">PA</span> = Pago igual (anualidad)
                  </p>
                  <p className="no-marg-bottom">
                    <span className="bold">P</span> = Principal, capital
                  </p>
                  <p className="no-marg-bottom">
                    <span className="bold">i</span> = Tasa de interés
                  </p>
                  <p>
                    <span className="bold">n</span> = Periodos de tiempo
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

export default FourTwoTwo;

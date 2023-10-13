import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const FourTwoOne = () => {
  const img421 = "../../assets/images/421.jpg";
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
                  <h2>4.2.1 Valor futuro de anualidades ordinarias</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    <span className="bold">Ejemplo.</span> Al final de cada año
                    inviertes $10,000 durante los próximos 4 años a una tasa de
                    interés del 10% anual. ¿Cuánto dinero obtendrás al finalizar
                    el año 4?
                  </p>
                  <p>Este problema se puede resolver de diferentes formas:</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ol>
                    <li>
                      <p>Utilizando la línea de flujo de efectivo</p>
                      <Row className="justify-content-center m-b-space">
                        <Col md={8}>
                          <Image
                            className="full-img"
                            src={img421}
                            alt="Valor futuro de anualidades ordinarias"
                          />
                        </Col>
                      </Row>
                      <p>
                        Expliquemos como se obtuvieron los cálculos en la
                        anterior linea de flujo de efectivo invertimos $10,000
                        pesos al final del periodo 1, esos $10,000 pesos
                        invertidos a una tasa del 10% anual ganan $1,100 pesos
                        con lo que al final del período 2 se tendrían $11,000
                        pesos; al final del período 2 se invierten otros $10,000
                        pesos sumando un total de $21,000 pesos. Dicha cantidad
                        se reinvierte y gana $2,100 pesos, entonces al final del
                        período 3 se tienen $23,100 pesos que se suman a los
                        $10,000 pesos que se están invirtiendo cada año dando un
                        total de $33,100 pesos cantidad que se invierte y gana
                        $3,310 dando un total de $36,410 pesos al final del
                        período 4 y se le suman los $10,000 pesos (que ya no
                        ganan intereses) en razon de que termina el plazo de la
                        inversión, de tal manera que al final se tienen $46,410
                        pesos.
                      </p>
                    </li>
                    <li>
                      <p>
                        Calculando el valor futuro de los pagos individuales y
                        después sumarlos
                      </p>
                      <Row className="justify-content-center m-b-space">
                        <Col md={10}>
                          <MathComponent
                            tex={String.raw`VF_{n}= VP(1+i)^{n}`}
                          />
                        </Col>
                      </Row>
                      <p>El VF del período 1 se capitaliza en 3 periodos</p>
                      <Row className="justify-content-center m-b-space">
                        <Col md={10}>
                          <MathComponent
                            tex={String.raw`VF_{1}= 10,000(1+i)^{3}=13,310`}
                          />
                        </Col>
                      </Row>
                      <p>El VF del período 2 se capitaliza en 2 periodos</p>
                      <Row className="justify-content-center m-b-space">
                        <Col md={10}>
                          <MathComponent
                            tex={String.raw`VF_{2}= 10,000(1+i)^{2}=12,100`}
                          />
                        </Col>
                      </Row>
                      <p>El VF del período 3 se capitaliza en 1 periodo</p>
                      <Row className="justify-content-center m-b-space">
                        <Col md={10}>
                          <MathComponent
                            tex={String.raw`VF_{3}= 10,000(1+i)^{1}=11,000`}
                          />
                        </Col>
                      </Row>
                      <p>El VF del período 4 no se capitaliza</p>
                      <Row className="justify-content-center m-b-space">
                        <Col md={10}>
                          <MathComponent
                            tex={String.raw`VF_{4}= 10,000(1+i)^{0}=10,000`}
                          />
                          <MathComponent tex={String.raw`Total=46,410`} />
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <p>
                        Utilizando la fórmula de Valor futuro de una anualidad
                        ordinaria
                      </p>
                      <Row className="justify-content-center m-b-space">
                        <Col md={10}>
                          <MathComponent
                            tex={String.raw`{VF_{An}}=PA(\frac{(1+i)^{n}-1}{i})`}
                          />
                          <MathComponent
                            tex={String.raw`=10,000(\frac{(1+0.10)^{4}-1}{0.10})`}
                          />
                          <MathComponent tex={String.raw`= \$46,410`} />
                        </Col>
                      </Row>
                    </li>
                  </ol>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="light-navy">
                    Ejemplo Valor futuro de una anualidad
                  </p>
                  <p>
                    Imagina que a la edad de 20 años empiezas a realizar
                    depósitos anuales de $5,000 en una cuenta de ahorro que gana
                    un 5% anual. Al final de 40 años, cuando tengas 60 años
                    habrás ahorrado ($5,000) (40años) = 200,000; sin embargo, al
                    retirar el dinero recibirás:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <MathComponent
                    tex={String.raw`{VF_{An}}=PA(\frac{(1+i)^{n}-1}{i})`}
                  />
                  <MathComponent
                    tex={String.raw`=5,000(\frac{(1+0.05)^{40}-1}{0.05})`}
                  />
                  <MathComponent tex={String.raw`= \$ 603,998.8712`} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Así, el valor del dinero en el tiempo habrá permitido que
                    tus ahorros generen rendimientos compuestos durante 40 años.
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

export default FourTwoOne;

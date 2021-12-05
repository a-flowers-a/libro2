import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourTwoOne = () => {
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
                        <Col md={10}>
                          <span className="red">FOOOOOOOOORMULA</span>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <p>
                        Calculando el valor futuro de los pagos individuales y
                        después sumarlos
                      </p>
                      <Row className="justify-content-center m-b-space">
                        <Col md={10}>
                          <span className="red">FOOOOOOOOORMULA</span>
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
                          <span className="red">FOOOOOOOOORMULA</span>
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
                  <span className="red">FOOOOOOOOORMULA</span>
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

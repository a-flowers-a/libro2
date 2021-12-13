import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourOne = () => {
  const FlujoDeEfectivo = "../../assets/images/FlujosDeEfectivo.png";
  const ValorPresente = "../../assets/images/ValorPresente.png";
  const ValorFuturo = "../../assets/images/ValorFuturo.png";

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
                  <h2>4.1 Valor del dinero en el tiempo</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    El valor del dinero en el tiempo es una herramienta
                    importante que sirve, como su nombre lo indica, para
                    determinar el valor que tiene el dinero a través del tiempo;
                    parte de la premisa de que el dinero actual tiene un valor
                    mayor que el que se recibirá en una fecha futura; es decir,
                    es mejor recibir dinero el día de hoy que recibirlo en el
                    futuro, debido a que hoy lo puedes invertir y ganar
                    rendimientos.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Antes de continuar es importante que conozcas el significado
                    de los siguientes términos:
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">Valor presente (VP):</span>
                    valor actual del dinero
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col sm={6}>
                  <Image src={ValorPresente} className="full-img" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">Valor futuro (VF):</span>
                    El valor de una suma de dinero actual en una fecha futura,
                    tomando en cuenta una tasa de interés (i) y un número de
                    períodos de tiempo hasta que llegue esa fecha futura.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col sm={6}>
                  <Image src={ValorFuturo} className="full-img" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">Capitalización:</span>
                    Consiste en agregar a un capital inicial los rendimientos
                    por él producidos.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">Principal o capital: </span>
                    Cantidad de dinero sobre la que se paga intereses.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">Flujo de efectivo:</span>
                    Entradas y salidas de dinero; los flujos de efectivo pueden
                    presentarse como una cantidad única, una anualidad o una
                    perpetuidad, tal como se muestra en la figura:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col sm={8}>
                  <Image src={FlujoDeEfectivo} className="full-img" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">Cantidad única:</span>
                    Cantidad global que se tiene actualmente (valor presente) o
                    que se espera en una fecha futura (valor futuro); es
                    cualquier cantidad que no se repite en forma periódica.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">Anualidad:</span>
                    Son cantidades iguales que se repiten periódicamente durante
                    un determinado tiempo. No necesariamente son pagos anuales,
                    pueden ser quincenales, mensuales, bimestrales etc. Se
                    tienen dos tipos de anualidades:
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ul>
                    <li>
                      Anualidad ordinaria, vencida o diferida: Anualidad cuyos
                      pagos ocurren al final del periodo, son las más utilizadas
                      en Finanzas.
                    </li>
                    <li>
                      Anualidad anticipada: Anualidad cuyos pagos ocurren al
                      inicio de cada periodo.
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <span className="light-navy">Perpetuidad:</span>
                    Serie de pagos iguales que se espera que continúe para
                    siempre.
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

export default FourOne;

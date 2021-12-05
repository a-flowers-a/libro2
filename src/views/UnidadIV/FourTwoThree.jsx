import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourTwoThree = () => {
  const img423 = "../../assets/images/423.png";
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
                  <h2>
                    4.2.3 Valor futuro y valor presente de anualidades
                    anticipadas
                  </h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    <span className="bold">Ejemplo.</span>Al
                    <span className="light-navy"> inicio</span> de cada año
                    invertimos $10,000 durante los próximos 4 años a una tasa de
                    interés del 10% anual. ¿Cuánto dinero se obtiene al
                    finalizar el periodo de inversión?
                  </p>
                  <p>
                    De igual manera que en los ejercicios anteriores nos
                    apoyaremos en la línea de flujo de efectivo (
                    <span className="bold">Figura 42</span>), en la que se puede
                    apreciar que nuestra primera inversión de $10,000 (la que se
                    realiza en el año 0) ganará intereses durante los años 1, 2,
                    3 y 4; la inversión que se realiza en el año 1 ganará
                    intereses durante los años 2,3 y 4; y así sucesivamente;
                    finalmente, la inversión que se hace en el año 3 gana
                    intereses durante un año.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={9}>
                  <Image
                    className="full-img"
                    src={img423}
                    alt="Línea de flujo de efectivo"
                  />
                  <div className="img-source center-text">
                    <p className="bold">
                      Figura 31. Línea de flujo de efectivo
                    </p>
                    <p>
                      Fuente: Elaboración propia, con base en la bibliografía
                      consultada.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={10}>
                  <span className="red">FOOOOOOOOORMULA</span>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Para simplificar el cálculo del valor futuro de las 4
                    anualidades de $10,000 (cada una realizadas al inicio del
                    año), considerando que ganan el 10% anual, utilizaremos la
                    siguiente fórmula:
                  </p>
                  <Row className="justify-content-center m-b-space">
                    <Col md={10}>
                      <span className="red">FOOOOOOOOORMULA</span>
                    </Col>
                  </Row>
                  <Row className="justify-content-center m-b-space">
                    <Col md={10}>
                      <span className="red">FOOOOOOOOORMULA</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Si se conoce el valor futuro de una anualidad anticipada y
                    se desconoce el valor presente, éste se puede calcular, lo
                    único que tendrás que hacer es despejar la variable de la
                    fórmula anterior, quedando así:
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Finalmente, es importante hacer énfasis en las siguientes
                    consideraciones:
                  </p>
                  <ul>
                    <li>
                      La diferencia entre una anualidad ordinaria y una
                      anticipada es que, en ésta última cada uno de los pagos
                      genera intereses durante un año adicional
                    </li>
                    <li>
                      Las anualidades anticipadas regularmente se aplican a los
                      planes de ahorro en anualidades y a los arreglos de rentas
                      y arrendamiento en los cuales el arrendatario hace el pago
                      inicial de la renta al principio del contrato.
                    </li>
                  </ul>
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

export default FourTwoThree;

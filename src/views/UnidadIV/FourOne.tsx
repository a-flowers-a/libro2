import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourOne = () => {
  const ValorPresente = "../../assets/images/ValorPresente.png";

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
                    El valor del dinero a través del tiempo es uno de los
                    aspectos más importantes de las finanzas; vamos a explicarlo
                    de manera sencilla, si por ejemplo en este momento tienes
                    $100 (cien pesos), valen más el día de hoy que en el futuro
                    y esto se debe básicamente a que el día de hoy los puedes
                    invertir y ganar rendimientos. Sin embargo, esos mismos $100
                    (cien pesos) recibidos en el futuro no tedrán el mismo poder
                    adquisitivo que tienen el día de hoy, dicho cambio en el
                    valor del dinero tiene como principal causa el efecto
                    inflacionario sobre los bienes y servicios que compramos. De
                    tal manera que, “la relación que existe entre el tiempo, el
                    interés y el poder de compra del dinero se conoce como valor
                    del dinero en el tiempo” (Vidaurri, 2020, p.134)
                  </p>
                  <p>
                    A medida que vayas avanzando en los subtemas de este RDD
                    irás comprendiendo mejor este interesante tema.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col sm={6}>
                  <Image src={ValorPresente} className="full-img" />
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

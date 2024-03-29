import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { MathComponent } from "mathjax-react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourOneOneTwo = () => {
  const img4112 = "../../assets/images/4111.jpg";
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
                  <h2>4.1.1.2 Valor presente de cantidades únicas</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Ya sabes calcular el valor futuro de una cantidad única,
                    para encontrar el valor presente solo tienes que despejar,
                    por ejemplo, ¿cuánto tendrías que depositar hoy en una
                    cuenta que paga el 10% de interés anual para recibir, al
                    término de 3 años $100,000?
                  </p>
                  <p>Tenemos la fórmula de valor futuro </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col sm={10}>
                  <MathComponent
                    className={"full-img"}
                    tex={String.raw`VF_{n}= VP(1+i)^{n}`}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Despejamos el valor presente</p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col sm={10}>
                  <MathComponent
                    className={"full-img"}
                    tex={String.raw`VP= \frac{VF_{n}}{(1+i)^{n}}`}
                  />
                  <MathComponent
                    className={"full-img"}
                    tex={String.raw`=\frac{133,100}{(1+0.10)^{3}}`}
                  />
                  <MathComponent
                    className={"full-img"}
                    tex={String.raw`=\frac{133,100}{1.331}=100,000`}
                  />
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Al proceso de encontrar los valores presentes también se le
                    conoce como descuento de flujos de efectivo, dicho proceso
                    es lo opuesto a la capitalización (
                    <span className="red">ver figura</span>). Y da respuesta a
                    la pregunta: “si puedo ganar un porcentaje i sobre mi
                    dinero, por ejemplo el 10% ¿cuánto es lo máximo que estaría
                    dispuesto(a) a pagar ahora por la oportunidad de recibir un
                    valor futuro de dinero en n períodos a partir de hoy? Y la
                    respuesta sería 100,000 (
                    <span className="red">ver figura</span>)
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={9}>
                  <Image
                    className="full-img"
                    src={img4112}
                    alt="Figura Flujos de efectivo"
                  />
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

export default FourOneOneTwo;

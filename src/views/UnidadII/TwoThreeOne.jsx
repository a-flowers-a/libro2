import React, { useEffect } from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Image, Container } from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

function TwoThreeOne() {
  const img26 = "../../assets/images/26.png";
  const img27 = "../../assets/images/27.png";

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <h3>
            2.3.1 Estado de situación financiera (también llamado estado de
            posición financiera o balance general)
          </h3>
          <div className="justify-text">
            <p>
              Al estado de situación financiera también se le conoce como estado
              de posición financiera o balance general; es un documento
              financiero que muestra en términos monetarios el valor de los
              activos (bienes y derechos); de los pasivos (deudas y
              obligaciones), así como del capital contable (valor del
              patrimonio) de la entidad. Cabe resaltar que este documento
              financiero refleja la situación financiera de una entidad
              económica a una fecha determinada.
            </p>
            <p>
              En la figura 2.6 encontrarás algunas definiciones del estado de
              situación financiera.
            </p>
          </div>
          <Row className="justify-content-center m-v-space">
            <Col md={5}>
              <div className="center-text">
                Figura 2.6 Definiciones del estado de situación financiera
              </div>
              <Image
                className="full-img"
                src={img26}
                alt="Edo. de Situación Fin."
              />
              <div className="img-source center-text">
                Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura basada
                en la bibliografía consultada.
              </div>
            </Col>
          </Row>
          <div className="justify-text">
            <p>
              En otras palabras y como analogía, el estado de situación
              financiera es como una fotografía que tomamos en un momento en el
              tiempo, que nos da información de cómo se encuentra la empresa
              justo en ese momento en términos de qué recursos tiene para
              trabajar y a quién se los debe (figura 2.7), razón por la que el
              balance general siempre es a una fecha determinada.
            </p>
          </div>
          <Row className="justify-content-center m-v-space">
            <Col md={5}>
              <div className="center-text">
                Figura 2.7 Información que proporciona el estado de situación
                financiera
              </div>
              <Image
                className="full-img"
                src={img27}
                alt="Edo. de Situación Fin."
              />
              <div className="img-source center-text">
                Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //TwoThreeOne

export default TwoThreeOne;

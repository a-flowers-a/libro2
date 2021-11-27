import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeTwoOne = () => {
  const equilibrioMezcla1 = "../../assets/images/equilibrioMezcla1.png";
  const equilibrioMezcla2 = "../../assets/images/equilibrioMezcla2.png";
  const equilibrioMezcla3 = "../../assets/images/equilibrioMezcla3.png";
  const MCP = "../../assets/images/MCP.png";

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
              <h2>
                3.3.2.1 punto de equilibrio para una mezcla de productos sin
                utilidad
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Continuando con el ejemplo de las hamburguesas, supongamos que
                ahora venderemos hamburguesas sencillas y hamburguesas
                hawaianas. Del total de las hamburguesas vendidas al mes el 20%
                son sencillas y el 80% son hawaiana con queso
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={4}>
              <Image src={equilibrioMezcla1} className="full-img" />
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={4}>
              <Image src={equilibrioMezcla2} className="full-img" />
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={4}>
              <Image src={equilibrioMezcla3} className="full-img" />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Para calcular el punto de equilibrio utilizamos la fórmula de la
                mezcla
              </p>
              <MathComponent tex={String.raw`P.E\;mezcla=\frac{C.F}{M.C.P}`} />
              <p>Necesitamos calcular el M.C.P, se determina así:</p>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={6}>
              <Image src={MCP} className="full-img" />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeTwoOne;

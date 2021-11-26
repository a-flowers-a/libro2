import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const ThreeThreeOneOne = () => {
  const equilibrioUtilidad1 = "../../assets/images/equilibrioUtilidad1.png";
  const equilibrioUtilidad2 = "../../assets/images/equilibrioUtilidad2.png";

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
              <h2>3.3.1.1 Punto de equilibrio con un producto sin utilidad</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <Row>
                <Col>
                  <p>
                    Supongamos que queremos saber cuántas hamburguesas
                    tendríamos que vender en un lapso de un mes para no ganar ni
                    perder. Tenemos los siguientes datos:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-v-space">
                <Col sm={4}>
                  <Image src={equilibrioUtilidad1} className="full-img" />
                </Col>
              </Row>
              <Row className="justify-content-center m-v-space">
                <Col sm={4}>
                  <Image src={equilibrioUtilidad2} className="full-img" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Para calcular el P.E en número de unidades y en cantidad de
                    dinero sin utilidad ocuparemos la siguiente fórmula:
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Sustituyendo los datos tenemos:</p>
                  <p>
                    P.E en número de unidades= C.F/M.C.U = 30,000/20= 1,500
                    hamburguesas mensuales
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    El punto de equilibrio se alcanza al vender 1,500
                    hamburguesas recibiendo por esa venta $52,500
                  </p>
                  <p>
                    Conclusión: Al vender 1,500 hamburguesas solamente
                    estaríamos recuperando el costo total pero no estaríamos
                    ganando, comprobémoslo:
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

export default ThreeThreeOneOne;

import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const FiveThreeThree = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md justify-text">
          <Row>
            <Col>
              <h2>5.3.3 índice de rentabilidad (IR)</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Al índice de rentabilidad también se le conoce como margen de
                utilidad o de rentabilidad; se obtiene dividiendo la utilidad
                neta entre las ventas netas.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`Margen\;de\;utilidad\;o\;de\;rentabilidad=\frac{Utilidad\;neta}{Ventas\;netas}`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Ejemplo</b>
              </p>
              <p>
                La empresa “La ventanita” obtiene una utilidad neta de
                $1,000,000 de pesos con ventas de $2,000,000 de pesos
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`Margen\;de\;utilidad\;o\;de\;rentabilidad=\frac{1,000,000}{2,000,000}=(0.50)(100) = 50\%`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Se interpreta: La Ventanita obtiene un 50% de utilidad en
                relación con sus ventas; o bien, por cada peso que entra a la
                empresa por concepto de ventas 50 centavos son de utilidad.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FiveThreeThree;

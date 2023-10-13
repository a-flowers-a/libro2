import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeThreeTwo = () => {
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
                3.3.2 Modelo matemático del punto de equilibrio con
                multiproductos (mezcla de dos o más productos)
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Existen empresas que producen y/o venden más de un tipo de
                producto, tal es el caso de Bimbo, Nestlé y Microsoft, por
                mencionar algunas. Al tratarse de más de un producto, es posible
                calcular el punto de equilibrio para una mezcla de productos
                también llamado punto de equilibrio multi producto.
              </p>
              <p>El punto de equilibrio para una mezcla puede ser:</p>
              <p>
                <b>a. Punto de equilibrio para una mezcla sin utilidad</b>
              </p>
              <p>
                Indica la cantidad de productos que se tendrían que producir y/o
                vender para no ganar y tampoco perder; es decir, con su venta
                solo se estaría recuperando el costo total.
              </p>
              <p>
                <b>b. Punto de equilibrio para una mezcla con utilidad</b>
              </p>
              <p>
                Indica la cantidad de productos que se tendrían que producir y/o
                vender para recuperar el costo total y además obtener una
                utilidad deseada.
              </p>
              <p>
                A continuación, veremos más a detalle el punto de equilibrio
                para una mezcla.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThreeTwo;

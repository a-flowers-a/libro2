import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeTwoOneFour = () => {
  const razonesEstandar = "../../assets/images/razonesEstandar.png";
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
              <h2>3.2.1.4 Método de razones estándar</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                El método de razones estándar consiste en establecer y utilizar
                medidas básicas (referentes) de comparación, que pueden
                predeterminarse como una meta o ideal a alcanzar. Una vez
                obtenidas las razones simples, éstas se comparan con las razones
                estándar, identificando las desviaciones tanto positivas como
                negativas con la finalidad de establecer medidas correctivas.
              </p>
              <p>Las razones estándar en función de su origen se dividen en:</p>
              <ul>
                <li>
                  <b>Razones estándar internas.</b>
                  Se establecen con fundamento en la propia experiencia de la
                  empresa y en los datos históricos acumulados durante varios
                  ejercicios.
                </li>
                <li>
                  <b>Razones estándar externas.</b>
                  Se forman con los datos acumulados, en tiempos iguales, por la
                  experiencia de empresas que tienen similitud en cuanto a
                  tamaño y giro.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className=" m-v-space justify-content-center">
            <Col xs={10} md={6}>
              <Image
                src={razonesEstandar}
                alt="Razones estándar"
                className="full-img"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoOneFour;

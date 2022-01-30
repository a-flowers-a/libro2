import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const CierreI = () => {
  const successImg = "../../assets/images/success1.png";
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
              <h2>Cierre de la unidad temática</h2>
            </Col>
          </Row>
          <Row className="justify-text m-v-space">
            <Col>
              <p className="justify-text">
                <div className="inline bold light-navy">¡Felicidades!</div> ya
                Has concluido esta primera unidad temática. Ahora tienes más
                elementos que te ayudarán a reconocer la relevancia que tienen
                las finanzas en todas las organizaciones y en específico en las
                empresas, independientemente de su constitución, tamaño y giro.
              </p>
              <p>
                Recuerda que las empresas son indispensables en nuestras vidas y
                que constituyen la columna vertebral de la economía. En este
                sentido, la productividad, la rentabilidad y la competitividad
                se han convertido en tres de las principales pretensiones de
                muchas empresas. Para lograr dichas pretensiones se requiere,
                entre otros aspectos, de la toma de decisiones basadas en
                información financiera verídica, confiable y oportuna que se
                verá reflejada en los estados financieros. Información
                financiera y estados financieros son temas que estudiarás en la
                siguiente unidad temática.
              </p>
            </Col>
            <Col md={4}>
              <Image
                className="full-img"
                src={successImg}
                alt="Figura 1.1. La empresa"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default CierreI;

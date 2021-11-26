import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeTwoTwoTwo = () => {
  const tendencias1 = "../../assets/images/tendencias1.png";
  const tendencias2 = "../../assets/images/tendencias2.png";
  const tendencias3 = "../../assets/images/tendencias3.png";
  const tendencias4 = "../../assets/images/tendencias4.png";
  const tendencias5 = "../../assets/images/tendencias5.png";

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
              <h2>3.2.2.2 Método de tendencias</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                De acuerdo con Elizondo (1999) el método de tendencias,
                basándose en datos históricos durante un periodo de tiempo
                determinado, ayuda a inferir sobre la trayectoria futura de la
                entidad.
              </p>
              <p>
                Una vez que se ha realizado un análisis de las causas internas
                y/o externas que produjeron tal o cual tendencia, si existe una
                alta correlación entre determinadas circunstancias y cierta
                tendencia y se espera que dichas circunstancias prevalezcan en
                el futuro, es lógico esperar que la tendencia se mantendrá
                dentro de ciertos límites.
              </p>
              <p>
                En resumen, con el conocimiento de los datos históricos de una
                empresa se logra una mejor comprensión de la tendencia de un
                negocio y aún más si ésta se grafica, tal como se puede apreciar
                en las figuras 1 a 6; adicionalmente, nos proporciona
                información valiosa para la realización de pronósticos.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={10}>
              <Image
                src={tendencias1}
                className="full-img"
                alt="Tabla 1. Tendencias de algunas partidas de los estados financieros"
              />
            </Col>
          </Row>
          <Row className="img-source center-text ">
            <Col>
              Fuente: Elaboración propia, con base en la bibliografía consultada
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={6}>
              <Image
                src={tendencias2}
                className="full-img"
                alt="Figura 2. Gráfica de la tendencia de ventas."
              />
            </Col>
          </Row>
          <Row className="img-source center-text ">
            <Col>Fuente: Elaboración propia</Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={6}>
              <Image
                src={tendencias3}
                className="full-img"
                alt="Figura 3. Gráfica de la tendencia de gastos de administración."
              />
            </Col>
          </Row>
          <Row className="img-source center-text ">
            <Col>Fuente: Elaboración propia</Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={6}>
              <Image
                src={tendencias4}
                className="full-img"
                alt="Figura 4. Gráfica de la tendencia de utilidad del ejercicio"
              />
            </Col>
          </Row>
          <Row className="img-source center-text ">
            <Col>Fuente: Elaboración propia</Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={6}>
              <Image
                src={tendencias5}
                className="full-img"
                alt="Figura 5. Gráfica de la tendencia de razón de liquidez inmediata."
              />
            </Col>
          </Row>
          <Row className="img-source center-text ">
            <Col>Fuente: Elaboración propia</Col>
          </Row>
          <Row>
            <Col>
              <p>
                Cabe destacar que al aplicarse este método deberán hacerse
                investigaciones sobre los elementos internos y externos que
                tengan una relación directa con los resultados obtenidos, estas
                relaciones de dependencia pueden ser:
              </p>
              <ol>
                <li>Variaciones en el volumen de unidades vendidas</li>
                <li>Variaciones en el poder adquisitivo de la moneda</li>
                <li>Variaciones en el poder de compra de los consumidores</li>
                <li>Cambios en la oferta y la demanda en general</li>
                <li>Cambios en los sistemas de ventas</li>
                <li>Aparición de sucedáneos (productos sustitutos)</li>
                <li>Cambios de personal</li>
              </ol>
              <p>
                Es importante mencionar que este método está muy ligado al
                desarrollo de la entidad económica desde su creación, se debe
                considerar que las empresas tienen diversas etapas en su
                desarrollo y que las soluciones financieras deben ser adecuadas
                a la etapa en la cual se encuentra la empresa
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoTwoTwo;

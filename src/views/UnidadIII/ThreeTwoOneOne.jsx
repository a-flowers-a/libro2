import React, { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Actividad from "../../components/Actividad";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { scrollTop } from "../../helpers/general";

const ThreeTwoOneOne = () => {
  const estadofinanciero = "../../assets/images/estadofinanciero.png";
  const estadoResultados = "../../assets/images/estadoResultados.png";
  const formula1 = "../../assets/images/formula1.png";

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <Row className="m-b-space">
            <Col>
              <h2>3.2.1.1 Método de reducción a por cientos</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                El método de reducción a por cientos tiene carácter de
                exploratorio permitiendo una rápida apreciación de la
                importancia de cada cifra contenida en los estados financieros;
                asimismo facilita las comparaciones entre los diversos elementos
                que integran a los estados financieros y da agilidad al manejo
                de las cifras.
              </p>
              <p>
                El método de reducción a porcientos se puede aplicar tanto al
                estado de situación financiera como al estado de resultados.
              </p>
              <dl>
                <dd>
                  <b>
                    a. Método de reducción a por cientos aplicado al estado de
                    situación financiera, estado de posición financiera o
                    balance general
                  </b>
                </dd>
              </dl>
              <p>
                Para aplicar el método de reducción a por cientos a un estado de
                situación financiera <b>(Figura 3.4)</b> se realiza el siguiente
                procedimiento:
              </p>
              <ul>
                <li className="m-b-space">
                  Se toma como el 100% la suma del activo.
                </li>
                <li className="m-b-space">
                  De igual forma se toma como el 100% la suma del pasivo más el
                  capital contable.
                </li>
                <li className="m-b-space">
                  Se determina qué porcentaje representan cada una de las
                  cuentas de activo con respecto al activo total; es decir sí
                  $30,564 es el 100%, ¿qué porcentaje representa cada una de las
                  cuentas de activo? (Los resultados los podrás apreciar en la
                  columna que está sombreada).
                </li>
                <li className="m-b-space">
                  De la misma manera, se determina qué porcentaje representan
                  cada una de las cuentas de pasivo y capital contable con
                  respecto a la suma de pasivo más capital contable; es decir sí
                  $30,564 es el 100%, ¿qué porcentaje representa cada una de las
                  cuentas de pasivo y de capital contable? (los resultados los
                  podrás apreciar en la columna que está sombreada).
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="img-source center-text">
            <Col>
              <b>
                Figura 3.4. Estado de situación financiera aplicando el método
                de reducción a porcientos
              </b>
              <p>
                Fuente: Elaboración propia, con base en la bibliografía
                consultada.
              </p>
            </Col>
          </Row>
          <Row className="center-text">
            <Col>
              <Image
                className="mid-img"
                src={estadofinanciero}
                alt="Estado de situación financiera"
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <dl>
                <dd>
                  <b>
                    b. Método de reducción a porcientos aplicado al estado de
                    resultados.
                  </b>
                </dd>
              </dl>
              <p>
                Para aplicar el método de reducción a por cientos a un estado de
                resultados <b>(Figura 3.5)</b> se realiza el siguiente
                procedimiento:
              </p>
              <ul>
                <li className="m-b-space">
                  El monto de ventas netas se considera el 100% y con base en
                  este dato se determina qué porcentaje representan cada uno de
                  los renglones del estado de resultados. Para nuestro ejemplo
                  sí $190,400 corresponde al 100%, ¿qué porcentaje representa,
                  por ejemplo, el renglón del costo de ventas? El porcentaje es
                  del 73% <b> (Figura 3.5)</b>
                </li>
                <li className="m-b-space">
                  Con una regla de tres puedes obtener los porcentajes de cada
                  uno de los renglones del estado de resultados.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="center-text m-b-space">
            <Col>
              <Image className="sm-img" src={formula1} alt="Regla de tres" />
            </Col>
          </Row>
          <Row className="img-source center-text m-v-space">
            <Col>
              <b>
                Figura 3.5 Estado de resultados de Comercializadora la Estrella,
                S.A de C.V.
              </b>
            </Col>
          </Row>
          <Row className="center-text">
            <Col>
              <Image
                className="full-img"
                src={estadoResultados}
                alt="Estado de resultados"
              />
            </Col>
          </Row>
          <Row className="justify-content-center m-b-space">
            <Col md={3}>
              <Actividad
                color="purple"
                icon={faPuzzlePiece}
                link={"to-do"}
                type={"Actividad"}
                number={""}
              />
            </Col>
            <Col md={6} className="v-center-content text-descrip">
              Análisis financiero por el método de reducción a por cientos
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoOneOne;

import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Actividad from "../../components/Actividad";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

const OneTwo = () => {
  const img13 = "../../assets/images/13.png";
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
                  <h2>1.2 Función y objetivo de las finanzas empresariales </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    Hablar de finanzas implica hablar de contabilidad. La
                    contabilidad se encarga principalmente del registro de las
                    operaciones de la entidad, de la elaboración de los estados
                    financieros, de la elaboración de reportes con información
                    financiera y de calcular y pagar impuestos; por lo que
                    constituye el principal sistema de información cuantitativa
                    de la organización.
                  </p>
                  <p>
                    La contabilidad forma parte del área financiera y la función
                    financiera se lleva a cabo mediante dos actividades
                    importantes:
                  </p>
                  <ol>
                    <li className="s-b-space">
                      <b>Tesorería. </b>
                      Básicamente se enfoca al manejo de los recursos
                      financieros, entre sus principales actividades se
                      encuentran:
                      <ul>
                        <li>Administración del flujo de efectivo</li>
                        <li>Inversiones</li>
                        <li>Presupuestos</li>
                        <li>Financiamiento</li>
                        <li>Administración de activos</li>
                      </ul>
                    </li>
                    <li>
                      <b>Contraloría. </b>
                      Responsable de la actividad contable, planeación,
                      presupuestos y auditoría interna
                      <ul>
                        <li>Contabilidad</li>
                        <li>Pronósticos</li>
                        <li>Administración de riesgos</li>
                        <li>Impuestos</li>
                        <li>
                          Verificar que la Administración esté de acuerdo con
                          los objetivos de la empresa
                        </li>
                        <li>Auditoría interna</li>
                        <li>Desarrollo de políticas y procedimientos</li>
                      </ul>
                    </li>
                  </ol>
                  <p>
                    Para que la función financiera se lleve a cabo en forma
                    adecuada requiere de información verídica y confiable
                    proporcionada por el área contable.
                  </p>
                  <p>
                    En la figura 1.3 se presentan algunas de las principales
                    funciones de las áreas contable y financiera.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image
                    className="full-img"
                    src={img13}
                    alt="Figura 1.3 contabilidad y finanzas"
                  />
                </Col>
              </Row>
              <Row className="img-source center-text">
                <Col>Hernández, J., Rodríguez, E. & Jiménez, Y. (2021).</Col>
              </Row>
              <Row className="m-v-space">
                <Col>
                  <p>
                    Como se puede apreciar en la figura 1.3 la función contable
                    debe considerarse como un insumo necesario para la función
                    financiera.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={4}>
                  <Actividad
                    icon={faPuzzlePiece}
                    link={"TODO://link"}
                    type={"Actividad 1.2"}
                    number={""}
                  />
                </Col>
                <Col md={6} className="v-center-content text-descrip">
                  Actividad 1.2. Las finanzas y su importancia
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

export default OneTwo;

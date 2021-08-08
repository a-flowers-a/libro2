import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Image, Container } from "react-bootstrap";
import CardButton from "../../components/CardButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../../components/SideMenu/SideMenu";

function TwoOne() {
  function sendTo(page) {
    window.location.href = page;
  } //sendTo
  const img21 = "../../assets/images/21.png";
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container xs={1} md={2}>
          <section id="2.1">
            <Row className="m-v-space">
              <Col>
                <div className="back-card">
                  <CardButton
                    cardColor={"light-blue"}
                    icon={faArrowLeft}
                    iconFirst={true}
                    clickFunc={() => sendTo("/")}
                    text={"Regresar a Bienvenida"}
                    textColor={"white"}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>2.1 La información financiera</h2>
              </Col>
            </Row>
            <Row className="justify-content-center m-v-space">
              <Col m={9}>
                <p>
                  La información financiera que se obtiene de la contabilidad
                  tiene las siguientes características:
                </p>
                <ol className="upper-letter">
                  <li>
                    Es cuantitativa porque se expresa en unidades monetarias
                  </li>
                  <li>
                    Es descriptiva en razón de que muestra la posición y el
                    desempeño financiero de la entidad
                  </li>
                </ol>
                <p className="justify-text">
                  El objetivo primordial de la información financiera radica en
                  la utilidad que ésta tiene para los usuarios en la toma de
                  decisiones económicas (figura 2.1). Dicha información se ve
                  reflejada en los estados financieros, mismos que muestran cómo
                  va el negocio, permitiendo evaluar su desempeño en función de
                  los objetivos propuestos; adicionalmente, dichos estados
                  proporcionan información con la que se puede estimar el
                  comportamiento futuro de algunos aspectos, por ejemplo del
                  flujo de efectivo.
                </p>
              </Col>
              <Col md={3}>
                <div className="center-text">
                  Figura 2.1 Importancia de la información financiera
                </div>
                <Image className="full-img" src={img21} alt="questions" />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //twoOne

export default TwoOne;

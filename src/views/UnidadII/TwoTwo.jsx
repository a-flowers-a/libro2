import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Image, Container } from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";

function TwoTwo() {
  const img22 = "../../assets/images/22.png";
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container>
          <section name="2.2">
            <h2>2.2 Las Normas de Información Financiera (NIF)</h2>
            <div className="justify-text">
              <p>
                Las NIF (2020) definen a las Normas de Información Financiera
                como “el conjunto de pronunciamientos normativos, conceptuales y
                particulares emitidos por el Consejo Mexicano de Normas de
                Información Financiera (CINIF) o transferidos al CINIF, que
                regulan la información contenida en los estados financieros y
                sus notas, en un lugar y fecha determinados, que son aceptados
                de manera amplia y generalizada por todos los usuarios de la
                información financiera” (p. 5).
              </p>
              <p>
                Las NIF tienen ocho postulados básicos (figura 2.2) que
                sustituyen a los Principios de Contabilidad Generalmente
                Aceptados como los conceptos teóricos básicos que rigen el
                sistema de información contable y el ambiente bajo el cual debe
                operar.
              </p>
            </div>
            <Row className="justify-content-center m-v-space">
              <Col md={6}>
                <div className="center-text">
                  Figura 2.2 Postulados básicos de las NIF
                </div>
                <Image className="full-img" src={img22} alt="NIF" />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura
                  basada en los postulados de las NIF.
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //TwoTwo

export default TwoTwo;

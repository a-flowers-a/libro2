import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Image, Container } from "react-bootstrap";
import Actividad from "../../components/Actividad";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { CustomNavbar } from "../../components/CustomNavbar";

function TwoTwo() {
  const img22 = "../../assets/images/22.png";
  const img23 = "../../assets/images/23.png";
  return (
    <div className="primary-div">
      <PoliHeader />
      <CustomNavbar />

      <Container fluid>
        <section id="2.2">
          <h2>2.2 Las Normas de Información Financiera (NIF)</h2>
          <div className="justify-text">
            <p>
              Las NIF (2020) definen a las Normas de Información Financiera como
              “el conjunto de pronunciamientos normativos, conceptuales y
              particulares emitidos por el Consejo Mexicano de Normas de
              Información Financiera (CINIF) o transferidos al CINIF, que
              regulan la información contenida en los estados financieros y sus
              notas, en un lugar y fecha determinados, que son aceptados de
              manera amplia y generalizada por todos los usuarios de la
              información financiera” (p. 5).
            </p>
            <p>
              Las NIF tienen ocho postulados básicos (figura 2.2) que sustituyen
              a los Principios de Contabilidad Generalmente Aceptados como los
              conceptos teóricos básicos que rigen el sistema de información
              contable y el ambiente bajo el cual debe operar.
            </p>
          </div>
          <Row className="justify-content-center m-v-space">
            <Col md={6}>
              <div className="center-text">
                Figura 2.2 Postulados básicos de las NIF
              </div>
              <Image className="full-img" src={img22} alt="NIF" />
              <div className="img-source center-text">
                Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura basada
                en los postulados de las NIF.
              </div>
            </Col>
          </Row>
        </section>
        <section id="2.2.1">
          <Row>
            <h3>
              2.2.1 Importancia de las Normas de Información Financiera (NIF)
            </h3>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col md={9}>
              <Row className="justify-text">
                <Col>
                  <p>
                    En las últimas décadas nuestra sociedad ha experimentado
                    cambios trascendentales en todos los ámbitos de la vida
                    humana. Con la globalización, específicamente hablando del
                    mundo de los negocios, se requiere hacer adecuaciones, lo
                    que exige que la normatividad financiera también se
                    actualice para dar respuesta a las necesidades de los
                    interesados o usuarios de la información financiera, tal es
                    el caso de accionistas o dueños, administradores,
                    proveedores, acreedores, clientes y unidades
                    gubernamentales, entre otros.
                  </p>
                  <p>
                    En este sentido, las NIF (figura 2.3) establecen la
                    normatividad o marco regulador para emitir los estados
                    financieros y así unificar los criterios para su
                    elaboración.
                  </p>
                  <p>
                    Con la intención de profundizar un poco más en el tema,
                    realiza la siguiente actividad:
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center v-center-content">
                <Col sm={4}>
                  <Actividad
                    icon={faPuzzlePiece}
                    link={
                      "https://drive.google.com/file/d/1GqdpvBckyuPvUdfc29d8vmPSRAMv-tIh/view?usp=sharing"
                    }
                    number={"2.1"}
                    type={"Actividad"}
                  />
                </Col>
                <Col className="text-descrip">
                  Importancia de la información financiera (infografía)
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <div className="center-text">
                Figura 2.3 Normas de Información Financiera
              </div>
              <Image className="full-img" src={img23} alt="NIF" />
              <div className="img-source center-text">
                Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura basada
                en las NIF.
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <PoliFooter />
    </div>
  );
} //TwoTwo

export default TwoTwo;

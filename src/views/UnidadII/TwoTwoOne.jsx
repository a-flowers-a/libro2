import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import Actividad from "../../components/Actividad";
import SideMenu from "../../components/SideMenu/SideMenu";
import { UnidadII } from "../../linksToAssets/Actividades/UnidadII";

const TwoTwoOne = () => {
  const img23 = "../../assets/images/23.png";
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <section name="2.2.1">
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
                      interesados o usuarios de la información financiera, tal
                      es el caso de accionistas o dueños, administradores,
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
                      link={UnidadII[0]}
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
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura
                  basada en las NIF.
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
}; //

export default TwoTwoOne;

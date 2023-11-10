import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

function IntroduccionII() {
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <Row>
            <Col>
              <h2>Introducción</h2>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col md={9} className="justify-text">
              <p>
                Como ya vimos, las organizaciones son parte medular de nuestras
                vidas. Por su relevancia, a través del tiempo, han sido objeto
                de estudio con el propósito de conseguir que sean más
                productivas, más rentables y más competitivas. Para lograr
                dichos propósitos es necesario, entre otros factores, la
                generación y utilización de información financiera oportuna y
                confiable
              </p>
              <p>
                Información financiera es un término que seguramente has
                escuchado, alguna vez te has puesto a pensar o a reflexionar
                sobre: ¿qué es?, ¿cómo se genera?, ¿dónde se puede visualizar? o
                mejor aún ¿cómo se interpreta? y ¿cómo se utiliza en la toma de
                decisiones empresariales?
              </p>
              <p>
                Las respuestas a estas y otras interrogantes las encontrarás al
                ir abordando los temas desarrollados en esta unidad temática;
                adicionalmente, aprenderás a construir dos de los estados
                financieros básicos (estado de resultados y estado de situación
                financiera) con base en las Normas de Información Financiera
                (NIF) vigentes.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
}
export default IntroduccionII;

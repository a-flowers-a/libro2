import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

function CierreII() {
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
          <Row className="justify-content-center m-v-space">
            <Col md={9}>
              <p className="justify-text">
                <div className="inline bold light-navy">¡Felicidades!</div> ya
                concluiste esta unidad temática. Ahora tienes un panorama más
                claro acerca de qué es la información financiera, de dónde se
                obtiene, así como los estados financieros en los que se muestra.
                Adicionalmente, cuentas con conocimientos básicos sobre la
                construcción de dos de los estados financieros más importantes
                (estado de situación financiera y estado de resultados); qué
                normatividad hay al respecto, y sobre todo la relevancia y el
                impacto que tiene la información financiera en la toma de
                decisiones empresariales.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col className="center-text">
              <h5 className="navy">
                Te invitamos a continuar con el estudio de las siguientes
                unidades temáticas de este polilibro.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
}
export default CierreII;

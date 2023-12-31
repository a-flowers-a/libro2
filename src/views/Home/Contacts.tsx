import { Container, Row, Col, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";

function Contacts() {
  const Josefina = "../../../../assets/images/josefina.jpeg";
  const Eduardo = "../../../../assets/images/eduardo.jpeg";
  const Yasmin = "../../../../assets/images/yasmin.jpeg";

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <HomeMenu />
        <Container className="padding-md">
          <Row>
            <ToBookButton />
          </Row>
          <Row className="m-v-space ">
            <Col>
              <h2>Contactos</h2>
            </Col>
          </Row>
          <p className="m-v-space">
            Para cualquier duda o comentario, en relación con este material,
            puedes contactarnos.
          </p>
          <Row className="center-text">
            <Col sm={4}>
              <Row className="justify-content-center">
                <Col sm={6}>
                  <Image className="full-img" src={Josefina} roundedCircle />
                </Col>
              </Row>
              <p>
                <b>M. en C. Josefina Hernandez Jaime</b>
              </p>
              <p>johernandezja@ipn.mx</p>
            </Col>
            <Col sm={4}>
              <Row className="justify-content-center">
                <Col sm={6}>
                  <Image className="full-img" src={Eduardo} roundedCircle />
                </Col>
              </Row>
              <p>
                <b>M. en A. Eduardo Rodríguez Flores</b>
              </p>
              <p>erodriguezf@ipn.mx</p>
            </Col>
            <Col sm={4}>
              <Row className="justify-content-center">
                <Col sm={6}>
                  <Image className="full-img" src={Yasmin} roundedCircle />
                </Col>
              </Row>
              <p>
                <b>Dra. Yasmín Ivette Jiménez Galán</b>
              </p>
              <p>Jasmín Ivette Jiménez Galán yjimenezg@ipn.mx </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Contacts

export default Contacts;

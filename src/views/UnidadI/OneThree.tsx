import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

const OneThree = () => {
  const img15 = "../../assets/images/15.png";
  const img16 = "../../assets/images/16.png";
  const img17 = "../../assets/images/17.png";
  const img18 = "../../assets/images/18.png";

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
              <Row className="m-b-space">
                <Col>
                  <h2>
                    1.3 Las finanzas empresariales y su relación con otras
                    disciplinas (Ética, Economía, Derecho, Matemáticas, etc.)
                  </h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col md={4}>
                  <Image className="full-img" src={img15} alt="Ética" />
                </Col>
                <Col>
                  <p>
                    <b>Ética</b>
                  </p>
                  <p className="justify-content-center">
                    La ética trata sobre lo que se considera un comportamiento
                    humano correcto; es decir, con la práctica de valores. Todo
                    lo relacionado con las finanzas y el manejo del dinero debe
                    ser honesto, claro, transparente y digno de confianza.
                  </p>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    <b>Economía</b>
                  </p>
                  <p className="justify-content-center">
                    La economía es la ciencia que se centra en la satisfacción
                    de las necesidades humanas, así como en la generación y
                    administración de la riqueza por lo que tiene una relación
                    estrecha con las finanzas.
                  </p>
                </Col>
                <Col md={4}>
                  <Image className="full-img" src={img16} alt="Economía" />
                </Col>
              </Row>
              <Row className="justify-text">
                <Col md={4}>
                  <Image className="full-img" src={img17} alt="Derecho" />
                </Col>
                <Col>
                  <p>
                    <b>Derecho</b>
                  </p>
                  <p className="justify-content-center">
                    El Derecho a través de diferentes leyes regula las
                    actividades financieras y de no acatarse y/o cumplirse
                    dichas leyes hay sanciones en materia legal.
                  </p>
                </Col>
              </Row>
              <Row className="justify-text m-v-space">
                <Col>
                  <p>
                    <b>Matemáticas</b>
                  </p>
                  <p className="justify-content-center">
                    Las matemáticas están tan estrechamente ligadas con las
                    finanzas que incluso ha surgido el término matemáticas
                    financieras en las que se utilizan la aritmética y el
                    álgebra en temas como valor presente, valor futuro, costo de
                    capital y tasas de interés, por mencionar algunos.
                  </p>
                </Col>
                <Col md={4}>
                  <Image className="full-img" src={img18} alt="Matemáticas" />
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

export default OneThree;

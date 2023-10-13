import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourThree = () => {
  const planeacionFinanciera = "../../assets/images/planeacion.png";
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
              <Row>
                <Col>
                  <h2>4.3 Planeación financiera</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Para las empresas un elemento sumamente importante es la
                    planeación financiera; ésta proporciona una guía que permite
                    dirigir, coordinar y controlar las acciones que realiza la
                    empresa orientadas al logro de sus objetivos.
                  </p>
                  <p>
                    Vale la pena destacar que la planeación de efectivo
                    (preparación del presupuesto de efectivo) y la planeación de
                    utilidades (preparación de estados financieros proforma) son
                    dos aspectos clave de la planeación financiera.
                  </p>
                  <p>
                    El proceso de la planeación financiera comienza con la
                    elaboración de planes financieros a largo plazo o
                    estratégicos y con base en estos se formulan los planes y
                    presupuestos a corto plazo u operativos. No hay un consenso
                    en cuanto al tiempo que se considera como corto o largo
                    plazos; en este sentido, Gitman (2012) menciona que el corto
                    plazo podría cubrir un período de uno a dos años y el largo
                    plazo de más de dos años; también enfatiza que las empresas
                    que están sujetas a altos grados de incertidumbre operativa,
                    a ciclos de producción relativamente cortos, o a los dos,
                    tienden a usar horizontes de planeación más cortos.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={8}>
                  <Image
                    className="full-img"
                    src={planeacionFinanciera}
                    alt="Político-legales"
                  />
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

export default FourThree;

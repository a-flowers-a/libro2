import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FiveThree = () => {
  // const imgVerticales = "../../assets/images/verticales.png";
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
              <h2>5.3 Métodos de evaluación de proyectos de inversión</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                En términos económicos el crecimiento de las empresas y del país
                está en función del desarrollo de proyectos de inversión. Hoy
                día, en todos los ámbitos, existen múltiples necesidades por
                atender y problemáticas por resolver lo que se traduce en un
                gran abanico de posibilidades de inversión; sin embargo, los
                recursos siguen siendo escasos y en este sentido cobra
                relevancia la aplicación de métodos para evaluar proyectos de
                inversión como herramienta de apoyo para la evaluación y la
                selección de la opción más recomendable entre las alternativas
                propuestas.
              </p>
              <p>
                La evaluación económico – financiera puede hacerse desde métodos
                de evaluación diferentes:
              </p>
              <p>
                <b>
                  Métodos que no toman en cuenta el valor del dinero en el
                  tiempo:
                </b>
              </p>
              <ul>
                <li>Periodo de recuperación de la inversión</li>
                <li>Rentabilidad sobre la inversión</li>
                <li>Índice de rentabilidad</li>
              </ul>
              <p>
                <b>
                  Métodos que toman en cuenta el valor del dinero en el tiempo:
                </b>
              </p>
              <ul>
                <li>
                  Valor Presente Neto (VPN) también llamado Valor Actual Neto
                  (VAN)
                </li>
                <li>Tasa Interna de Rendimiento (TIR)</li>
                <li>Relación costo-beneficio</li>
                <li>Período de recuperación de la inversión descontado</li>
              </ul>
              <p>A continuación abordaremos cada uno de ellos.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FiveThree;

import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MathComponent } from "mathjax-react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

const ThreeTwoOneOne = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md justify-text">
          <Row>
            <Col>
              <h2>5.3.2 Método del rendimiento sobre la inversión (ROI)</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                A este método rendimiento sobre la inversión (ROI) también se le
                llama rendimiento sobre activos totales (RAT). Se calcula con la
                siguiente fórmula:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`ROI = \frac{Utilidad\;neta}{activo\;total}`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                E indica el porcentaje de utilidad que se obtiene con el empleo
                del total de sus activos.
              </p>
              <p>
                <b>Ejemplo:</b>
              </p>
              <p>
                La empresa “El Polvorón” obtiene una utilidad neta de $2,000,000
                de pesos con el empleo de activos totales con valor de
                $5,000,000 pesos.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`ROI = \frac{2,000,000}{5,000,000}= (0.4)(100) = 40\%`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Se interpreta: El Polvorón obtiene una utilidad del 40% con el
                empleo de todos los recursos (activos) propios y ajenos.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoOneOne;

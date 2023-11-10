import { useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

function TwoThreeTwo() {
  const img215 = "../../assets/images/215.png";
  const img216 = "../../assets/images/216.png";

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <h3>2.3.2 Estado de resultados</h3>
          <div className="justify-text">
            <p>Por lo regular, las empresas tienen dos objetivos:</p>
            <ol className="upper-letter">
              <li>
                <p className="bold">Un objetivo social,</p> en virtud de que
                brindan a la sociedad bienes y servicios para la satisfacción de
                necesidades humanas, siendo a la vez una fuente de empleo.
              </li>
              <li>
                <p className="bold">Un objetivo económico,</p> en razón de que
                persiguen obtener utilidades.
              </li>
            </ol>
            <p>
              El estado financiero que muestra si se cumplió o no el objetivo
              económico es el <p className="bold">Estado de resultados.</p> Éste
              nos da el dato de ¿cuánto ganamos o cuánto perdimos? en un período
              determinado (Figuras 2.15 y 2.16).
            </p>
            <Row className="justify-content-center m-v-space">
              <Col md={4}>
                <div className="center-text">
                  Figura 2.15 Ingresos mayores que los egresos
                </div>
                <Image
                  className="full-img"
                  src={img215}
                  alt="Ingresos mayores que los egresos"
                />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                </div>
              </Col>
              <Col md={4}>
                <div className="center-text">
                  Figura 2.16 Egresos mayores que los ingresos
                </div>
                <Image
                  className="full-img"
                  src={img216}
                  alt="Egresos mayores que los ingresos"
                />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                </div>
              </Col>
            </Row>
            <p>
              García y Mendoza (2013) definen al estado de resultados como “el
              estado financiero que muestra cómo se ha obtenido la utilidad o la
              pérdida del ejercicio de una entidad, durante un período
              determinado. Enfatizando que es un estado financiero que muestra
              los ingresos, costos y gastos, así como la utilidad o pérdida
              resultante en el periodo” (p. 63)
            </p>
          </div>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //TwoThreeTwo

export default TwoThreeTwo;

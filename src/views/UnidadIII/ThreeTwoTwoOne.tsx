import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeTwoTwoOne = () => {
  const img3221 = "../../assets/images/3221.png";

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
              <h2>
                3.2.2.1 Método de aumentos y disminuciones, también llamado
                método de diferencias
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Consiste en comparar cifras homogéneas de una misma clase de
                estados financieros correspondientes a dos o más períodos,
                resultado así los denominados estados financieros comparativos
                en los que se pueden observar los cambios sufridos en sus cifras
                y seleccionar aquéllos que se juzguen pertinentes para un
                estudio más a detalle.
              </p>
              <p>
                Este método de análisis se aplica básicamente al estado de
                situación financiera y al estado de resultados; sólo contiene
                situaciones y cambios de significado limitado expresados en
                unidades monetarias; es un instrumento de medición variable, por
                lo tanto, el resultado, sólo adquiere importancia y es útil
                cuando los diferentes cambios se interpretan a la luz de la
                información complementaria, de la que puede identificar cuales
                fueron las circunstancias que prevalecieron cómo influyeron en
                los cambios.
              </p>
              <p>
                Sin esta información adicional la utilidad de este método es
                limitada, y en la mayoría de los casos su empleo sin información
                complementaria no es recomendable, debido a las interpretaciones
                equívocas que se pueden hacer de los cambios.
              </p>
              <p>
                Cabe señalar que los cambios observados en los estados
                combinados deben tener su razón de ser, siendo necesario
                encontrar el porqué de los cambios y no limitarnos únicamente al
                aumento o disminución.
              </p>
              <p>
                <b>Ejemplo:</b> En el estado de situación financiera de la
                <b> Figura 3.10</b>, al determinar las diferencias (+,-), se
                está aplicando el método de aumentos o disminuciones, sólo
                faltaría la interpretación correspondiente
              </p>
            </Col>
          </Row>
          <Row className="img-source center-text m-v-space">
            <Col>
              <b>Figura 3.10 Estados de situación financiera comparativos</b>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={10}>
              <Image
                src={img3221}
                className="full-img"
                alt="Estados de situación financiera comparativos"
              />
            </Col>
          </Row>
          <Row className="img-source center-text ">
            <Col>
              Fuente: Elaboración propia, con base en la bibliografía consultada
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoTwoOne;

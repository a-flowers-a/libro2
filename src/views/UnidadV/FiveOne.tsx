import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FiveOne = () => {
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
              <h2>5.1 Los proyectos de inversión </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Empecemos por definir qué es un proyecto, de este término
                existen tantas definiciones como autores al respecto, a
                continuación, encontrarás dos de ellas:
              </p>
              <p>
                <b>Proyecto</b>
              </p>
              <ul>
                <li>
                  “Proyecto es un esfuerzo temporal que se lleva a cabo para
                  obtener un producto, servicio o resultado único” (Guía del
                  PMBOK, 2017, p. 4). Como puedes observar esta definición es
                  bastante inclusiva podría abarcar, por ejemplo, un proyecto
                  escolar, un proyecto de vida, la construcción de una vivienda,
                  el lanzamiento de un satélite, así como la creación de una
                  empresa, por mencionar algunos. Los proyectos pueden ser
                  llevados a cabo por una persona o por un grupo de ellas, según
                  se requiera.
                </li>
                <li>
                  “Un proyecto es la búsqueda de una solución inteligente al
                  planteamiento de un problema, la cual tiende a resolver una
                  necesidad humana (Baca, 2016, p. 2).
                </li>
              </ul>
              <p>
                De igual manera, podemos encontrar diversas definiciones de
                proyectos de inversión, como por ejemplo:
              </p>
              <p>
                <b>Proyecto de inversión</b>
              </p>
              <ul>
                <li>
                  “Un conjunto de planes detallados que tienen por objeto
                  aumentar la productividad de la empresa para incrementar las
                  utilidades o la prestación de servicios, mediante el uso
                  óptimo de los fondos en un plazo razonable”.
                </li>
                <li>
                  “Es un plan que, si se le asigna determinado monto de capital
                  y se le proporcionan insumos de varios tipos, producirá un
                  bien o servicio, útil para la sociedad” (Baca, 2016).
                </li>
              </ul>
              <p>
                Como podrás notar los proyectos de inversión son imprescindibles
                en la actividad económica de una sociedad, en virtud de que su
                principal propósito es resolver un problema o atender una
                necesidad humana a través de la producción de bienes y/o de la
                prestación de servicios.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FiveOne;

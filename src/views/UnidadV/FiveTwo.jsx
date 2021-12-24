import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FiveTwo = () => {
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
              <h2>5.2 Proceso de preparación y evaluación de proyectos</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Diferentes autores concuerdan en que antes de tomar la decisión
                de invertir en un proyecto es necesario llevar a cabo un proceso
                de preparación y evaluación del mismo, que incluye entre otros
                los siguientes estudios: de mercado, técnico, administrativo o
                de organización, ecológico y financiero (Baca, 2016; Sapag,
                2007; Angulo, 2016). Por lo que se requiere de un equipo
                multidisciplinario; es decir, de la colaboración de personas con
                diferentes perfiles: se necesitan, por ejemplo, administradores,
                economistas, actuarios, contadores, ingenieros, mercadólogos,
                psicólogos y muchos otros expertos en función de las
                características propias de cada proyecto.
              </p>
              <p>FALTA IMAGEN</p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FiveTwo;

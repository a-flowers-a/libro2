import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const Referencias1 = () => {
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
              <h2>Referencias</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>Código Civil. Recuperado de</p>
              <p>
                <a href="http://www.diputados.gob.mx/LeyesBiblio/pdf/2_270320.pdf">
                  &emsp;http://www.diputados.gob.mx/LeyesBiblio/pdf/2_270320.pdf
                </a>
              </p>
              <p>
                Diario Oficial de la Federación del 30 de diciembre de 2016.
                Recuperado de
              </p>
              <p>
                <a href="http://www.dof.gob.mx/nota_detalle.php?codigo=5468221&fecha=30/12/2016">
                  &emsp;http://www.dof.gob.mx/nota_detalle.php?codigo=5468221&fecha=30/12/2016
                </a>
              </p>
              <p>
                García, V. (2014). <i>Introducción a las finanzas. </i>México:
                Grupo Editorial Patria.
              </p>
              <p>
                Gitman, L. y Zutter, C. (2012).
                <i>Principios de administración financiera. </i>México: Pearson
                Educación.
              </p>
              <p>
                González, J. (2009). <i>Manual de fórmulas financieras. </i>
                México: Alfaomega.
              </p>
              <p>
                Graue, A. (2009). <i>Fundamentos de Economía. </i>México:
                Pearson.
              </p>
              <p>
                Haime, L. (2008).
                <i>Planeación financiera en la empresa moderna. </i>ISEF.
              </p>
              <p>Ley General de Sociedades Cooperativas. Recuperado de </p>
              <p>
                <a href="http://www.diputados.gob.mx/LeyesBiblio/pdf/143_190118.pdf">
                  &emsp;http://www.diputados.gob.mx/LeyesBiblio/pdf/143_190118.pdf
                </a>
              </p>
              <p>Ley General de Sociedades Mercantiles. Recuperado de </p>
              <p>
                <a href="http://www.diputados.gob.mx/LeyesBiblio/pdf/144_140618.pdf">
                  &emsp;http://www.diputados.gob.mx/LeyesBiblio/pdf/144_140618.pdf
                </a>
              </p>
              <p>
                Münch, L. y García, J. (2017).
                <i>Fundamentos de administración. </i>México: Trillas.
              </p>
              <p>
                Nacional Financiera, S.N.C. Qué tipo de SOCIEDAD MERCANTIL me
                conviene según mi actividad. Recuperado de
              </p>
              <p>
                <a href="https://docplayer.es/461307-Que-tipo-de-nacional-financiera-s-n-c-sociedad-mercantil-me-conviene-segun-mi-actividad.html">
                  &emsp;https://docplayer.es/461307-Que-tipo-de-nacional-financiera-s-n-c-sociedad-mercantil-me-conviene-segun-mi-actividad.html
                </a>
              </p>
              <p>
                Pfeffer, J. (1997).
                <i>Nuevos rumbos en la teoría de la organización. </i>Oxford
                University Press.
              </p>
              <p>
                Rodríguez, A., Díaz, F., Fuertes, F., Martín, M., Montalbán, M.,
                Sánchez, E. y Zarco, V. (2014).
                <i>Psicología de las organizaciones. </i>Barcelona: UOC.
              </p>
              <p>
                Servicio de Administración Tributaria [SAT]. Emprendedor conoce
                los regímenes fiscales de las personas físicas. Recuperado de{" "}
              </p>
              <p>
                <a href="https://www.sat.gob.mx/consulta/09788/emprendedor-conoce-los-regimenes-fiscales">
                  &emsp;https://www.sat.gob.mx/consulta/09788/emprendedor-conoce-los-regimenes-fiscales
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default Referencias1;

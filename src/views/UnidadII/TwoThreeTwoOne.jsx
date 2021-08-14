import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Image, Container, Table } from "react-bootstrap";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import Actividad from "../../components/Actividad";
import SideMenu from "../../components/SideMenu/SideMenu";
import { UnidadII } from "../../linksToAssets/Actividades/UnidadII";

const TwoThreeTwoOne = () => {
  const img217 = "../../assets/images/217.png";
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <section id="2.3.2.1">
            <h4>2.3.2.1 Estructura del estado de resultados</h4>
            <p>
              Al igual que el estado de situación financiera el Estado de
              resultados debe cumplir con una estructura conformada por las
              siguientes partes:
            </p>
            <ol>
              <li>
                <p className="bold">Encabezado.</p> se conforma por los
                siguientes datos: nombre de la empresa, mención de ser estado de
                resultados y el período al que hace referencia.
              </li>
              <li>
                <p className="bold">Cuerpo.</p> se conforma por las cuentas de
                ingresos y egresos hasta obtener la utilidad neta, como puede
                observarse en la figura 2.17.
              </li>
              <li>
                <p className="bold">Firmas.</p> es la última parte del estado de
                resultados donde se plasma las firmas de quienes lo elaboran y
                lo autorizan.
              </li>
            </ol>
            <Row className="justify-content-center m-v-space">
              <Col md={5}>
                <div className="center-text">
                  Figura 2.17 Estado de resultados
                </div>
                <Image
                  className="full-img"
                  src={img217}
                  alt="Figura 2.17 Estado de resultados"
                />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center m-v-space">
              <Col md={3}>
                <Actividad
                  icon={faPuzzlePiece}
                  link={UnidadII[9]}
                  type={"Actividad"}
                  number={"2.7"}
                />
              </Col>
              <Col md={6} className="v-center-content text-descrip">
                Estructura del estado de resultados
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
}; //

export default TwoThreeTwoOne;

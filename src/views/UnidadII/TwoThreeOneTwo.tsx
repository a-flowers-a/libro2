import { useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import { faBookReader, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import Actividad from "../../components/Actividad";
import SideMenu from "../../components/SideMenu/SideMenu";
import { UnidadII } from "../../linksToAssets/Actividades/UnidadII";
import { lecUnidadII } from "../../linksToAssets/Lecturas/UnidadII";
import { scrollTop } from "../../helpers/general";

const TwoThreeOneTwo = () => {
  const img213 = "../../assets/images/213.png";
  const img214 = "../../assets/images/214.png";
  const video2 = "../../assets/videos/ley_de_la_partida_doble.mp4";

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <h4>2.3.1.2 Formas de presentar el estado de situación financiera</h4>
          <div className="justify-text">
            <p>
              En México y de acuerdo con las NIF B-6 las formas más utilizadas
              para presentar el estado de situación financiera son: en forma de
              cuenta y en forma de reporte.
            </p>
            <ol className="upper-letter">
              <li>
                <p className="bold">
                  Estado de situación financiera en forma de Cuenta.
                </p>
                Tiene un formato horizontal, anotando en la parte izquierda el
                Activo y en la parte derecha el Pasivo y el Capital Contable. Se
                basa en la fórmula <p className="bold">A = P + CC</p> tal como
                se muestra en la figura 2.13
              </li>
              <Row className="justify-content-center m-v-space">
                <Col md={5}>
                  <div className="center-text">
                    Figura 2.13 Estado de situación financiera en forma de
                    cuenta
                  </div>
                  <Image
                    className="full-img"
                    src={img213}
                    alt="Edo. de situación fin. en forma de cuenta"
                  />
                  <div className="img-source center-text">
                    Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                  </div>
                </Col>
              </Row>
              <li>
                <p className="bold">
                  Estado de situación financiera en forma de reporte.
                </p>
                Consiste en presentar en forma vertical, las cuentas del Activo,
                Pasivo y Capital contable, tal como se aprecia en la figura 2.14
              </li>
              <Row className="justify-content-center m-v-space">
                <Col md={5}>
                  <div className="center-text">
                    Figura 2.14 Estado de situación financiera en forma de
                    reporte
                  </div>
                  <Image
                    className="full-img"
                    src={img214}
                    alt="Edo. de situación fin. en forma de reporte"
                  />
                  <div className="img-source center-text">
                    Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                  </div>
                </Col>
              </Row>
            </ol>
            <p>
              Ahora que conoces las formas en que se puede presentar el estado
              de situación financiera, te invitamos a realizar la siguiente
              actividad de aprendizaje:
            </p>
            <Row className="justify-content-center m-v-space">
              <Col md={3}>
                <Actividad
                  color="blue"
                  icon={faPuzzlePiece}
                  link={UnidadII[3]}
                  type={"Actividad"}
                  number={"2.4"}
                />
              </Col>
              <Col md={6} className="v-center-content text-descrip">
                Estructura de situación financiera
              </Col>
            </Row>
            <p>
              Hasta este momento ya tienes los elementos teóricos necesarios
              para comprender qué es el estado de situación financiera, su
              estructura y sobre todo su importancia.
            </p>
            <p>
              Como ya se ha mencionado el estado de situación financiera muestra
              el resumen en términos monetarios de las operaciones de una
              entidad a una fecha determinada. Todos los estados financieros se
              basan en la información contable de la entidad, sin dicha
              información no se podría generar un estado financiero.
            </p>
            <p>
              Es importante mencionar que la contabilidad “es una técnica que se
              utiliza para el registro de las operaciones que afectan
              económicamente a una entidad y que produce sistemática y
              estructuralmente información financiera” (NIF A-1).
            </p>
            <p>
              Por lo expuesto anteriormente, a continuación veremos cómo se
              lleva acabo el registro contable de las operaciones de una
              empresa.
            </p>
            <p>Para ello es importante que realices las siguientes lecturas:</p>
            <Row className="justify-content-center m-v-space">
              <Col md={3}>
                <Actividad
                  color="blue"
                  icon={faBookReader}
                  link={lecUnidadII[1]}
                  type={"Lectura"}
                  number={"2"}
                />
              </Col>
              <Col md={6} className="v-center-content  text-descrip">
                Teoría de la partida doble
              </Col>
            </Row>
            <Row className="justify-content-center m-v-space">
              <Col md={3}>
                <Actividad
                  color="blue"
                  icon={faBookReader}
                  link={lecUnidadII[2]}
                  type={"Lectura"}
                  number={"3"}
                />
              </Col>
              <Col md={6} className="v-center-content  text-descrip">
                El impuesto al valor agregado (IVA) y su registro contable
              </Col>
            </Row>
            <p>
              En el siguiente video se explica la teoría de la partida doble.
            </p>
            <Row className="justify-content-center m-v-space">
              <Col md={7}>
                <video className="full-img" src={video2} controls />
                <div className="img-source center-text">
                  Contador Contado. (22 de agosto de 2018). Ley de la partida
                  doble. Recuperado de
                  https://www.youtube.com/watch?v=nilGlPwTx30&t=247s
                </div>
              </Col>
            </Row>
            <p>
              Ya cuentas con los elementos necesarios para realizar las
              siguientes actividades de aprendizaje:
            </p>
            <Row className="justify-content-center m-v-space">
              <Col md={3}>
                <Actividad
                  color="blue"
                  icon={faPuzzlePiece}
                  link={UnidadII[4]}
                  type={"Actividad"}
                  number={"2.5"}
                />
              </Col>
              <Col md={6} className="v-center-content  text-descrip">
                Teoría de la partida doble
              </Col>
            </Row>
            <Row className="justify-content-center m-v-space">
              <Col md={3}>
                <Actividad
                  color="blue"
                  icon={faPuzzlePiece}
                  link={UnidadII[5]}
                  type={"Actividad"}
                  number={"2.6"}
                />
              </Col>
              <Col md={6} className="v-center-content  text-descrip">
                Construcción del estado de situación financiera
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default TwoThreeOneTwo;

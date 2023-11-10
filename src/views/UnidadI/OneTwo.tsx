import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Info from "../../components/Info";
import Actividad from "../../components/Actividad";
import { scrollTop } from "../../helpers/general";

const OneTwo = () => {
  const img13 = "../../assets/images/13.png";
  const img14 = "../../assets/images/14.png";

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
                  <h2>1.2 Función y objetivo de las finanzas empresariales </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Info color="blue">
                    <Row>
                      <p>
                        <b>¿Qué son las finanzas?</b>
                      </p>
                      <p className="justify-text">
                        Finanzas es un término que seguramente has escuchado con
                        mucha frecuencia y de hecho en tu vida diaria, de algún
                        modo, realizas actividades relacionadas con dicha
                        disciplina. Hay tantas definiciones del término finanzas
                        como autores al respecto, en la figura 1.4 se rescatan
                        algunas de ellas.
                      </p>
                    </Row>
                    <Row className="d-flex justify-content-center">
                      <Image
                        className="full-img"
                        src={img14}
                        alt="¿Qué son las finanzas?"
                      />
                    </Row>
                    <Row className="img-source center-text m-v-space">
                      <Col>
                        Hernández, J., Rodríguez, E. & Jiménez, Y. (
                        {new Date().getFullYear()}).
                      </Col>
                    </Row>
                    <Row>
                      <p className="justify-text">
                        Siguiendo a Gitman (2012) las finanzas son el arte y la
                        ciencia de administrar el dinero. Al respecto, el autor
                        enfatiza que las finanzas afectan las decisiones tanto
                        de los individuos como de las empresas, ya que ambos en
                        algún momento se enfrentan a la decisión de cuánto
                        dinero gastar, cuánto ahorrar y cómo invertir los
                        ahorros.
                      </p>
                      <p>
                        Específicamente en la empresa las finanzas se enfocan
                        en:
                      </p>
                      <ul>
                        <li>
                          Cómo incrementar el dinero de los inversionistas
                        </li>
                        <li>
                          Cómo invertir el dinero para maximizar las utilidades
                        </li>
                        <li>
                          De qué modo conviene reinvertir las ganancias de la
                          empresa o distribuirlas entre los inversionistas
                        </li>
                      </ul>
                      <p className="justify-text">
                        Para lograr lo anterior se requiere del financiamiento y
                        de la inversión, ambas son consideradas como las
                        funciones principales de las finanzas. En este sentido,
                        se entiende por <b>financiamiento</b> la obtención de
                        recursos provenientes de una o varias fuentes de
                        financiamiento; en tanto que la <b>inversión</b> se
                        refiere propiamente a la utilización que se hace de
                        dichos recursos. Por ejemplo, en el caso de una
                        organización podría invertir en infraestructura
                        (instalaciones, bodegas, maquinaria, equipo, entre
                        otros) a este tipo de inversión se le conoce como
                        inversión fija; y también podría invertir en el proceso
                        operativo del negocio.
                      </p>
                    </Row>
                  </Info>
                </Col>
              </Row>
              <Row>
                <Col className="justify-text">
                  <p>
                    Hablar de finanzas implica hablar de contabilidad. La
                    contabilidad se encarga principalmente del registro de las
                    operaciones de la entidad, de la elaboración de los estados
                    financieros, de la elaboración de reportes con información
                    financiera y de calcular y pagar impuestos; por lo que
                    constituye el principal sistema de información cuantitativa
                    de la organización.
                  </p>
                  <p>
                    La contabilidad forma parte del área financiera y la función
                    financiera se lleva a cabo mediante dos actividades
                    importantes:
                  </p>
                  <b>Tesorería: </b>
                  <p>
                    Básicamente se enfoca al manejo de los recursos financieros,
                    entre sus principales actividades se encuentran:
                  </p>
                  <ul>
                    <li>Administración del flujo de efectivo</li>
                    <li>Inversiones</li>
                    <li>Presupuestos</li>
                    <li>Financiamiento</li>
                    <li>Administración de activos</li>
                  </ul>

                  <b>Contraloría:</b>
                  <p>
                    Área encargada de coordinar y dirigir las siguientes
                    actividades:
                  </p>
                  <ul>
                    <li>Contabilidad</li>
                    <li>Pronósticos</li>
                    <li>Administración de riesgos</li>
                    <li>
                      Verificar que la Administración esté de acuerdo con los
                      objetivos de la empresa
                    </li>
                    <li>Auditoría interna</li>
                    <li>Desarrollo de políticas y procedimientos</li>
                  </ul>
                  <p>
                    Para que la función financiera se lleve a cabo en forma
                    adecuada requiere de información verídica y confiable
                    proporcionada por el área contable.
                  </p>
                  <p>
                    En la figura 1.3 encontrarás algunas de las principales
                    funciones de las áreas contable y financiera.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image
                    className="full-img"
                    src={img13}
                    alt="Figura 1.3 contabilidad y finanzas"
                  />
                </Col>
              </Row>
              <Row className="img-source center-text">
                <Col>
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (
                  {new Date().getFullYear()}).
                </Col>
              </Row>
              <Row className="m-v-space">
                <Col>
                  <p>
                    Como se puede apreciar en la figura 1.3 la función contable
                    debe considerarse como un insumo necesario para la función
                    financiera.
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center m-b-space">
                <Col md={4}>
                  <Actividad
                    color="aqua"
                    icon={faPuzzlePiece}
                    link={
                      "https://drive.google.com/file/d/1wfSNJHqnOdg56pfnvvORsJvzrRGrCnyE/view"
                    }
                    type={"Actividad 1.2"}
                    number={""}
                  />
                </Col>
                <Col md={6} className="v-center-content text-descrip">
                  Actividad 1.2. Las finanzas y su importancia
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

export default OneTwo;

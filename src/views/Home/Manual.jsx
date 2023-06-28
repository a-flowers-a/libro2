import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";

function Manual() {
  const capabilityImg = "../../../../assets/images/capability.png";
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <HomeMenu />
        <Container className="padding-md">
          <Row>
            <ToBookButton />
          </Row>
          <Row className="m-v-space ">
            <Col>
              <h2>Manual de usuario</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={3}>
              <Image className="full-img" src={capabilityImg} alt="Path" />
            </Col>
            <Col sm={8}>
              <div className="full-card justify-text">
                <p>
                  Este polilibro se construyó como un apoyo didáctico en tus
                  clases de Finanzas empresariales en las modalidades
                  escolarizada e híbrida. En cada unidad temática podrás
                  visualizar un
                  <b>
                    <br />
                    menú o barra de navegación conformada por: glosario,
                    introducción, contenido temático, material de apoyo, cierre,
                    evaluación, y referencias.
                  </b>
                </p>
                <p>
                  A continuación se describe lo que encontrarás en cada una de
                  las secciones antes mencionadas:
                </p>
                <ul>
                  <li>
                    <p>
                      <b>Glosario. </b> En esta parte del menú al teclear alguno
                      de los términos financieros (incluido en el RDD),
                      encontrarás su significado debidamente referenciado
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Introducción. </b> Al leer este apartado tendrás un
                      panorama del contenido de este polilibro y por tanto de lo
                      que aprenderás en cada unidad temática.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Contenido temático. </b>En esta sección encontrarás la
                      explicación de cada uno de los temas y tendrás la opción
                      de poner en práctica lo aprendido. Adicionalmente,
                      visualizarás botones en los que al seleccionarlos podrás
                      consultar o bien descargar: lecturas, formularios,
                      <i>links</i> a videos de internet y actividades de
                      aprendizaje. Las actividades de aprendizaje podrán
                      desarrollarse en forma individual o en equipo en función
                      de la estrategia didáctica del profesor o profesora;
                      algunas tienen valor para tu evaluación y otras son
                      formativas y se subirán en la plataforma indicada por tu
                      profesor(a).
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Material de apoyo. </b>En este apartado podrás
                      consultar o bien descargar: lecturas, organizadores
                      gráficos, actividades de aprendizaje, videos y
                      formularios.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Cierre. </b>Al término de cada unidad temática
                      encontrarás conclusiones, comentarios, reflexiones y un
                      preámbulo para la siguiente unidad temática.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Evaluación. </b>Al concluir cada unidad temática
                      encontrarás un apartado de evaluación, con reactivos que
                      aparecerán de manera aleatoria, al dar clic en la opción
                      enviar podrás ver el resultado que obtuviste y a manera de
                      retroalimentación aparecerá la respuesta correcta.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Referencias. </b>En esta opción encontrarás las
                      referencias con base en las cuales se desarrollaron los
                      contenidos temáticos.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Manual

export default Manual;

import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";

function Method() {
  const methodImg = "../../../../assets/images/method.png";

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
              <h2>Metodología</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={4}>
              <Image className="full-img" src={methodImg} alt="Path" />
            </Col>
          </Row>
          <Row className="justify-content-center ">
            <Col sm={11}>
              <div className="full-card justify-text">
                <p>
                  El propósito de la Unidad de Aprendizaje (UA) Administración
                  de Proyectos es: formula el estudio mercadológico, técnico y
                  financiero de un proyecto de inversión, con base en la
                  metodología de generación y evaluación de proyectos. Para
                  lograr el propósito planteado, la presente UA se abordará a
                  partir de la estrategia de aprendizaje orientada a proyectos
                  así como del método heurístico.
                </p>
                <p>Las unidades temáticas que conforman esta UA son:</p>
                <p>
                  I. Elementos conceptuales y preparación de la administración y
                  evaluación de proyectos
                </p>
                <p>II. Estudio de mercado</p>
                <p>III. Estudio técnico</p>
                <p>IV. Estudio administrativo y de organización del proyecto</p>
                <p>V. Estudio financiero</p>
                <p>
                  VI. Evaluación financiera e impacto social y ecológico del
                  proyecto
                </p>
                <p>
                  Con el fin de obtener mejores resultados en cuanto a tu
                  autoaprendizaje, te recomendamos estudiar cada una de las
                  unidades temáticas en la secuencia en la que aparecen. Si
                  deseas profundizar aún más en algún tema, te sugerimos
                  consultar la bibliografía detallada en el programa académico.
                </p>
                <p>
                  Este recurso didáctico digital (RDD) fue construido con el
                  propósito de promover el aprendizaje autónomo, así como de
                  facilitar, enriquecer y fortalecer los procesos de
                  enseñanza-aprendizaje de la UA en cuestión en la modalidad
                  escolarizada. Con el fin de obtener mejores resultados en
                  cuanto a tu autoaprendizaje, te recomendamos estudiar cada una
                  de las unidades temáticas en la secuencia en la que aparecen
                  en este RDD. Si deseas profundizar aún más en algún tema, te
                  sugerimos consultar la bibliografía detallada en el programa
                  académico. Para facilitar la navegación, en cada una de las
                  unidades temáticas encontrarás una sección con los siguientes
                  botones:
                </p>
                <p>
                  Evaluación de los aprendizajes, en donde puedes consultar
                  aspectos de interés acerca de la evaluación y acreditación de
                  la Unidad de Aprendizaje. Estrategias de aprendizaje, se
                  detallan las actividades, técnicas y medios necesarias para el
                  logro de los aprendizajes esperados. Recursos, en esta parte
                  encontrarás lecturas complementarias, ligas de videos y
                  artículos de internet, así como presentaciones de los
                  contenidos en power point. Actividades de aprendizaje, en este
                  botón podrás descargar las actividades de aprendizaje. En cada
                  una de las actividades se especifican: el propósito, las
                  instrucciones, la ponderación en la calificación y la
                  indicación si debe trabajarse en forma individual o en equipo.
                  La entrega de evidencias y su respectiva retroalimentación se
                  hará en las sesiones de clase. Desarrolla tu plan de negocio,
                  aquí encontrarás el índice del plan de negocio que
                  desarrollarás, en equipo, a lo largo del semestre, mismo que
                  entregarás como producto final. Test ¿qué aprendiste?, con
                  base en los conocimientos adquiridos, podrás contestar un test
                  que te ayudará a obtener retroalimentación y a reflexionar
                  sobre el progreso de tu aprendizaje.
                </p>
                <p>
                  En la parte inferior del RDD podrás consultar los contenidos
                  por unidad temática, en donde encontrarás la explicación de
                  cada uno de los temas con apoyo de imágenes, cuadros,
                  gráficas, organizadores gráficos y diversos ejemplos para
                  reforzar tu aprendizaje. Es importante destacar que, dentro
                  del modal, al concluir la lectura de algunos temas encontrarás
                  un botón en donde también puedes descargar las actividades de
                  aprendizaje. Adicionalmente, antes de consultar los contenidos
                  de cada una de las unidades temáticas podrás visualizar el
                  apartado titulado ¿de qué trata esta unidad? y así tener un
                  panorama general de lo que se abordará en la unidad temática
                  en cuestión.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Method

export default Method;

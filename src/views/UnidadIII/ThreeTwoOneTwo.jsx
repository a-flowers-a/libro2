import React, { useEffect } from "react";
import { Row, Col, Container, Image, Accordion } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Info from "../../components/Info";
import { scrollTop } from "../../helpers/general";

const ThreeTwoOneTwo = () => {
  const razonesSimples = "../../assets/images/razonesSimples.png";
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
              <h2>3.2.1.2 Método de razones simples</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Las razones o índices (ratios en el idioma inglés), se ocupan en
                la vida diaria, por ejemplo, algunas personas decidirán comprar
                un automóvil considerando el recorrido por litro de gasolina, es
                decir; utilizan índices para valorar un desempeño específico, en
                este caso de un automóvil. Del mismo modo, los índices o razones
                financieras se utilizan para ponderar y evaluar el desempeño
                operativo de las empresas.
              </p>
              <p>
                Matemáticamente se denomina "razón" a la relación que existe
                entre dos cantidades de la misma especie. Ahora bien, entre los
                diversos rubros que constituyen a los estados financieros
                existen ciertas relaciones, que dan información sobre la
                estructura financiera y la productividad de la entidad.
              </p>
              <p>
                El análisis financiero por el método de razones simples es de
                gran apoyo para las empresas, permite identificar puntos fuertes
                y probables puntos débiles (principales problemas) en el negocio
                y, adicionalmente puede utilizarse también para determinar
                probabilidades y tendencias. Es importante considerar que este
                método es solo una herramienta; sirve como auxiliar para el
                estudio de las cifras de los negocios, por lo que es necesario
                reconocer sus limitaciones y en este sentido resaltar la
                relevancia que tiene el <i>feeling</i> del analista financiero.
              </p>
              <p>
                Cabe señalar que no es conveniente limitar el número de las
                razones ni su aplicación en cada caso concreto; pueden existir
                tantas razones financieras como relaciones se deseen hacer entre
                los diferentes renglones de los estados financieros, siempre y
                cuando dicha relación entre los elementos se describa y tenga un
                sentido lógico.
              </p>
              <p>
                Para efectos de este curso, nos enfocaremos en los siguientes
                grupos de razones simples: índices de rentabilidad, índices de
                liquidez, índices de endeudamiento, índices de rotación o
                administración de activos e índices para la valuación de las
                inversiones <b>(Figura x)</b>.
              </p>
            </Col>
          </Row>
          <Row className="center-text">
            <Col>
              <Image
                className="full-img"
                src={razonesSimples}
                alt="Estado de resultados"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Enseguida encontrarás la explicación con su respectivo ejemplo
                de los índices incluidos en cada uno de los grupos de razones
                simples antes mencionados.
              </p>
              <Info color="purple">
                NOTA: Antes de continuar descarga los siguientes estados
                financieros, porque en éstos se basa el cálculo de todas las
                razones financieras que se explican a continuación
              </Info>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>I. Índices de rentabilidad</h3>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoOneTwo;

import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Image, Container } from "react-bootstrap";
import CardButton from "../../components/CardButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../../components/SideMenu/SideMenu";

function IntroduccionII() {
    
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container>
          <section id="IntroduccionII">
            <Row>
              <Col>
                <h2>Introducción</h2>
              </Col>
            </Row>
            <Row className="justify-content-center m-v-space">
              <Col m={9}>
                <p className="justify-text">
                    Las organizaciones son parte medular de nuestras vidas.
                    A través del tiempo se ha buscado la manera de intervenir en las 
                    organizaciones para hacerlas más productivas, más rentables y 
                    por supuesto, más competitivas. 
                    Para lograrlo es necesario, entre otros factores, la generación 
                    y utilización de información financiera oportuna y confiable.
                </p>
                <p>
                    Alguna vez te has puesto a pensar o a reflexionar sobre: 
                    ¿qué es la información financiera?, ¿cómo se genera?, 
                    ¿dónde se puede visualizar? o mejor aún ¿cómo se interpreta? y 
                    ¿cómo se utiliza en la toma de decisiones empresariales?
                </p>
                <p>
                    La respuesta a estas y otras interrogantes las encontrarás al ir 
                    abordando los temas desarrollados en este recurso didáctico 
                    digital (RDD), que pretende apuntalar la comprensión de los 
                    contenidos de la unidad temática 2 de la unidad de aprendizaje 
                    Finanzas Empresariales. 
                    Ésta comprende cinco unidades temáticas, el RDD se centra 
                    únicamente en la unidad temática 2: Importancia y 
                    utilización de la información financiera. 
                    Se eligió esta unidad porque sus contenidos te van a ayudar 
                    a contextualizar la importancia del manejo de la información 
                    financiera y al mismo tiempo aprenderás a construir los estados 
                    financieros básicos con base en las Normas de 
                    Información Financiera (NIF).
                </p>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
}
export default IntroduccionII;

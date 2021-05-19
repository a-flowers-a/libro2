import React from 'react';
import PoliHeader from '../components/Header';
import PoliFooter from '../components/Footer';
import { Container, Image, Row, Col } from 'react-bootstrap';
import CardButton from '../components/CardButton';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Welcome(){
    const frontImg = "../../assets/images/girl-books.svg";
    function sendTo(page){
        window.location.href = page;
    }//sendTo

    return(
        <div className="primary-div">
            <PoliHeader />
                <Container fluid>
                    <Row className="m-v-space">
                        <Col>
                            <div className="enter-card">
                                <CardButton
                                    cardColor={"light-blue"}
                                    icon={faArrowRight}
                                    clickFunc={() => sendTo('/book')}
                                    text={"Ir a polilibro"}
                                    textColor={"white"}
                                />
                            </div>  
                        </Col>
                    </Row>
                    <Row className="justify-content-center m-v-space">
                        <Col sm={8} className="main-card white-bg">
                            <Row className="justify-content-center m-b-space">
                                <Col sm={6}>
                                    <Image 
                                        className="full-img"
                                        src={frontImg}
                                        alt="Books" 
                                    />
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col sm={12}>
                                    <div className="full-card justify-text purple-bg white">
                                        <p>Recibe la más cordial bienvenida a este recurso didáctico digital (RDD) de la Unidad de Aprendizaje (UA) de Administración de Proyectos que se imparte en la Escuela Superior de Cómputo del Instituto Politécnico Nacional. Este RDD fue construido con el propósito de promover el aprendizaje autónomo, así como de facilitar, enriquecer y fortalecer los procesos de enseñanza-aprendizaje de la UA en cuestión en la modalidad escolarizada.</p>
                                        <p>Esperamos que las próximas semanas sean enriquecedoras de experiencias de aprendizaje, para lo cual es indispensable tener en cuenta algunos elementos clave tales como: el compromiso e interacción de los actores (participantes y facilitadores del aprendizaje), la conformación de un gran equipo de trabajo colaborativo y la realización de las actividades de aprendizaje de acuerdo con las especificaciones proporcionadas y en los tiempos establecidos.</p>
                                        <p>Nuestra intención es que disfrutes esta experiencia educativa, ¡te deseamos el mayor de los éxitos!</p>
                                        <p>Para cualquier duda o comentario, en relación a este material, puedes contactarnos en:</p>
                                        <p>johernandezja@ipn.mx y jimenezg@ipn.mx</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center m-v-space">
                        <Col sm={4}>
                            <CardButton 
                                cardColor={"dark-blue"}
                                clickFunc={() => sendTo('/sources')}
                                text={"Fuentes"}
                                textColor={"white"}
                            />
                        </Col>
                        <Col sm={4}>
                            <CardButton
                                cardColor={"dark-blue"}
                                clickFunc={() => sendTo('/methodology')}
                                text={"Metodología"}
                                textColor={"white"}
                            />
                        </Col>
                    </Row>
                </Container> 
                <PoliFooter />
        </div>
    );
}//Welcome

export default Welcome;
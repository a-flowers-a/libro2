import React from 'react';
import PoliHeader from '../../components/Header';
import PoliFooter from '../../components/Footer';
import { Row, Col, Image, Container } from 'react-bootstrap';

function TwoThree(){
    const img24 = "../../assets/images/24.png";
    const img25 = "../../assets/images/25.png";
    const video1= "../../assets/videos/que_son_los_estados_financieros.mp4";
    return(
        <div className="primary-div">
            <PoliHeader />
            <Container fluid>
                <section id="2.3">
                    <h2>2.3 Estados financieros básicos</h2>
                    <div className="justify-text">
                        <p>De manera personal, cuando queremos saber nuestro estado de salud acudimos con un médico. Éste nos revisa, nos hace preguntas específicas y en algunos casos nos solicita que nos realicemos algunos otros estudios, y con dicha información el médico puede darnos un diagnóstico sobre nuestro estado de salud. De igual manera, para identificar la salud financiera de una empresa o negocio necesitamos de la información que proporcionan los estados financieros.</p>
                        <p>Los estados financieros presentan el resumen de la información de todas las operaciones registradas en la contabilidad de una empresa. Cabe destacar que dicha información debe presentarse en forma ordenada, convencional y basada en las Normas de Información Financiera (NIF), con el propósito de que los usuarios interesados puedan analizar e interpretar la información para la toma de decisiones.</p>
                        <p>Por lo antes mencionado, se concluye que los estados financieros muestran, en términos monetarios, la situación económica y financiera de una empresa durante un tiempo determinado. La información que proporcionan dichos estados es medular para conocer y desde luego analizar aspectos como: el índice de rentabilidad, el grado de liquidez y de solvencia, el apalancamiento, la rotación de cuentas por cobrar, por mencionar algunos.</p>
                        <p>De acuerdo con la NIF A-3 Los estados financieros básicos son (figura 2.4):</p>
                    </div>
                    <Row className="justify-content-center m-v-space">
                        <Col md={6}>
                            <div className="center-text">Figura 2.4 Estados financieros básicos</div>
                            <Image 
                                className="full-img"
                                src={img24}
                                alt="NIF" 
                            />
                            <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura basada en las NIF (2020)</div>
                        </Col>
                    </Row>
                    <p>En este curso, por su alcance, solo abordaremos los dos primeros: estado de situación financiera y estado de resultados (Figura 2.5).</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={6}>
                            <div className="center-text">Figura 2.5 Estados financieros básicos</div>
                            <Image 
                                className="full-img"
                                src={img25}
                                alt="NIF" 
                            />
                            <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                        </Col>
                    </Row>
                    <p>En el siguiente video, encontrarás información complementaria acerca de los estados financieros.</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={6}>
                            <video className="full-img" src={video1} controls />
                            <div className="img-source center-text">EBC Academia. (14 de agosto de 2012). ¿Qué son los estados financieros? Recuperado de: https://www.youtube.com/watch?v=CR8miLg0SIg&t=4s</div>
                        </Col>
                    </Row>
                </section>
            </Container>   
            <PoliFooter />
        </div>
    );
}//TwoThree

export default TwoThree;
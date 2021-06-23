import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import CardButton from '../components/CardButton';
import Actividad from './Actividad';

const img21 = "../../assets/images/21.png";
const img22 = "../../assets/images/22.png";
const img23 = "../../assets/images/23.png";
const img24 = "../../assets/images/24.png";
const img25 = "../../assets/images/25.png";
const img26 = "../../assets/images/26.png";
const img27 = "../../assets/images/27.png";
const video1= "../../assets/videos/que_son_los_estados_financieros.mp4"

function Unit1() {
    return (
        <div>
            <section id="2.1">
                <h2>2.1 La información financiera</h2>
                <p>La información financiera que se obtiene de la contabilidad tiene las siguientes características:</p>
                <ol class="upper-letter">
                    <li>Es cuantitativa porque se expresa en unidades monetarias</li>
                    <li>Es descriptiva en razón de que muestra la posición y el desempeño financiero de la entidad</li>
                </ol>
                <p className="justify-text">El objetivo primordial de la información financiera radica en la utilidad que ésta tiene para los usuarios en la toma de decisiones económicas (figura 2.1). Dicha información se ve reflejada en los estados financieros, mismos que muestran cómo va el negocio, permitiendo evaluar su desempeño en función de los objetivos propuestos; adicionalmente, dichos estados proporcionan información con la que se puede estimar el comportamiento futuro de algunos aspectos, por ejemplo del flujo de efectivo.</p>
                <Row className="justify-content-center m-v-space">
                    <Col md={4}>
                        <div className="center-text">Figura 2.1 Importancia de la información financiera</div>
                        <Image 
                            className="full-img"
                            src={img21}
                            alt="questions" 
                        />
                        <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                    </Col>
                </Row>
            </section>
            <section id="2.2">
                <h2>2.2 Las Normas de Información Financiera (NIF)</h2>
                <div className="justify-text">
                    <p>Las NIF (2020) definen a las Normas de Información Financiera como “el conjunto de pronunciamientos normativos, conceptuales y particulares emitidos por el Consejo Mexicano de Normas de Información Financiera (CINIF) o transferidos al CINIF, que regulan la información contenida en los estados financieros y sus notas, en un lugar y fecha determinados, que son aceptados de manera amplia y generalizada por todos los usuarios de la información financiera” (p. 5).</p>
                    <p>Las NIF tienen ocho postulados básicos (figura 2.2) que sustituyen a los Principios de Contabilidad Generalmente Aceptados como los conceptos teóricos básicos que rigen el sistema de información contable y el ambiente bajo el cual debe operar. </p>
                </div>
                <Row className="justify-content-center m-v-space">
                    <Col md={6}>
                        <div className="center-text">Figura 2.2 Postulados básicos de las NIF</div>
                        <Image 
                            className="full-img"
                            src={img22}
                            alt="NIF" 
                        />
                        <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura basada en los postulados de las NIF.</div>
                    </Col>
                </Row>
            </section>
            <section id="2.2.1">
                <h3>2.2.1 Importancia de las Normas de Información Financiera (NIF)</h3>
                <div className="justify-text">
                    <p>En las últimas décadas nuestra sociedad ha experimentado cambios trascendentales en todos los ámbitos de la vida humana. Con la globalización, específicamente hablando del mundo de los negocios, se requiere hacer adecuaciones, lo que exige que la normatividad financiera también se actualice para dar respuesta a las necesidades de los interesados o usuarios de la información financiera, tal es el caso de accionistas o dueños, administradores, proveedores, acreedores, clientes y unidades gubernamentales, entre otros.</p>
                    <p>En este sentido, las NIF (figura 2.3) establecen la normatividad o marco regulador para emitir los estados financieros y así unificar los criterios para su elaboración.</p>
                    <p>Con la intención de profundizar un poco más en el tema, realiza la siguiente actividad:</p>
                </div>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <Actividad 
                            link={"https://drive.google.com/file/d/1GqdpvBckyuPvUdfc29d8vmPSRAMv-tIh/view?usp=sharing"}
                            number={"2.1"}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center m-v-space">
                    <Col md={6}>
                        <div className="center-text">Figura 2.3 Normas de Información Financiera</div>
                        <Image 
                            className="full-img"
                            src={img23}
                            alt="NIF" 
                        />
                        <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura basada en las NIF.</div>
                    </Col>
                </Row>
            </section>
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
                        <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura basada en las NIF.</div>
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
                        <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura basada en las NIF.</div>
                    </Col>
                </Row>
                <p>En el siguiente video, encontrarás información complementaria acerca de los estados financieros.</p>
                <Row className="justify-content-center m-v-space">
                    <Col md={8}>
                        <video className="full-img" src={video1} controls />
                        <div className="img-source center-text">Fuente: https://www.youtube.com/watch?v=CR8miLg0SIg&t=4s</div>
                    </Col>
                </Row>
            </section>
            <section id="2.3.1">
                <h3>2.3.1 Estado de situación financiera (también llamado estado de posición financiera o balance general)</h3>
                <div className="justify-text">
                    <p>Al estado de situación financiera también se le conoce como estado de posición financiera o balance general; es un documento financiero que muestra en términos monetarios el valor de los activos (bienes y derechos); de los pasivos (deudas y obligaciones), así como del capital contable (valor del patrimonio) de la entidad. Cabe resaltar que este documento financiero refleja la situación financiera de una entidad económica a una fecha determinada.</p>
                    <p>En la figura 2.6 encontrarás algunas definiciones del estado de situación financiera.</p>
                </div>
                <Row className="justify-content-center m-v-space">
                    <Col md={6}>
                        <div className="center-text">Figura 2.6 Definiciones del estado de situación financiera</div>
                        <Image 
                            className="full-img"
                            src={img26}
                            alt="Edo. de Situación Fin." 
                        />
                        <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura basada en la bibliografía consultada.</div>
                    </Col>
                </Row>
                <div className="justify-text">
                    <p>En otras palabras y como analogía, el estado de situación financiera es como una fotografía que tomamos en un momento en el tiempo, que nos da información de cómo se encuentra la empresa justo en ese momento en términos de qué recursos tiene para trabajar y a quién se los debe (figura 2.7), razón por la que el balance general siempre es a una fecha determinada.</p>
                </div>
                <Row className="justify-content-center m-v-space">
                    <Col md={6}>
                        <div className="center-text">Figura 2.7 Información que proporciona el estado de situación financiera</div>
                        <Image 
                            className="full-img"
                            src={img27}
                            alt="Edo. de Situación Fin." 
                        />
                        <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                    </Col>
                </Row>
                
            </section>
        </div>
        
    );
}

export default Unit1;
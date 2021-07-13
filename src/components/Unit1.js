import { faBookReader, faFolderPlus, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import Actividad from './Actividad';

const img21 = "../../assets/images/21.png";
const img22 = "../../assets/images/22.png";
const img23 = "../../assets/images/23.png";
const img24 = "../../assets/images/24.png";
const img25 = "../../assets/images/25.png";
const img26 = "../../assets/images/26.png";
const img27 = "../../assets/images/27.png";
const img28 = "../../assets/images/28.png";
const img29 = "../../assets/images/29.png";
const img210 = "../../assets/images/210.png";
const img211 = "../../assets/images/211.png";
const img212 = "../../assets/images/212.png";
const img213 = "../../assets/images/213.png";
const img214 = "../../assets/images/214.png";
const img215 = "../../assets/images/215.png";
const img216 = "../../assets/images/216.png";

const video1= "../../assets/videos/que_son_los_estados_financieros.mp4";
const video2= "../../assets/videos/ley_de_la_partida_doble.mp4";

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
                            icon={faPuzzlePiece}
                            link={"https://drive.google.com/file/d/1GqdpvBckyuPvUdfc29d8vmPSRAMv-tIh/view?usp=sharing"}
                            number={"2.1"}
                            type={"Actividad"}
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
            <section id="2.3.1.1">
                <h4>2.3.1.1 Estructura del estado de situación financiera</h4>
                <div className="justify-text">
                    La estructura del estado de situación financiera se conforma de las siguientes partes:
                    <ol>
                        <li><p className="bold">Encabezado.</p> Se conforma por: nombre del negocio o sociedad; enseguida, de manera explícita, se hace mención que se trata del estado de situación financiera o estado de posición financiera; se especifica el tipo de moneda y, finalmente la fecha (siempre es a una fecha determinada y no a un período).</li>
                        <li><p className="bold">Cuerpo.</p> Se estructura con tres grandes grupos de cuentas: Activos, Pasivos y Capital contable.</li>
                        <li><p className="bold">Firmas.</p> Esta parte por lo regular aparece al final del documento financiero, en la que se visualiza los nombres y firmas del propietario o funcionario quien autoriza, así como de quienes lo elaboran y lo revisan.</li>
                    </ol>
                </div>
                En la Figura 2.8 se muestran las partes antes mencionadas
                <Row className="justify-content-center m-v-space">
                    <Col md={6}>
                        <div className="center-text">Figura 2.8 Estructura del estado de situación financiera</div>
                        <Image 
                            className="full-img"
                            src={img28}
                            alt="Edo. de Situación Fin." 
                        />
                        <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                    </Col>
                </Row>
                <div className="justify-text">
                    <p className="bold paragraph">Cuentas del estado de situación financiera</p>                
                    <p>Tal y como se ha mencionado las cuentas que conforman al estado de situación financiera son: Activo, Pasivo y Capital Contable, mismas que a continuación se detallan:</p>
                    <p><p className="bold">Activo.</p> En términos sencillos los activos representan tanto los bienes de la entidad así como los derechos que ha adquirido. En este entendido los bienes son todo aquello que la empresa adquiere (de contado o a crédito) para su adecuada operación; en tanto que los derechos surgen de los acuerdos que contrae la empresa con terceros, por ejemplo en la contratación de un seguro o una fianza la empresa tiene el derecho de hacer valer la póliza contratada en caso de un siniestro.</p>
                    <p>De acuerdo con las NIF A-5 un activo es “un recurso controlado por una entidad, identificado, cuantificado en términos monetarios, del que se espera fundamentalmente beneficios económicos futuros, derivado de operaciones ocurridas en el pasado, que han afectado económicamente a dicha entidad”.</p>
                    <p>Las cuentas de Activo de acuerdo con las NIF (2020) se clasifican en:</p>
                    <ol class="upper-letter">
                        <li><p className="bold">Activo a corto plazo o circulante.</p> Es aquél que se espera realizar, consumir o vender durante el ciclo normal de operaciones de la entidad (NIF B-11); de manera general se considera el corto plazo hasta doce meses. En la figura 2.9 se muestran algunos ejemplos de activos circulantes.</li>
                        <Row className="justify-content-center m-v-space">
                            <Col md={6}>
                                <div className="center-text">Figura 2.9 Ejemplos de Activo circulante</div>
                                <Image 
                                    className="full-img"
                                    src={img29}
                                    alt="Activo circulante" 
                                />
                                <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                            </Col>
                        </Row>
                        <li><p className="bold">Activo a largo plazo o no circulante.</p> Incluye activos tangibles, intangibles y financieros, que por su naturaleza, son recuperables a largo plazo; es decir, no son recuperables en el ciclo normal de operaciones (NIF-B6). Dentro de este grupo se encuentran las propiedades, planta y equipo los cuales tienen como principal característica que son tangibles y depreciables. En la figura 2.10 podrás visualizar algunos ejemplos de activos no circulantes.</li>
                        <Row className="justify-content-center m-v-space">
                            <Col md={6}>
                                <div className="center-text">Figura 2.10 Ejemplos de activo no circulante</div>
                                <Image 
                                    className="full-img"
                                    src={img210}
                                    alt="Activo No circulante" 
                                />
                                <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                            </Col>
                        </Row>
                    </ol>
                    <p><p className="bold">Pasivo.</p> comprende las deudas y obligaciones que tiene la empresa. Una deuda es un compromiso de pago; en tanto que la obligación es una responsabilidad o compromiso que adquiere la empresa en la que se obliga a cumplir los términos acordados en un contrato.
                    Las (NIF A-5) definen al pasivo como “es una obligación presente de una entidad, identificada, cuantificada en términos monetarios que representa una probable disminución de recursos económicos y derivados de operaciones ocurridas en el pasado, que han afectado económicamente a dicha entidad”.</p>
                    <p>Las cuentas de Pasivo de acuerdo con las NIF se clasifican en:</p>
                    <ol class="upper-letter">
                        <li><p className="bold">Pasivo a corto plazo o circulante.</p> Se refiere a las deudas y obligaciones de la entidad cuyo vencimiento es a corto plazo; es decir, con vencimiento no mayor de un año.</li>
                        <li><p className="bold">Pasivo a largo plazo o no circulante.</p> Siendo su principal característica que el vencimiento de la deuda o de la obligación es mayor a un año.</li>
                    </ol>
                    <p>En la Figura 2.11 se muestran dos cuentas que pertenecen al pasivo.</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={6}>
                            <div className="center-text">Figura 2.11 Ejemplos de pasivo</div>
                            <Image 
                                className="full-img"
                                src={img211}
                                alt="Pasivo" 
                            />
                            <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                        </Col>
                    </Row>
                    <p><p className="bold">Capital contable.</p> Se refiere al patrimonio de la empresa, mismo que se conforma por el capital contribuido y por el capital ganado.
                    El capital contribuido es la porción del capital contable que lo integran las aportaciones de los propietarios; incluye las aportaciones para futuros aumentos de capital; las primas de emisión de acciones y otros instrumentos financieros que por sustancia económica califican como capital (NIF, 2020).</p>
                    <p>El capital ganado se integra principalmente por las utilidades o ganancias y la reserva legal.</p>
                    En la Figura 2.12 se muestran dos cuentas que son parte del capital contable.
                    
                    <Row className="justify-content-center m-v-space">
                        <Col md={6}>
                            <div className="center-text">Figura 2.12 Ejemplos de cuentas de capital contable</div>
                            <Image 
                                className="full-img"
                                src={img212}
                                alt="Capital contable" 
                            />
                            <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                        </Col>
                    </Row>
                    <p>En la siguiente lectura se abordan a detalle las principales cuentas que conforman al estado de situación financiera.</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={3}>
                            <Actividad 
                                icon={faBookReader}
                                link={"https://drive.google.com/file/d/1OZKRuucT-gA8tATkzAX7ut1LKG6tedWl/view?usp=sharing"}
                                type={"Lectura"}
                                number={"1"}
                            />
                        </Col>
                        <Col md={6} className="v-center-content">
                            Principales cuentas del estado de situación financiera, estado de posición financiera o balance general
                        </Col>
                    </Row>
                    <p>A continuación, encontrarás un organizador gráfico, como material de apoyo, que contiene la clasificación de las principales cuentas del estado de situación financiera.</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={3}>
                            <Actividad 
                                icon={faFolderPlus}
                                link={"../../assets/apoyo/Principales_cuentas_del_estado_de_situación_financiera.pdf"}
                                type={"Material de apoyo"}
                                number={"1"}
                            />
                        </Col>
                        <Col md={6} className="v-center-content">
                            Organizador gráfico. Cuentas del estado de situación financiera
                        </Col>
                    </Row>
                    <p>Ya cuentas con los elementos suficientes para realizar las siguientes actividades de aprendizaje:</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={3}>
                            <Actividad 
                                icon={faPuzzlePiece}
                                link={"https://drive.google.com/file/d/12PCIXyLLl0o-_dhG1TfNAIw-bskMzo4M/view?usp=sharing"}
                                type={"Actividad"}
                                number={"2.2"}
                            />
                        </Col>
                        <Col md={3}>
                            <Actividad 
                                icon={faPuzzlePiece}
                                link={"https://drive.google.com/file/d/1UPLwP7Wv5RuCIcBYRZi-TvdiSXcxoHPw/view?usp=sharing"}
                                type={"Actividad"}
                                number={"2.3"}
                            />
                        </Col>
                    </Row>
                </div>
            </section>

            <section id="2.3.1.2">
                <h4>2.3.1.2 Formas de presentar el estado de situación financiera</h4>
                <div className="justify-text">
                    <p>En México y de acuerdo con las NIF B-6 las formas más utilizadas para presentar el estado de situación financiera son: en forma de cuenta y en forma de reporte.</p>
                    <ol class="upper-letter">
                        <li><p className="bold">Estado de situación financiera en forma de Cuenta.</p> Tiene un formato horizontal, anotando en la parte izquierda el Activo y en la parte derecha el Pasivo y el Capital Contable. Se basa en la fórmula A = P + CC tal como se muestra en la figura 2.13</li>
                        <Row className="justify-content-center m-v-space">
                            <Col md={6}>
                                <div className="center-text">Figura 2.13 Estado de situación financiera en forma de cuenta</div>
                                <Image 
                                    className="full-img"
                                    src={img213}
                                    alt="Edo. de situación fin. en forma de cuenta" 
                                />
                                <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                            </Col>
                        </Row>
                        <li><p className="bold">Estado de situación financiera en forma de reporte.</p> Consiste en presentar en forma vertical, las cuentas del Activo, Pasivo y Capital contable, tal como se aprecia en la figura 2.14</li>
                        <Row className="justify-content-center m-v-space">
                            <Col md={6}>
                                <div className="center-text">Figura 2.14 Estado de situación financiera en forma de reporte</div>
                                <Image 
                                    className="full-img"
                                    src={img214}
                                    alt="Edo. de situación fin. en forma de reporte" 
                                />
                                <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                            </Col>
                        </Row>
                    </ol>
                    <p>Ahora que conoces las formas en que se puede presentar el estado de situación financiera, te invitamos a realizar la siguiente actividad de aprendizaje</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={3}>
                            <Actividad 
                                icon={faPuzzlePiece}
                                link={"https://drive.google.com/file/d/11_F4xMMCAn3yJGMeW4EuRZpscdjq8W6k/view?usp=sharing"}
                                type={"Actividad"}
                                number={"2.4"}
                            />
                        </Col>
                    </Row>
                    <p>Hasta este momento ya tienes los elementos teóricos necesarios para comprender qué es el estado de situación financiera, su estructura y sobre todo su importancia.</p>
                    <p>Como ya se ha mencionado el estado de situación financiera muestra el resumen en términos monetarios de las operaciones de una entidad a una fecha determinada. Todos los estados financieros se basan en la información contable de la entidad, sin dicha información no se podría generar un estado financiero.</p>
                    <p>Es importante mencionar que la contabilidad “es una técnica que se utiliza para el registro de las operaciones que afectan económicamente a una entidad y que produce sistemática y estructuralmente información financiera” (NIF A-1).</p>
                    <p>Por lo expuesto anteriormente, a continuación veremos cómo se lleva acabo el registro contable de las operaciones de una empresa.</p>
                    <p>Para ello es importante que realices las siguientes lecturas:</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={3}>
                            <Actividad 
                                icon={faBookReader}
                                link={"https://drive.google.com/file/d/1herW34ZgWn-GYHMzFsB22aW5GSqsiXJK/view?usp=sharing"}
                                type={"Lectura"}
                                number={"2"}
                            />
                        </Col>
                        <Col md={6} className="v-center-content">
                            Teoría de la partida doble
                        </Col>
                    </Row>
                    <Row className="justify-content-center m-v-space">
                        <Col md={3}>
                            <Actividad 
                                icon={faBookReader}
                                link={"https://drive.google.com/file/d/13IWbOfB2-_i7mWFvnfGCnRWbH6F7v5rb/view?usp=sharing"}
                                type={"Lectura"}
                                number={"3"}
                            />
                        </Col>
                        <Col md={6} className="v-center-content">
                            El impuesto al valor agregado (IVA) y su registro contable
                        </Col>
                    </Row>
                    <p>En el siguiente video se explica la teoría de la partida doble.</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={8}>
                            <video className="full-img" src={video2} controls />
                            <div className="img-source center-text">Fuente: https://www.youtube.com/watch?v=nilGlPwTx30&t=247s</div>
                        </Col>
                    </Row>
                    <p>Ya cuentas con los elementos necesarios para realizar las siguientes actividades de aprendizaje:</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={3}>
                            <Actividad 
                                icon={faPuzzlePiece}
                                link={"https://drive.google.com/file/d/1QXpcLi7mqs_ULBiIDytF4Q9nA4tncLIs/view?usp=sharing"}
                                type={"Actividad"}
                                number={"2.5"}
                            />
                        </Col>
                        <Col md={3}>
                            <Actividad 
                                icon={faPuzzlePiece}
                                link={"https://drive.google.com/file/d/1s_h9d2v8CTVUCJnFV6TNgr-NbMbsIKSS/view?usp=sharing"}
                                type={"Actividad"}
                                number={"2.6"}
                            />
                        </Col>
                    </Row>
                </div>
            </section>
            <section id="2.3.2">
                <h3>2.3.2 Estado de resultados</h3>
                <div className="justify-text">
                    <p>Por lo regular, las empresas tienen dos objetivos:</p>
                    <ol class="upper-letter">
                        <li><p className="bold">Un objetivo social,</p> en virtud de que brindan a la sociedad bienes y servicios para la satisfacción de necesidades humanas, siendo a la vez una fuente de empleo.</li>
                        <li><p className="bold">Un objetivo económico,</p> en razón de que persiguen obtener utilidades.</li>
                    </ol>
                    <p>El estado financiero que muestra si se cumplió o no el objetivo económico es el <p className="bold">Estado de resultados.</p> Éste nos da el dato de ¿cuánto ganamos o cuánto perdimos? en un período determinado (Figuras 2.15 y 2.16).</p>
                    <Row className="justify-content-center m-v-space">
                        <Col md={6}>
                            <div className="center-text">Figura 2.15 Ingresos mayores que los egresos</div>
                            <Image 
                                className="full-img"
                                src={img215}
                                alt="Ingresos mayores que los egresos" 
                            />
                            <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                        </Col>
                        <Col md={6}>
                            <div className="center-text">Figura 2.16 Egresos mayores que los ingresos</div>
                            <Image 
                                className="full-img"
                                src={img216}
                                alt="Egresos mayores que los ingresos" 
                            />
                            <div className="img-source center-text">Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).</div>
                        </Col>
                    </Row>
                    <p>García y Mendoza (2013) definen al estado de resultados como “el estado financiero que muestra cómo se ha obtenido la utilidad o la pérdida del ejercicio de una entidad, durante un período determinado. Enfatizando que es un estado financiero que muestra los ingresos, costos y gastos, así como la utilidad o pérdida resultante en el periodo” (p. 63)</p>
                </div>
            </section>
        </div>
        
    );
}

export default Unit1;
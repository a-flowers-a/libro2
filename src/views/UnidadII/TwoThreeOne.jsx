import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Image, Container } from "react-bootstrap";
import {
  faBookReader,
  faFolderPlus,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import Actividad from "../../components/Actividad";
import SideMenu from "../../components/SideMenu/SideMenu";
import { UnidadII } from "../../linksToAssets/Actividades/UnidadII";
import { lecUnidadII } from "../../linksToAssets/Lecturas/UnidadII";
import { orgUnidadII } from "../../linksToAssets/Organizadores/UnidadII";

function TwoThreeOne() {
  const img26 = "../../assets/images/26.png";
  const img27 = "../../assets/images/27.png";
  const img28 = "../../assets/images/28.png";
  const img29 = "../../assets/images/29.png";
  const img210 = "../../assets/images/210.png";
  const img211 = "../../assets/images/211.png";
  const img212 = "../../assets/images/212.png";
  const img213 = "../../assets/images/213.png";
  const img214 = "../../assets/images/214.png";
  const video2 = "../../assets/videos/ley_de_la_partida_doble.mp4";

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container>
          <section id="2.3.1">
            <h3>
              2.3.1 Estado de situación financiera (también llamado estado de
              posición financiera o balance general)
            </h3>
            <div className="justify-text">
              <p>
                Al estado de situación financiera también se le conoce como
                estado de posición financiera o balance general; es un documento
                financiero que muestra en términos monetarios el valor de los
                activos (bienes y derechos); de los pasivos (deudas y
                obligaciones), así como del capital contable (valor del
                patrimonio) de la entidad. Cabe resaltar que este documento
                financiero refleja la situación financiera de una entidad
                económica a una fecha determinada.
              </p>
              <p>
                En la figura 2.6 encontrarás algunas definiciones del estado de
                situación financiera.
              </p>
            </div>
            <Row className="justify-content-center m-v-space">
              <Col md={5}>
                <div className="center-text">
                  Figura 2.6 Definiciones del estado de situación financiera
                </div>
                <Image
                  className="full-img"
                  src={img26}
                  alt="Edo. de Situación Fin."
                />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020). Figura
                  basada en la bibliografía consultada.
                </div>
              </Col>
            </Row>
            <div className="justify-text">
              <p>
                En otras palabras y como analogía, el estado de situación
                financiera es como una fotografía que tomamos en un momento en
                el tiempo, que nos da información de cómo se encuentra la
                empresa justo en ese momento en términos de qué recursos tiene
                para trabajar y a quién se los debe (figura 2.7), razón por la
                que el balance general siempre es a una fecha determinada.
              </p>
            </div>
            <Row className="justify-content-center m-v-space">
              <Col md={5}>
                <div className="center-text">
                  Figura 2.7 Información que proporciona el estado de situación
                  financiera
                </div>
                <Image
                  className="full-img"
                  src={img27}
                  alt="Edo. de Situación Fin."
                />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                </div>
              </Col>
            </Row>
          </section>
          <section id="2.3.1.1">
            <h4>2.3.1.1 Estructura del estado de situación financiera</h4>
            <div className="justify-text">
              La estructura del estado de situación financiera se conforma de
              las siguientes partes:
              <ol>
                <li>
                  <p className="bold">Encabezado.</p> Se conforma por: nombre
                  del negocio o sociedad; enseguida, de manera explícita, se
                  hace mención que se trata del estado de situación financiera o
                  estado de posición financiera; se especifica el tipo de moneda
                  y, finalmente la fecha (siempre es a una fecha determinada y
                  no a un período).
                </li>
                <li>
                  <p className="bold">Cuerpo.</p> Se estructura con tres grandes
                  grupos de cuentas: Activos, Pasivos y Capital contable.
                </li>
                <li>
                  <p className="bold">Firmas.</p> Esta parte por lo regular
                  aparece al final del documento financiero, en la que se
                  visualiza los nombres y firmas del propietario o funcionario
                  quien autoriza, así como de quienes lo elaboran y lo revisan.
                </li>
              </ol>
            </div>
            En la Figura 2.8 se muestran las partes antes mencionadas
            <Row className="justify-content-center m-v-space">
              <Col md={5}>
                <div className="center-text">
                  Figura 2.8 Estructura del estado de situación financiera
                </div>
                <Image
                  className="full-img"
                  src={img28}
                  alt="Edo. de Situación Fin."
                />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                </div>
              </Col>
            </Row>
            <div className="justify-text">
              <p className="bold paragraph">
                Cuentas del estado de situación financiera
              </p>
              <p>
                Tal y como se ha mencionado las cuentas que conforman al estado
                de situación financiera son: Activo, Pasivo y Capital Contable,
                mismas que a continuación se detallan:
              </p>
              <p>
                <p className="bold">Activo.</p> En términos sencillos los
                activos representan tanto los bienes de la entidad así como los
                derechos que ha adquirido. En este entendido los bienes son todo
                aquello que la empresa adquiere (de contado o a crédito) para su
                adecuada operación; en tanto que los derechos surgen de los
                acuerdos que contrae la empresa con terceros, por ejemplo en la
                contratación de un seguro o una fianza la empresa tiene el
                derecho de hacer valer la póliza contratada en caso de un
                siniestro. De acuerdo con las NIF A-5 un activo es “un recurso
                controlado por una entidad, identificado, cuantificado en
                términos monetarios, del que se espera fundamentalmente
                beneficios económicos futuros, derivado de operaciones ocurridas
                en el pasado, que han afectado económicamente a dicha entidad”.
              </p>
              <p>
                Las cuentas de Activo de acuerdo con las NIF (2020) se
                clasifican en:
              </p>
              <ol className="upper-letter">
                <li>
                  <p className="bold">Activo a corto plazo o circulante.</p> Es
                  aquél que se espera realizar, consumir o vender durante el
                  ciclo normal de operaciones de la entidad (NIF B-11); de
                  manera general se considera el corto plazo hasta doce meses.
                  En la figura 2.9 se muestran algunos ejemplos de activos
                  circulantes.
                </li>
                <Row className="justify-content-center m-v-space">
                  <Col md={6}>
                    <div className="center-text">
                      Figura 2.9 Ejemplos de Activo circulante
                    </div>
                    <Image
                      className="full-img"
                      src={img29}
                      alt="Activo circulante"
                    />
                    <div className="img-source center-text">
                      Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                    </div>
                  </Col>
                </Row>
                <li>
                  <p className="bold">Activo a largo plazo o no circulante.</p>{" "}
                  Incluye activos tangibles, intangibles y financieros, que por
                  su naturaleza, son recuperables a largo plazo; es decir, no
                  son recuperables en el ciclo normal de operaciones (NIF-B6).
                  Dentro de este grupo se encuentran las propiedades, planta y
                  equipo los cuales tienen como principal característica que son
                  tangibles y depreciables. En la figura 2.10 podrás visualizar
                  algunos ejemplos de activos no circulantes.
                </li>
                <Row className="justify-content-center m-v-space">
                  <Col md={6}>
                    <div className="center-text">
                      Figura 2.10 Ejemplos de activo no circulante
                    </div>
                    <Image
                      className="full-img"
                      src={img210}
                      alt="Activo No circulante"
                    />
                    <div className="img-source center-text">
                      Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                    </div>
                  </Col>
                </Row>
              </ol>
              <p>
                <p className="bold">Pasivo.</p> comprende las deudas y
                obligaciones que tiene la empresa. Una deuda es un compromiso de
                pago; en tanto que la obligación es una responsabilidad o
                compromiso que adquiere la empresa en la que se obliga a cumplir
                los términos acordados en un contrato. Las (NIF A-5) definen al
                pasivo como “es una obligación presente de una entidad,
                identificada, cuantificada en términos monetarios que representa
                una probable disminución de recursos económicos y derivados de
                operaciones ocurridas en el pasado, que han afectado
                económicamente a dicha entidad”. Las (NIF A-5) definen al pasivo
                como “es una obligación presente de una entidad, identificada,
                cuantificada en términos monetarios que representa una probable
                disminución de recursos económicos y derivados de operaciones
                ocurridas en el pasado, que han afectado económicamente a dicha
                entidad”.
              </p>
              <p>
                Las cuentas de Pasivo de acuerdo con las NIF se clasifican en:
              </p>
              <ol className="upper-letter">
                <li>
                  <p className="bold">Pasivo a corto plazo o circulante.</p> Se
                  refiere a las deudas y obligaciones de la entidad cuyo
                  vencimiento es a corto plazo; es decir, con vencimiento no
                  mayor de un año.
                </li>
                <li>
                  <p className="bold">Pasivo a largo plazo o no circulante.</p>{" "}
                  Siendo su principal característica que el vencimiento de la
                  deuda o de la obligación es mayor a un año.
                </li>
              </ol>
              <p>
                En la Figura 2.11 se muestran dos cuentas que pertenecen al
                pasivo.
              </p>
              <Row className="justify-content-center m-v-space">
                <Col md={6}>
                  <div className="center-text">
                    Figura 2.11 Ejemplos de pasivo
                  </div>
                  <Image className="full-img" src={img211} alt="Pasivo" />
                  <div className="img-source center-text">
                    Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                  </div>
                </Col>
              </Row>
              <p>
                <p className="bold">Capital contable.</p> Se refiere al
                patrimonio de la empresa, mismo que se conforma por el capital
                contribuido y por el capital ganado. El capital contribuido es
                la porción del capital contable que lo integran las aportaciones
                de los propietarios; incluye las aportaciones para futuros
                aumentos de capital; las primas de emisión de acciones y otros
                instrumentos financieros que por sustancia económica califican
                como capital (NIF, 2020).
              </p>
              <p>
                El capital ganado se integra principalmente por las utilidades o
                ganancias y la reserva legal.
              </p>
              En la Figura 2.12 se muestran dos cuentas que son parte del
              capital contable.
              <Row className="justify-content-center m-v-space">
                <Col md={6}>
                  <div className="center-text">
                    Figura 2.12 Ejemplos de cuentas de capital contable
                  </div>
                  <Image
                    className="full-img"
                    src={img212}
                    alt="Capital contable"
                  />
                  <div className="img-source center-text">
                    Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                  </div>
                </Col>
              </Row>
              <p>
                En la siguiente lectura se abordan a detalle las principales
                cuentas que conforman al estado de situación financiera.
              </p>
              <Row className="justify-content-center m-v-space">
                <Col md={3}>
                  <Actividad
                    icon={faBookReader}
                    link={lecUnidadII[0]}
                    type={"Lectura"}
                    number={"1"}
                  />
                </Col>
                <Col md={6} className="v-center-content text-descrip">
                  Principales cuentas del estado de situación financiera, estado
                  de posición financiera o balance general
                </Col>
              </Row>
              <p>
                A continuación, encontrarás un organizador gráfico, como
                material de apoyo, que contiene la clasificación de las
                principales cuentas del estado de situación financiera.
              </p>
              <Row className="justify-content-center m-v-space">
                <Col md={3}>
                  <Actividad
                    icon={faFolderPlus}
                    link={orgUnidadII[0]}
                    type={"Material de apoyo"}
                    number={"1"}
                  />
                </Col>
                <Col md={6} className="v-center-content text-descrip">
                  Organizador gráfico. Cuentas del estado de situación
                  financiera
                </Col>
              </Row>
              <p>
                Ya cuentas con los elementos suficientes para realizar las
                siguientes actividades de aprendizaje:
              </p>
              <Row className="justify-content-center m-v-space">
                <Col md={3}>
                  <Actividad
                    icon={faPuzzlePiece}
                    link={UnidadII[1]}
                    type={"Actividad"}
                    number={"2.2"}
                  />
                </Col>
                <Col md={6} className="v-center-content text-descrip">
                  Principales cuentas del estado de situación financiera
                </Col>
              </Row>
              <Row className="justify-content-center m-v-space">
                <Col md={3}>
                  <Actividad
                    icon={faPuzzlePiece}
                    link={UnidadII[2]}
                    type={"Actividad"}
                    number={"2.3"}
                  />
                </Col>
                <Col md={6} className="v-center-content text-descrip">
                  Clasificación de las cuentas del estado de situación
                  financiera
                </Col>
              </Row>
            </div>
          </section>
          <section id="2.3.1.2">
            <h4>
              2.3.1.2 Formas de presentar el estado de situación financiera
            </h4>
            <div className="justify-text">
              <p>
                En México y de acuerdo con las NIF B-6 las formas más utilizadas
                para presentar el estado de situación financiera son: en forma
                de cuenta y en forma de reporte.
              </p>
              <ol className="upper-letter">
                <li>
                  <p className="bold">
                    Estado de situación financiera en forma de Cuenta.
                  </p>{" "}
                  Tiene un formato horizontal, anotando en la parte izquierda el
                  Activo y en la parte derecha el Pasivo y el Capital Contable.
                  Se basa en la fórmula <p className="bold">A = P + CC</p> tal
                  como se muestra en la figura 2.13
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
                  </p>{" "}
                  Consiste en presentar en forma vertical, las cuentas del
                  Activo, Pasivo y Capital contable, tal como se aprecia en la
                  figura 2.14
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
                Como ya se ha mencionado el estado de situación financiera
                muestra el resumen en términos monetarios de las operaciones de
                una entidad a una fecha determinada. Todos los estados
                financieros se basan en la información contable de la entidad,
                sin dicha información no se podría generar un estado financiero.
              </p>
              <p>
                Es importante mencionar que la contabilidad “es una técnica que
                se utiliza para el registro de las operaciones que afectan
                económicamente a una entidad y que produce sistemática y
                estructuralmente información financiera” (NIF A-1).
              </p>
              <p>
                Por lo expuesto anteriormente, a continuación veremos cómo se
                lleva acabo el registro contable de las operaciones de una
                empresa.
              </p>
              <p>
                Para ello es importante que realices las siguientes lecturas:
              </p>
              <Row className="justify-content-center m-v-space">
                <Col md={3}>
                  <Actividad
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
          </section>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //TwoThreeOne

export default TwoThreeOne;

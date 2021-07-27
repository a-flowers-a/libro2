import React from "react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import { Row, Col, Image, Container, Table } from "react-bootstrap";
import Actividad from "../../components/Actividad";
import { faBookReader, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";

function TwoThreeTwo() {
  const img215 = "../../assets/images/215.png";
  const img216 = "../../assets/images/216.png";
  const img217 = "../../assets/images/217.png";
  const img218 = "../../assets/images/218.png";

  return (
    <div className="primary-div">
      <PoliHeader />
      <Container fluid>
        <section id="2.3.2">
          <h3>2.3.2 Estado de resultados</h3>
          <div className="justify-text">
            <p>Por lo regular, las empresas tienen dos objetivos:</p>
            <ol class="upper-letter">
              <li>
                <p className="bold">Un objetivo social,</p> en virtud de que
                brindan a la sociedad bienes y servicios para la satisfacción de
                necesidades humanas, siendo a la vez una fuente de empleo.
              </li>
              <li>
                <p className="bold">Un objetivo económico,</p> en razón de que
                persiguen obtener utilidades.
              </li>
            </ol>
            <p>
              El estado financiero que muestra si se cumplió o no el objetivo
              económico es el <p className="bold">Estado de resultados.</p> Éste
              nos da el dato de ¿cuánto ganamos o cuánto perdimos? en un período
              determinado (Figuras 2.15 y 2.16).
            </p>
            <Row className="justify-content-center m-v-space">
              <Col md={4}>
                <div className="center-text">
                  Figura 2.15 Ingresos mayores que los egresos
                </div>
                <Image
                  className="full-img"
                  src={img215}
                  alt="Ingresos mayores que los egresos"
                />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                </div>
              </Col>
              <Col md={4}>
                <div className="center-text">
                  Figura 2.16 Egresos mayores que los ingresos
                </div>
                <Image
                  className="full-img"
                  src={img216}
                  alt="Egresos mayores que los ingresos"
                />
                <div className="img-source center-text">
                  Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
                </div>
              </Col>
            </Row>
            <p>
              García y Mendoza (2013) definen al estado de resultados como “el
              estado financiero que muestra cómo se ha obtenido la utilidad o la
              pérdida del ejercicio de una entidad, durante un período
              determinado. Enfatizando que es un estado financiero que muestra
              los ingresos, costos y gastos, así como la utilidad o pérdida
              resultante en el periodo” (p. 63)
            </p>
          </div>
        </section>
        <section id="2.3.2.1">
          <h4>2.3.2.1 Estructura del estado de resultados</h4>
          <p>
            Al igual que el estado de situación financiera el Estado de
            resultados debe cumplir con una estructura conformada por las
            siguientes partes:
          </p>
          <ol>
            <li>
              <p className="bold">Encabezado.</p> se conforma por los siguientes
              datos: nombre de la empresa, mención de ser estado de resultados y
              el período al que hace referencia.
            </li>
            <li>
              <p className="bold">Cuerpo.</p> se conforma por las cuentas de
              ingresos y egresos hasta obtener la utilidad neta, como puede
              observarse en la figura 2.17.
            </li>
            <li>
              <p className="bold">Firmas.</p> es la última parte del estado de
              resultados donde se plasma las firmas de quienes lo elaboran y lo
              autorizan.
            </li>
          </ol>
          <Row className="justify-content-center m-v-space">
            <Col md={5}>
              <div className="center-text">
                Figura 2.17 Estado de resultados
              </div>
              <Image
                className="full-img"
                src={img217}
                alt="Figura 2.17 Estado de resultados"
              />
              <div className="img-source center-text">
                Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col md={3}>
              <Actividad
                icon={faPuzzlePiece}
                link={
                  "https://drive.google.com/file/d/11_F4xMMCAn3yJGMeW4EuRZpscdjq8W6k/view?usp=sharing"
                }
                type={"Actividad"}
                number={"2.7"}
              />
            </Col>
            <Col md={6} className="v-center-content text-descrip">
              Estructura del estado de resultados
            </Col>
          </Row>
        </section>
        <section id="2.3.2.2">
          <h4>2.3.2.2 Cuentas del estado de resultados</h4>
          <p>
            Las cuentas del estado de resultados se clasifican en dos grupos:{" "}
            <p className="inline bold green">CUENTAS DE INGRESOS</p> y{" "}
            <p className="inline bold red">CUENTAS DE EGRESOS</p> (Figura 2.18).
            Si la suma de los ingresos es mayor que la suma de los egresos se
            tendrá una utilidad y por el contrario si la suma de los egresos es
            mayor que la suma de los ingresos entonces se tendrá una pérdida.
          </p>

          <Row className="justify-content-center m-v-space">
            <Col md={4}>
              <div className="center-text">
                Figura 2.18 Principales ingresos y egresos
              </div>
              <Image
                className="full-img"
                src={img218}
                alt="Figura 2.18 Principales ingresos y egresos"
              />
              <div className="img-source center-text">
                Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
              </div>
            </Col>
          </Row>
          <p>
            A continuación se definen los rubros que conforman al estado de
            resultados:
          </p>
          <Table striped bordered size="sm">
            <tbody>
              <tr>
                <td>
                  <div className="bold">Ventas o ingresos netos</div>
                </td>
                <td>
                  <div className="bold">Ventas o ingresos netos.</div> Ingresos
                  derivados de la venta de mercancía y de la prestación de
                  servicios. El rubro VENTAS incluye las ventas realizadas a
                  crédito, así como las de contado.
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">Costo de ventas</div>
                </td>
                <td>
                  <div className="bold">Costo de ventas.</div> Es lo que a la
                  empresa le costó adquirir o producir la mercancía o servicios
                  que vendió.
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">Utilidad o pérdida bruta</div>
                </td>
                <td>
                  Diferencia que resulta de restar el costo de ventas a las
                  ventas; si dicha diferencia es positiva se tiene utilidad
                  bruta, de lo contrario se tiene una pérdida bruta.
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">
                    <p>Gastos generales</p>
                    <p className="center-text no-marg-bottom">Incluye:</p>
                    <ul>
                      <li>Gastos de venta</li>
                      <li>Gastos de administración</li>
                      <li>Otros ingresos</li>
                      <li>Otros gastos</li>
                    </ul>
                  </div>
                </td>
                <td>
                  <p>
                    <div className="bold">Gastos de venta.</div> Gastos que se
                    originan por la comercialización de bienes y servicios.
                  </p>
                  <p>
                    <div className="bold">Gastos de administración.</div> Gastos
                    que se originan por llevar a cabo las funciones de dirección
                    y de administración.
                  </p>
                  <p>
                    <div className="bold">Otros ingresos.</div> Este rubro se
                    refiere a los ingresos que no se derivan de las actividades
                    normales (correspondientes al giro) ni recurrentes de la
                    entidad, por ejemplo: utilidad en venta de activos, rentas
                    recibidas, comisiones ganadas por operaciones no
                    financieras, donativos y cualquier otro ingreso que no tenga
                    una identificación específica (García y Mendoza, 2013; Lara
                    2017).
                  </p>
                  <p>
                    <div className="bold">Otros gastos.</div> Gastos que no se
                    relacionan con el giro de la entidad, por ejemplo, los
                    costos de una huelga o las reparaciones por daños de un
                    fenómeno natural. (García y Mendoza, 2013; Lara 2017).
                    También “se consideran otros gastos los donativos,
                    obsequios, pérdida en venta de active fijo y cualquier gasto
                    que no tenga una identificación específica” (Escarpulli,
                    2012, p.56).
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">Utilidad de operación (EBIT)</div>
                </td>
                <td>
                  Diferencia de restar los gastos generales a la utilidad o
                  pérdida bruta. Por sus siglas en inglés se denomina EBIT:
                  Earnings Before Interest and Taxes (ganancias antes de
                  intereses e impuestos).
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">
                    <p>
                      Resultado integral de financiamiento (RIF), se conforma
                      por ingresos y gastos relacionados con actividades de tipo
                      financiero
                    </p>
                    <p className="center-text no-marg-bottom">Incluye:</p>
                    <ul>
                      <li>Intereses devengados</li>
                      <li>Fluctuación cambiaria</li>
                      <li>
                        Cambios en el valor razonable de activos y pasivos
                        financieros
                      </li>
                      <li>Resultado por posición monetaria (REPOMO)</li>
                    </ul>
                  </div>
                </td>
                <td>
                  <p>
                    <div className="bold">
                      Gastos por intereses, también conocidos como intereses a
                      cargo o gastos financieros.
                    </div>{" "}
                    Intereses pagados por el manejo del dinero de la entidad
                    (comisiones bancarias) o de las cuentas por pagar (intereses
                    derivados de un préstamo).
                  </p>
                  <p>
                    <div className="bold">
                      Ingresos por intereses o intereses a favor.
                    </div>{" "}
                    Intereses derivados de las cuentas por cobrar o de las
                    inversiones temporales.
                  </p>
                  <p>
                    <div className="bold">
                      Ganancia cambiaria. Ganancia generada por las
                      fluctuaciones en el tipo de cambio.
                    </div>{" "}
                    Por ejemplo, cuando se tienen cuentas bancarias, cuentas por
                    cobrar y/o por pagar en moneda extranjera.
                  </p>
                  <p>
                    <div className="bold">
                      Pérdida cambiaria. Pérdida generada por las fluctuaciones
                      en el tipo de cambio.
                    </div>{" "}
                    Por ejemplo, cuando se tienen cuentas bancarias, cuentas por
                    cobrar y/o por pagar en moneda extranjera.
                  </p>
                  <p>
                    <div className="bold">
                      Cambios en el valor razonable de activos y pasivos
                      financieros.
                    </div>{" "}
                    Se genera como resultado de la modificación en el valor de
                    los instrumentos financieros de capital, por ejemplo, bonos
                    o acciones, por las condiciones específicas del mercado, la
                    cual genera un resultado que puede ser positivo o negativo
                    para las empresas que tienen invertidos sus excedentes en
                    este tipo de instrumentos.
                  </p>
                  <p>
                    <div className="bold">
                      Resultado por posición monetaria (REPOMO).
                    </div>{" "}
                    Utilidad o pérdida que se obtiene al revaluar los activos y
                    pasivos monetarios por los efectos de la inflación.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">
                    Utilidad o pérdida antes de impuestos a la utilidad
                  </div>
                </td>
                <td>
                  Representa el importe que resulta de restar a los ingresos los
                  costos y gastos incluidos en el estado de resultados, sin
                  considerer aún los impuestos a la utilidad, las operaciones
                  discontinuadas y los otros resultados integrales.
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">Impuestos a la utilidad</div>
                </td>
                <td>
                  Impuestos a la utilidad del periodo, sin incluir el impuesto
                  atribuible a operaciones discontinuadas y otros resultados
                  integrals (NIF B-3).
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">
                    Utilidad o pérdida de operaciones continuas (operaciones de
                    la empresa)
                  </div>
                </td>
                <td>
                  Es la suma algebraica de la utilidad o pérdida antes de
                  impuestos a la utilidad y el rubro de impuestos a la utilidad.
                  En caso de no existir operaciones discontinuadas, este nivel
                  debe considerarse como la utilidad o pérdida neta (NIF B-3).
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">Operaciones discontinuadas</div>
                </td>
                <td>
                  En este rubro deben presentarse los ingresos, costos y gastos
                  derivados de las operaciones discontinuadas. Debe entenderse
                  como operación discontinuada el proceso de interrupción
                  definitiva de una actividad de negocios significativa de la
                  entidad (NIF B-3).
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bold">Utilidad o pérdida neta</div>
                </td>
                <td>
                  Es la suma algebraica de la utilidad o pérdida de operaciones
                  continuas y, en su caso, el rubro de operaciones
                  discontinuadas (NIF B-3).
                </td>
              </tr>
            </tbody>
          </Table>
          <Row className="justify-content-center m-v-space">
            <Col md={4}>
              <div className="img-source">
                Hernández, J., Rodríguez, E. & Jiménez, Y. (2020).
              </div>
            </Col>
          </Row>
          <p>
            Como puede apreciarse los primeros rubros que conforman al estado de
            resultados son las ventas o ingresos y el costo de ventas, ambos
            estás estrechamente relacionados con los inventarios. En este
            sentido, el registro y control de inventarios (mercancías) cobra de
            gran relevancia.
          </p>
          <p>
            En la siguiente lectura se abordan los procedimientos para el
            registro y control de inventarios, cabe destacar, que los
            inventarios perpetuos o continuos son los que utilizarás en este
            curso.
          </p>
          <Row className="justify-content-center m-v-space">
            <Col md={3}>
              <Actividad
                icon={faBookReader}
                link={""}
                type={"Lectura"}
                number={""}
              />
            </Col>
            <Col md={6} className="v-center-content text-descrip">
              Procedimientos para el control de inventarios.
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col md={3}>
              <Actividad
                icon={faBookReader}
                link={""}
                type={"Actividad"}
                number={"2.8"}
              />
            </Col>
            <Col md={6} className="v-center-content text-descrip">
              Estado de resultados y estado de situación financiera
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col md={3}>
              <Actividad
                icon={faBookReader}
                link={""}
                type={"Actividad"}
                number={"2.9"}
              />
            </Col>
            <Col md={6} className="v-center-content text-descrip">
              Estado de resultados y estado de situación financiera (incluye
              depreciación)
            </Col>
          </Row>
          <p>
            Otro aspecto importante que se considera tanto en el estado de
            resultados como en el estado se situación financiera es la
            depreciación.
          </p>
          <p>
            Conoce más sobre este útil e interesante tema en la siguiente
            lectura
          </p>
          <Row className="justify-content-center m-v-space">
            <Col md={3}>
              <Actividad
                icon={faBookReader}
                link={""}
                type={"Lectura"}
                number={""}
              />
            </Col>
            <Col md={6} className="v-center-content text-descrip">
              Depreciación y amortización
            </Col>
          </Row>
          <p>
            Con el tema antes explicado, has concluido esta unidad temática. Te
            invitamos a contestar los reactivos de la siguiente evaluación.
          </p>
          <Row className="justify-content-center m-v-space">
            <Col md={3}>
              <Actividad
                icon={faBookReader}
                link={""}
                type={"Evaluación"}
                number={""}
              />
            </Col>
          </Row>
        </section>
      </Container>
      <PoliFooter />
    </div>
  );
} //TwoThreeTwo

export default TwoThreeTwo;

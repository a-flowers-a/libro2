import { useEffect } from "react";
import { Row, Col, Image, Container, Table } from "react-bootstrap";
import { faBookReader, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import Actividad from "../../components/Actividad";
import SideMenu from "../../components/SideMenu/SideMenu";
import { UnidadII } from "../../linksToAssets/Actividades/UnidadII";
import { lecUnidadII } from "../../linksToAssets/Lecturas/UnidadII";
import { scrollTop } from "../../helpers/general";

const TwoThreeTwoTwo = () => {
  const img218 = "../../assets/images/218.png";

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md ">
          <Col>
            <Row>
              <h4>2.3.2.2 Cuentas del estado de resultados</h4>
            </Row>
          </Col>
          <Col>
            <Row className="justify-text">
              <p>
                Las cuentas del estado de resultados se clasifican en dos
                grupos: <p className="inline bold green">CUENTAS DE INGRESOS</p>
                y <p className="inline bold red">CUENTAS DE EGRESOS</p> (Figura
                2.18). Si la suma de los ingresos es mayor que la suma de los
                egresos se tendrá una utilidad y por el contrario si la suma de
                los egresos es mayor que la suma de los ingresos entonces se
                tendrá una pérdida.
              </p>
            </Row>
          </Col>

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
          <Table striped bordered responsive size="sm">
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
                    </div>
                    Intereses pagados por el manejo del dinero de la entidad
                    (comisiones bancarias) o de las cuentas por pagar (intereses
                    derivados de un préstamo).
                  </p>
                  <p>
                    <div className="bold">
                      Ingresos por intereses o intereses a favor.
                    </div>
                    Intereses derivados de las cuentas por cobrar o de las
                    inversiones temporales.
                  </p>
                  <p>
                    <div className="bold">
                      Ganancia cambiaria. Ganancia generada por las
                      fluctuaciones en el tipo de cambio.
                    </div>
                    Por ejemplo, cuando se tienen cuentas bancarias, cuentas por
                    cobrar y/o por pagar en moneda extranjera.
                  </p>
                  <p>
                    <div className="bold">
                      Pérdida cambiaria. Pérdida generada por las fluctuaciones
                      en el tipo de cambio.
                    </div>
                    Por ejemplo, cuando se tienen cuentas bancarias, cuentas por
                    cobrar y/o por pagar en moneda extranjera.
                  </p>
                  <p>
                    <div className="bold">
                      Cambios en el valor razonable de activos y pasivos
                      financieros.
                    </div>
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
                    </div>
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
                color="blue"
                icon={faBookReader}
                link={lecUnidadII[3]}
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
                color="blue"
                icon={faPuzzlePiece}
                link={UnidadII[10]}
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
                color="blue"
                icon={faPuzzlePiece}
                link={UnidadII[11]}
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
                color="blue"
                icon={faBookReader}
                link={lecUnidadII[4]}
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
                color="blue"
                icon={faBookReader}
                link={""}
                type={"Evaluación"}
                number={""}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default TwoThreeTwoTwo;

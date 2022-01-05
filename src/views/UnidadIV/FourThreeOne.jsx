import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourThreeOne = () => {
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
              <Row>
                <Col>
                  <h2>4.3.1 El presupuesto maestro</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    El presupuesto maestro es un plan que integra los
                    presupuestos financieros y operativos de una organización;
                    muestra los recursos que requiere cada una de las áreas
                    operativas para llevar a cabo sus actividades durante un
                    periodo determinado.
                  </p>
                  <p>
                    La elaboración de los presupuestos financieros y operativos
                    corresponde a los gerentes funcionales, aunque en algunas
                    organizaciones existe un departamento o comité, dependiente
                    del área de finanzas, que se encarga de realizar los
                    presupuestos.
                  </p>
                  <p>
                    Por lo general el ciclo de elaboración de un presupuesto
                    maestro inicia cuando la alta dirección, a través del
                    departamento o comité de presupuestos, proporciona a los
                    gerentes funcionales los pronósticos de venta y de
                    utilidades que se espera durante del periodo y termina con
                    la preparación de los estados financieros presupuestados
                    (González, 2003).
                  </p>
                  <p>La secuencia para integrar el presupuesto maestro es:</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ol>
                    <li>Presupuesto de ingresos o de ventas</li>
                    <li>Presupuesto de producción</li>
                    <li>
                      Presupuesto de requerimientos y compras de materia prima
                    </li>
                    <li>Presupuesto de mano de obra</li>
                    <li>Presupuesto de gastos indirectos de fabricación</li>
                    <li>Presupuesto de gastos de operación</li>
                    <li>Presupuesto de inventarios iniciales y finales</li>
                    <li>Presupuestos de costos de venta</li>
                    <li>
                      Presupuestos financieros, de efectivo, de capital y de
                      requerimientos{" "}
                    </li>
                    <li>financieros</li>
                    <li>Estados financieros presupuestados o proforma</li>
                  </ol>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Utilizando la información anterior, elabore detallando para
                    cada uno de los meses:
                  </p>
                  <ol>
                    <li>
                      <b>Presupuestos de operación</b>
                      <ol>
                        <li>Presupuesto de ventas </li>
                        <li>
                          Presupuesto de cobros de efectivo a los clientes
                        </li>
                        <li>Presupuesto de compras</li>
                        <li>
                          Presupuesto de salida de efectivo por concepto de
                          compras
                        </li>
                        <li>Presupuesto de gastos generales (de operación)</li>
                        <li>
                          Presupuesto de salida de efectivo por concepto de
                          gastos generales (de operación)
                        </li>
                      </ol>
                    </li>
                    <li>
                      <b>Presupuestos financieros</b>
                      <ol>
                        <li>
                          Presupuesto de efectivo (presupuesto de flujo de
                          efectivo)
                        </li>
                        <li>
                          Estado de Resultados del 1 de dic al 31 de marzo de
                          2020
                        </li>
                        <li>
                          Estado de situación financiera proforma al 31 de marzo
                          de 2020
                        </li>
                      </ol>
                    </li>
                  </ol>
                  <p>
                    El estado de resultados presupuestado se basa en los
                    presupuestos de operación y junto con los presupuestos
                    financieros proporcionan información para la elaboración del
                    estado de flujo de efectivo proforma y del estado de
                    situación proforma.
                  </p>
                  <p>
                    Los presupuestos de operación dan origen al estado de
                    resultados presupuestado, que junto con los presupuestos
                    financieros proporcionan la información necesaria para la
                    elaboración del balance general y del estado de flujo de
                    efectivo proforma.
                  </p>
                  <p>
                    Por último la implementación y control del presupuesto
                    maestro implican evaluar continuamente el desempeño real
                    contra el presupuestado para detectar desviaciones y
                    realizar los ajustes necesarios dirigidos al logro de los
                    objetivos estratégicos de la organización.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FourThreeOne;

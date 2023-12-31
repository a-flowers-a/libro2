import { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import { MathComponent } from "mathjax-react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

const FiveThreeSix = () => {
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
              <h2>5.3.6 Relación beneficio - costo (B/C)</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                De acuerdo con Aching (2005) el método beneficio costo es un
                método complementario. Utilizado generalmente para evaluar
                inversiones del gobierno central, gobiernos locales y
                regionales, además de su uso en el campo de los negocios para
                determinar la viabilidad de los proyectos con base en la razón
                de los beneficios a los costos asociados al proyecto. Asimismo,
                en las entidades crediticias internacionales es casi una
                exigencia que los proyectos con financiación del exterior sean
                evaluados con este método.
              </p>
              <p>
                En el análisis beneficio-costo debemos tener en cuenta tanto las
                ventajas como las desventajas de aceptar o no proyectos de
                inversión.
              </p>
              <p>
                Baca (2006) enfatiza que tanto los beneficios como los costos no
                se cuantifican como se hace en un proyecto de inversión privada,
                sino que se toman en cuenta criterios sociales. Se aplican para
                evaluar inversiones en escuelas públicas, carreteras, alumbrado
                público, drenaje y otras obras.
              </p>
              <p>
                Aching (2005) explica que este método toma en cuenta el valor
                del dinero a través del tiempo, en donde los ingresos y los
                egresos deben ser calculados utilizando el VAN, de acuerdo al
                flujo de caja; o en su defecto, una tasa un poco más baja,
                llamada «TASA SOCIAL»; tasa utilizada por los gobiernos
                centrales, locales y regionales para evaluar sus proyectos de
                desarrollo económico.
              </p>
              <p>
                El análisis de la relación B/C, toma valores mayores, menores o
                iguales a 1, esto significa que:
              </p>
            </Col>
          </Row>
          <Row className="m-v-space">
            <Col>
              <MathComponent display={false} tex={String.raw`\frac{B}{C}>1 `} />
              <span>
                Los ingresos son mayores que los egresos, entonces el proyecto
                es aconsejable.
              </span>
              <br />
              <MathComponent display={false} tex={String.raw`\frac{B}{C}=1 `} />
              <span>
                Los ingresos son iguales que los egresos, entonces el proyecto
                es indiferente.
              </span>
              <br />
              <MathComponent display={false} tex={String.raw`\frac{B}{C}<1 `} />
              <span>
                Los ingresos son menores que los egresos, entonces el proyecto
                no es aconsejable.
              </span>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                La relación B/C sólo entrega un índice de relación y no un valor
                concreto, además no permite decidir entre proyectos
                alternativos.
              </p>
              <p>
                <b>Ejemplo 1. </b>El Proyecto "x" tiene una duración de 5 años,
                para el cual se estiman los siguientes flujos de efectivo:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th colSpan={7}>Flujo neto de efectivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2} />
                    <td>Año 0</td>
                    <td>Año 1</td>
                    <td>Año 2</td>
                    <td>Año 3</td>
                    <td>Año 4</td>
                    <td>Año 5</td>
                  </tr>
                  <tr>
                    <td>
                      <b>A</b>
                    </td>
                    <td>
                      <b>Ingresos totales</b>
                    </td>
                    <td></td>
                    <td>
                      <b>$80,000</b>
                    </td>
                    <td>
                      <b>$65,000</b>
                    </td>
                    <td>
                      <b>$70,000</b>
                    </td>
                    <td>
                      <b>$70,000</b>
                    </td>
                    <td>
                      <b>$90,000</b>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td colSpan={2}>Ingresos(ventas)</td>
                    <td>$80,000</td>
                    <td>$60,000</td>
                    <td>$70,000</td>
                    <td>$70,000</td>
                    <td>$72,000</td>
                  </tr>
                  <tr>
                    <td />
                    <td colSpan={6}>Valor de rescate</td>
                    <td>$18,000</td>
                  </tr>
                  <tr>
                    <td />
                    <td colSpan={3}>Otros ingresos</td>
                    <td>$5,000</td>
                    <td colSpan={3}></td>
                  </tr>
                  <tr>
                    <td>
                      <b>B</b>
                    </td>
                    <td>
                      <b>Egresos totales</b>
                    </td>
                    <td>
                      <b>$42,000</b>
                    </td>
                    <td>
                      <b>$52,000</b>
                    </td>
                    <td>
                      <b>$53,000</b>
                    </td>
                    <td>
                      <b>$60,000</b>
                    </td>
                    <td>
                      <b>$60,000</b>
                    </td>
                    <td>
                      <b>$80,000</b>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>Inversión</td>
                    <td>$42,000</td>
                    <td colSpan={5} />
                  </tr>
                  <tr>
                    <td />
                    <td>Costos totales</td>
                    <td />
                    <td>$52,000</td>
                    <td>$53,000</td>
                    <td>$60,000</td>
                    <td>$60,000</td>
                    <td>$80,000</td>
                  </tr>
                  <tr>
                    <td>
                      <b>C</b>
                    </td>
                    <td>
                      <b>Flujo neto de efectivo (A-B)</b>
                    </td>
                    <td>
                      <b>$42,000</b>
                    </td>
                    <td>
                      <b>$28,000</b>
                    </td>
                    <td>
                      <b>$12,000</b>
                    </td>
                    <td>
                      <b>$10,000</b>
                    </td>
                    <td>
                      <b>$10,000</b>
                    </td>
                    <td>
                      <b>$10,000</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
              Tabla. Flujos de efectivo para un periodo de 5 años
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Considerando una tasa de actualización del 10%, vamos a
                determinar la relación Beneficio-Costo.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={8}>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Año</th>
                    <th>Ingresos Totales</th>
                    <th>Ingresos actualizados con i=10%</th>
                    <th>Egresos totales</th>
                    <th>Egresos actualizados con i=10%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td colSpan={2} />
                    <td>$42,000</td>
                    <td>$42,000</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>$80,000</td>
                    <td>$72,720</td>
                    <td>$52,000</td>
                    <td>$47,268</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>$65,000</td>
                    <td>$53,690</td>
                    <td>$53,000</td>
                    <td>$43,778</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>$70,000</td>
                    <td>$52,570</td>
                    <td>$60,000</td>
                    <td>$45,060</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>$70,000</td>
                    <td>$47,810</td>
                    <td>$60,000</td>
                    <td>$40,980</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>$90,000</td>
                    <td>$55,890</td>
                    <td>$80,000</td>
                    <td>$49,680</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Suma</b>
                    </td>
                    <td />
                    <td>$282,680</td>
                    <td />
                    <td>$268,766</td>
                  </tr>
                </tbody>
              </Table>
              Tabla. Relación Costo &minus; Beneficio
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`Relaci\acute{o}n\;Costo-Beneficio\left(\frac{B}{C}\right)=\frac{Suma\;de\;ingresos\; actualizados}{Suma\;de\;egresos\; actualizados}=\frac{282,680}{268,766}=1.05`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              El resultado significa que se recuperarían los costos del proyecto
              y se estaría obteniendo un 5% de beneficios tomando como base los
              costos.
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FiveThreeSix;

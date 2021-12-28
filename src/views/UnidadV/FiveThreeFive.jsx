import React, { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const FiveThreeFive = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md justify-text">
          <Row>
            <Col>
              <h2>3.2.1. Análisis vertical (razones financieras y Dupont)</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                La TIR es la tasa que iguala la suma de los flujos descontados a
                la inversión inicial; se mide en porcentaje y se define como la
                tasa de descuento que iguala el valor de los beneficios con el
                valor de todos los costos. En otras palabras, es una tasa de
                descuento que hace posible igualar el valor presente de los
                ingresos con el valor presente de los egresos, es decir:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent tex={String.raw`FORMULAAA`} />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Donde:</p>
              <MathComponent display={false} tex={String.raw`VPI=`} />
              <span>Valor presente de la inversión</span>
              <br />
              <MathComponent display={false} tex={String.raw`FNE=`} />
              <span>Flujo neto de efectivo</span>
              <br />
              <MathComponent display={false} tex={String.raw`n=`} />
              <span>Año en el que ocurre el flujo neto de efectivo</span>
              <br />
              <MathComponent display={false} tex={String.raw`i=`} />
              <span>Tasa de descuento</span>
              <p>
                Se le llama tasa interna de rendimiento porque supone que el
                dinero que se gana año con año se reinvierte en su totalidad. Es
                decir, se trata de la tasa de rendimiento generada en su
                totalidad en el interior de la empresa por medio de la
                reinversión (Angulo, 2016; Baca, 2016)
              </p>
              <p>
                Si el VPN=0 sólo se estará ganando la tasa de descuento
                aplicada, es decir la TMAR, y un proyecto podría aceptarse con
                este criterio, ya que se está ganando lo mínimo fijado como
                rendimiento.
              </p>
              <p>
                La TIR indica cuál es el valor real del rendimiento del dinero
                en una inversión. Se usa la ecuación anterior y se deja como
                incógnita la i; se puede determinar por medio de tanteos (prueba
                y error), hasta que la i iguale la suma de los flujos
                descontados, a la inversión inicial; es decir se hace variar la
                i de la ecuación VPN hasta que satisfaga la igualdad de ésta.
                Tal denominación permitirá conocer el rendimiento real de esa
                inversión.
              </p>
              <p>
                Con el criterio de aceptación que emplea el método de la TIR; si
                ésta es mayor que la TMAR, se acepta la inversión; es decir, si
                el rendimiento de la empresa es mayor que el mínimo fijado como
                aceptable, la inversión es económicamente rentable.
              </p>
              <p>
                En la operación práctica de una empresa se da el caso de que
                exista una pérdida en determinado periodo. En esta situación se
                recomienda no usar la TIR como método de evaluación y, en cambio
                usar el VPN que no presenta esta desventaja.
              </p>
              <p>
                <b>Cálculo la TIR por el método ensayo y error </b>
              </p>
              <p>
                Vamos a determinar la TIR para un proyecto con una vida de 3
                años; sabemos que el valor de la inversión es de $10,000 y se
                espera recibir $5,000 en el primer año; $5,000 en el segundo año
                y $3,000 en el tercer año. Para este ejemplo el valor de la TMAR
                o costo de capital es de 15%.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center center-table-rows">
            <Col sm={4}>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th colSpan={2}>Inversión $10,000</th>
                  </tr>
                  <tr>
                    <th>Año</th>
                    <th>Flujo de efectivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>$5,000.00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>$5,000.00</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>$2,000.00</td>
                  </tr>
                  <tr>
                    <td>TMAR</td>
                    <td>15%</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FiveThreeFive;

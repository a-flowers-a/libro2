import React, { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { MathComponent } from "mathjax-react";
import { scrollTop } from "../../helpers/general";

const FiveThreeOne = () => {
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
              <h2>
                5.3.1 Método del período de recuperación de la inversión (PRI)
              </h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Este método permite estimar el tiempo que se requiere para
                recuperar la inversión inicial de un proyecto, para ello hay que
                sumar los flujos netos de efectivo (FNE) del proyecto hasta
                recuperar el valor de la inversión.
              </p>
              <p>
                <b>Ejemplo</b>
              </p>
              <p>
                El proyecto “A” requiere de una inversión de $1,000 pesos (año
                0) y se esperan los flujos netos de efectivo (FNE) que se
                especifican en la tabla 5.1
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center center-table-rows">
            <Col sm={6}>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Año</th>
                    <th>Flujo neto de efectivo (FNE)</th>
                    <th>
                      Flujo neto de efectivo acumulado del año 1 al año “n”
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>-$1,000</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>$350</td>
                    <td>$350</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>$600</td>
                    <td>$950</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>$500</td>
                    <td>$1,450</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>$800</td>
                    <td>$2,250</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>$950</td>
                    <td>$3,200</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="center-text">
            <Col>
              <p>Tabla 5.1 Flujos netos de efectivo (FNE) del proyecto “A”</p>
              <p>Fuente: Elaboración propia</p>
            </Col>
          </Row>
          <Row className="justify-content-center ">
            <Col>
              <p>
                Como puedes observar al final del año 2 la suma de los FNE del
                proyecto es de $950 pesos, por lo que en ese año aún faltarían
                $50 pesos para recuperar la inversión inicial que es de $1,000
                pesos, y en el año 3 el FNE acumulado excede a la cantidad de la
                inversión. Lo que significa que la inversión se recupera después
                del año 2 y antes del año 3.
              </p>
              <p>El PRI se estima de la siguiente forma:</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="overflow-auto">
              <MathComponent
                tex={String.raw`PRI=\frac{Monto\;faltante\;para\;recuperar\;la \;inversi\acute{o}n\;inicial}{FNE\;del\;a\widetilde{n}o\;en\;que\;se\;recupera\;la\;inversi\acute{o}n}+periodo\;inmediato\;anterior\;en\;que\;se\;recupera\;la \;inversi\acute{o}n`}
              />
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`PRI =\frac{50}{500} + 2 = 2.1\;a\widetilde{n}os`}
              />
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>Para tener un dato más preciso</p>
              <ul>
                <li>Multiplicamos 0.1 x 12 = 1.2 meses</li>
                <li>Multiplicamos 0.2 X 30 = 6 días</li>
              </ul>
              <p>UNDRLINE THIS </p>
              <p>
                El período de recuperación de la inversión se estima en 2 años,
                1 mes y 6 días.
              </p>
              <p>
                <b>Criterio de decisión</b>
              </p>
              <p>
                Si el período de recuperación calculado es menor que el período
                de recuperación establecido por la empresa o el inversionista,
                el proyecto podría aceptarse; de lo contario se rechazaría.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FiveThreeOne;

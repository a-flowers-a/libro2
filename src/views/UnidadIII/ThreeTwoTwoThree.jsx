import React, { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeTwoTwoThree = () => {
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
              <h2>3.2.2.3 Método de control presupuestal</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Método de análisis cuya base principal son los presupuestos. Un
                presupuesto es una estimación en términos monetarios tanto de
                los ingresos como de los egresos de una empresa; constituye una
                herramienta auxiliar que permite ejercer un mejor control sobre
                las operaciones de la empresa para que éstas vayan lo más
                apegado posible con lo planeado, evitando despilfarros,
                deficiencias y otros aspectos que pudieran tener un impacto
                negativo en la entidad.
              </p>
              <p>
                En términos generales el método de control presupuestal consiste
                en preparar presupuestos para el conjunto de operaciones de una
                empresa e ir monitoreándolos con el fin de detectar las
                desviaciones entre lo planeado y lo real <b>Figura 3.15</b>, lo
                que permite emprender acciones de control y ejecución a efecto
                de corregir las desviaciones presentadas.
              </p>
            </Col>
          </Row>
          <Row className="img-source center-text m-v-space">
            <Col>
              <b>Figura 3.15 Método del control presupuestal</b>
            </Col>
          </Row>
          <Row className="justify-content-center center-table-rows m-v-space">
            <Col>
              <Table striped bordered responsive size="sm">
                <thead>
                  <tr className="center-text">
                    <th>Concepto</th>
                    <th>Real 2022</th>
                    <th>Presupuestado 2023</th>
                    <th>Real 2023</th>
                    <th>Real 2023 vs. presupuestado 2023</th>
                    <th>Real 2022 vs. real 2023</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Ventas</b>
                    </td>
                    <td>2,100,000</td>
                    <td>2,300,000</td>
                    <td>2,000,000</td>
                    <td>-300,000</td>
                    <td>-100,000</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="img-source center-text ">
            <Col>Fuente: Elaboración propia</Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoTwoThree;

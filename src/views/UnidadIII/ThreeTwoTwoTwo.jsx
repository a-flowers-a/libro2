import React, { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { Line } from "react-chartjs-2";
import { scrollTop } from "../../helpers/general";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const ThreeTwoTwoTwo = () => {
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
              <h2>3.2.2.2 Método de tendencias</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                De acuerdo con Elizondo (1999) el método de tendencias,
                basándose en datos históricos durante un periodo de tiempo
                determinado, ayuda a inferir sobre la trayectoria futura de la
                entidad.
              </p>
              <p>
                Una vez que se ha realizado un análisis de las causas internas
                y/o externas que produjeron tal o cual tendencia, si existe una
                alta correlación entre determinadas circunstancias y cierta
                tendencia y se espera que dichas circunstancias prevalezcan en
                el futuro, es lógico esperar que la tendencia se mantendrá
                dentro de ciertos límites.
              </p>
              <p>
                En resumen, con el conocimiento de los datos históricos de una
                empresa se logra una mejor comprensión de la tendencia de un
                negocio y aún más si ésta se grafica, tal como se puede apreciar
                en las figuras 1 a 6; adicionalmente, nos proporciona
                información valiosa para la realización de pronósticos.
              </p>
            </Col>
          </Row>
          <Row className="center-table-rows justify-content-center">
            <Col sm={11}>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th colSpan={2}>Concepto</th>
                    <th>2023</th>
                    <th>2024</th>
                    <th>2025</th>
                    <th>2026</th>
                    <th>2027</th>
                    <th>2028</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1. </td>
                    <td>Ventas</td>
                    <td>21,000</td>
                    <td>25,000</td>
                    <td>27,000</td>
                    <td>23,000</td>
                    <td>31,000</td>
                    <td>
                      <b>34,000</b>
                    </td>
                  </tr>
                  <tr>
                    <td>2. </td>
                    <td>Gastos de administración</td>
                    <td>440</td>
                    <td>680</td>
                    <td>900</td>
                    <td>1,100</td>
                    <td>1,200</td>
                    <td>
                      <b>1,400</b>
                    </td>
                  </tr>
                  <tr>
                    <td>3. </td>
                    <td>Utilidades del ejercicio</td>
                    <td>4,200</td>
                    <td>5,000</td>
                    <td>5,400</td>
                    <td>2,000</td>
                    <td>6,200</td>
                    <td>
                      <b>6,800</b>
                    </td>
                  </tr>
                  <tr>
                    <td>4. </td>
                    <td>Razón de liquidez inmediata</td>
                    <td>
                      <b>4</b>
                    </td>
                    <td>
                      <b>2</b>
                    </td>
                    <td>
                      <b>6</b>
                    </td>
                    <td>
                      <b>4</b>
                    </td>
                    <td>
                      <b>4</b>
                    </td>
                    <td>
                      <b>2</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="img-source center-text ">
            <Col>
              Fuente: Elaboración propia, con base en la bibliografía consultada
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={6}>
              <Line options={options} data={ventas} />
            </Col>
            <Col sm={6}>
              <Line options={options} data={gastos} />
            </Col>
            <Col sm={6}>
              <Line options={options} data={utilidades} />
            </Col>
            <Col sm={6}>
              <Line options={options} data={liquidez} />
            </Col>
          </Row>
          <Row className="img-source center-text ">
            <Col>Fuente: Elaboración propia</Col>
          </Row>

          <Row className="m-v-space">
            <Col>
              <p>
                Cabe destacar que al aplicarse este método deberán hacerse
                investigaciones sobre los elementos internos y externos que
                tengan una relación directa con los resultados obtenidos, estas
                relaciones de dependencia pueden ser:
              </p>
              <ol>
                <li>Variaciones en el volumen de unidades vendidas</li>
                <li>Variaciones en el poder adquisitivo de la moneda</li>
                <li>Variaciones en el poder de compra de los consumidores</li>
                <li>Cambios en la oferta y la demanda en general</li>
                <li>Cambios en los sistemas de ventas</li>
                <li>Aparición de sucedáneos (productos sustitutos)</li>
                <li>Cambios de personal</li>
              </ol>
              <p>
                Es importante mencionar que este método está muy ligado al
                desarrollo de la entidad económica desde su creación, se debe
                considerar que las empresas tienen diversas etapas en su
                desarrollo y que las soluciones financieras deben ser adecuadas
                a la etapa en la cual se encuentra la empresa.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};
const labels = ["2023", "2024", "2025", "2026", "2027", "2028"];

const ventasX = [21000, 25000, 27000, 23000, 31000, 34000];
const ventas = {
  labels,
  datasets: [
    {
      label: "Ventas",
      data: ventasX,
      borderColor: "#68DADE",
      backgroundColor: "rgba(104,218,222, 0.5)",
    },
  ],
};
const gastosX = [440, 680, 900, 1100, 1200, 1400];
const gastos = {
  labels,
  datasets: [
    {
      label: "Gastos de administración",
      data: gastosX,
      borderColor: "#DEC08A",
      backgroundColor: "rgba(222,192,138, 0.5)",
    },
  ],
};
const utilidadesX = [4200, 5000, 5400, 2000, 6200, 6800];
const utilidades = {
  labels,
  datasets: [
    {
      label: "Utilidades del ejercicio",
      data: utilidadesX,
      borderColor: "#B673DE",
      backgroundColor: "rgba(182,115,222, 0.5)",
    },
  ],
};

const liquidezX = [4, 2, 6, 4, 4, 2];
const liquidez = {
  labels,
  datasets: [
    {
      label: "Razón de liquidez inmediata",
      data: liquidezX,
      borderColor: "#5DDE99",
      backgroundColor: "rgba(93,222,153, 0.5)",
    },
  ],
};

export default ThreeTwoTwoTwo;

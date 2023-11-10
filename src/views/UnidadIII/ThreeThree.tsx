import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const ThreeThree = () => {
  // const imgVerticales = "../../assets/images/verticales.png";
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
              <h2>3.3 Análisis del punto de equilibrio operacional</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                A lo largo del tiempo se han desarrollado herramientas
                administrativas y financieras que facilitan la toma de
                decisiones empresariales. Una de esas herramientas es el punto
                de equilibrio (PE).
              </p>
              <p>
                El PE se obtiene cuando el ingreso derivado de las ventas es
                igual al costo total. El costo total se conforma por la suma de
                costos y gastos; costo y gasto no es lo mismo, el costo está
                directamente relacionado con la producción y el gasto con las
                demás actividades operativas que realiza la empresa para su
                funcionamiento.
              </p>
              <p>
                El punto de equilibrio, tal y como se aprecia en la{" "}
                <b>figura 3.16 </b>
                se obtiene cuando los ingresos son iguales al costo total (suma
                de los costos y gastos); es decir, cuando no hay ganancias
                tampoco pérdidas.
              </p>
              <p>
                Antes de continuar, es importante que conozcas los siguientes
                términos:
              </p>
              <p>
                <b>Costos y gastos variables (CV): </b>
                Son aquellos que están relacionados con el volumen de producción
                y ventas tal es el caso de la materia prima, la mano de obra a
                destajo, y las comisiones que se pagan a los vendedores por
                unidad vendida; en algunos casos también podrían considerarse
                como costos y gastos variables la energía eléctrica y el gas
                entre otros.
              </p>
              <p>
                <b>Costo variable unitario (CVU): </b>Es el costo variable de
                producir y vender <u>una</u> unidad
              </p>
              <p>
                <b>Costo variable total (CVT): </b>
                Es el costo variable de producir y vender “Q” número de
                unidades, y se obtiene multiplicando la cantidad de unidades
                producidas y/o vendidas por su costo variable unitario; es decir
                CVT = (CVU)(Q)
              </p>
              <p>
                <b>Costos y gastos fijos (CF): </b>
                Son los costos constantes, no están en función del volumen de
                producción ni de ventas; es decir, se generan haya o no
                producción y ventas. Algunos ejemplos son: sueldos fijos, renta,
                pago de intereses al banco, depreciación de la maquinaria, etc.
              </p>
              <p>
                <b>Costo total (CT): </b>
                Es la suma de los costos fijos más el costo variable; es decir:
                CT = CF + CVU (Q)
              </p>
              <p>
                <b>Ingreso o ventas: </b>
                Se calcula multiplicando el número de unidades vendidas por su
                precio de venta unitario
              </p>
              <p>
                <b>
                  Margen de contribución unitario (MCU) o contribución marginal
                  unitaria (MCU):&nbsp;
                </b>
                es el resultado que queda de restar al precio de venta unitario
                (P) el costo variable unitario (CVU)
              </p>
              <p>
                Ahora sí veamos cómo se calcula y por qué es tan importante
                conocer cuál es el punto de equilibrio. Pensemos en que vamos a
                realizar una actividad empresarial, por ejemplo la venta de
                hamburguesas o el lavado de autos o cualquier otra actividad, a
                los tres segundos, nos estaremos entusiasmando pensando en las
                ganancias que vamos a tener y enseguida nos entrará una especie
                de angustia porque de inmediato también pensaremos en el otro
                escenario: tener pérdidas, que ocurren cuando el costo total es
                mayor al dinero que recibimos por vender. Es aquí donde calcular
                el punto de equilibrio cobra relevancia. El Punto de equilibrio
                (PE) es una herramienta que nos da información acerca de cuántas
                unidades hay que producir y vender para no ganar ni perder; es
                decir cuando los ingresos y el costo total son iguales o
                viéndolo de otro modo cuanto restamos el costo total a los
                ingresos y la diferencia es cero.
              </p>
              <p>
                Entonces, el punto de equilibrio se encuentra cuando:
                <b>
                  <i>I = C.T</i>
                </b>
              </p>
              <p>Donde:</p>
              <p>
                I =Ingresos generados de las ventas, que se obtiene
                multiplicando el precio unitario por la cantidad vendida (p)(Q)
              </p>
              <p>CT = CF + CVU (Q)</p>
              <p>Q = volumen de ventas</p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeThree;

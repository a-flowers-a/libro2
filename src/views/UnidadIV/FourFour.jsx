import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourFour = () => {
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
                  <h2>4.4 Estados financieros proforma</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    El término proforma es sinónimo de proyectado, pronosticado,
                    presupuestado y estimado; al hablar de estados financieros
                    proforma nos estaremos refiriendo a estados financieros
                    proyectados.
                  </p>
                  <p className="light-navy">Estados financieros proforma</p>
                  <ul>
                    <li>
                      Los proforma son estados que contienen, en todo o en
                      parte, uno o varios supuestos o hipótesis con el fin de
                      mostrar cuál sería la situación financiera o los
                      resultados de las operaciones si éstos sucedieran.
                    </li>
                    <li>
                      El objetivo de estos estados es proporcionar información
                      anticipada sobre la situación financiera de la empresa si
                      se trata del estado de situación financiera, o de las
                      utilidades o pérdidas si se trata del estado de
                      resultados.
                    </li>
                    <li>
                      La base de los estados financieros proforma son los
                      presupuestos.
                    </li>
                  </ul>
                  <p className="light-navy">Presupuesto</p>
                  <p>
                    Estimación en términos monetarios tanto de los ingresos como
                    de los egresos de un ente económico.
                  </p>
                  <p className="light-navy">
                    ¿Quiénes utilizan los estados financieros proforma?{" "}
                  </p>
                  <ol type="a">
                    <li>
                      <span className="bold light-navy">
                        Accionistas y dueños.
                      </span>
                      Para conocer la situación financiera de la empresa y los
                      resultados esperados, con el fin de tomar decisiones.{" "}
                    </li>
                    <li>
                      <span className="bold light-navy">Administradores.</span>
                      Para planear las operaciones, trazar estrategias
                      facilitando la toma de decisiones que tienen impacto en el
                      presente y en el futuro.
                    </li>
                    <li>
                      <span className="bold light-navy">
                        Acreedores y futuros acreedores.
                      </span>
                      Para vigilar la seguridad de sus créditos u otorgar nuevos
                      créditos.
                    </li>
                    <li>
                      <span className="bold light-navy">
                        Prospectos de accionistas.
                      </span>
                      Para decidir sobre invertir o no en la empresa con base en
                      su situación financiera y resultados de operación.
                    </li>
                    <li>
                      <span className="bold light-navy">
                        Autoridades gubernamentales y crediticias.
                      </span>
                      Estas instituciones se auxilian de los estados financieros
                      proforma como un importante elemento que les proporciona
                      información para evaluar la conveniencia de proporcionar
                      financiamiento o no.
                    </li>
                  </ol>
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

export default FourFour;

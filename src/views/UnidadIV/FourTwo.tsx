import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

import { scrollTop } from "../../helpers/general";

const FourTwo = () => {
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
                  <h2>4.2 Anualidades</h2>
                </Col>
              </Row>
              <Row className="justify-text">
                <Col>
                  <p>
                    Una anualidad es una serie de flujos de efectivo iguales y
                    periódicos durante un determinado tiempo (Besley, 2001;
                    Gitman, 2012).
                  </p>
                  <p>Las anualidades pueden ser de dos tipos:</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <ul>
                    <li>
                      <b> Ordinarias, vencidas o diferidas: </b>
                      el flujo de efectivo (entrada o salida de efectivo) ocurre
                      al final de cada periodo; estas anualidades son las más
                      comunes en finanzas.
                    </li>
                    <li>
                      <span className="bold">Anticipadas: </span>
                      el flujo de efectivo (entrada o salida de efectivo) ocurre
                      al inicio de cada periodo.
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="justify-text light-navy">
                <Col>
                  <p>
                    Nota: en este curso nos centraremos en las anualidades
                    ordinarias, vencidas o diferidas por ser las más utilizadas
                    en el ámbito financiero.
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

export default FourTwo;

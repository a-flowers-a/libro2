import { useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import { MathComponent } from "mathjax-react";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

const Formulario = () => {
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
              <h2>Fórmulas del punto de equilibrio</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>Para un producto</th>
                    <th>Para una mezcla de productos (Varios productos)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sin utilidad</td>
                    <td>
                      <MathComponent
                        tex={String.raw`P.E\;en\;uds.=\frac{C.F}{M.C.U} `}
                      />
                      <MathComponent
                        tex={String.raw`P.E\;en\;pesos.=\frac{C.F}{1-\frac{C.V.U}{P}}`}
                      />
                      <p>Otra forma de calcular P.E en pesos: </p>
                      <MathComponent
                        tex={String.raw`P.E\;en\;pesos.=(P.E\;en\;uds)(P)`}
                      />
                    </td>
                    <td>
                      <MathComponent
                        tex={String.raw`P.E\;mezcla=\frac{C.F}{M.C.P}`}
                      />
                      <MathComponent
                        tex={String.raw`M.C.P = margen\;de\;contribucion\;ponderado`}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Con utilidad</td>
                    <td>
                      <MathComponent
                        tex={String.raw`P.E\;en\;uds.=\frac{C.F+utilidad\;deseada}{P -C.V.U} `}
                      />
                      <MathComponent
                        tex={String.raw`P.E\;en\;pesos.=\frac{C.F+utilidad\;deseada}{1-\frac{C.V.U}{P}}`}
                      />
                      <p>Otra forma de calcular P.E en pesos: </p>
                      <MathComponent
                        tex={String.raw`P.E\;en\;pesos.=(P.E\;en\;uds)(P)`}
                      />
                    </td>
                    <td>
                      <MathComponent
                        tex={String.raw`P.E\;mezcla=\frac{C.F+utilidad\;deseada}{M.C.P}`}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <ul>
              <li>P.E = Punto de equilibrio</li>
              <li>C.F = Costos y gastos fijos</li>
              <li>
                M.C.U = Margen de contribución unitario, se obtiene así: (P -
                C.V.U)
              </li>
              <li>M.C.P = Margen de contribución ponderado</li>
              <li>P = Precio de venta unitario</li>
              <li>C.V.U = Costo variable unitario </li>
            </ul>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default Formulario;

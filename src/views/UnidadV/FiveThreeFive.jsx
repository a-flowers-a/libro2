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
              <h2>
                5.3.5 Tasa Interna de Retorno o Tasa Interna de Rendimiento
                (TIR)
              </h2>
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
              <MathComponent
                tex={String.raw`VPI=\frac{{FNE}_{1}}{{(1+i)}^{1}}+\frac{{FNE}_{2}}{{(1+i)}^{2}}+\frac{{FNE}_{3}}{{(1+i)}^{3}}+ \ldots +\frac{{FNE}_{n}}{{(1+i)}^{n}}`}
              />
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
              <p className="m-t-space">
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
          <Row>
            <Col>
              <p>
                <b>Paso 1: </b>Colocar los datos del proyecto en una tabla y
                encontrar un valor inicial de <b>i</b> para comenzar el primer
                ensayo, podemos empezar con cualquier porcentaje (finalmente los
                cálculos nos irán orientando de si se trata de un porcentaje
                mayor o menor). Para nuestro ejemplo empezaremos con un valor
                tentativo para la TIR del 9%
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center center-table-rows">
            <Col sm={6}>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                  </tr>
                  <tr>
                    <th>Año(n)</th>
                    <th>FNE</th>
                    <th>Flujo descontado con i=9</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>-10,000</td>
                    <td>$-10,000</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5,000</td>
                    <td>$4,585</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>5,000</td>
                    <td>$4,210</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2,000</td>
                    <td>$1,544</td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <b>$399</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Explicación de las columnas</b>
              </p>
              <ul>
                <li>
                  <b>A. </b>El año cero se refiere al presente, al momento en
                  que se realiza la inversión. Los años 1,2 y 3 son los años
                  futuros en los que se esperan recibir flujos de efectivo.
                </li>
                <li>
                  <b>B. </b>El flujo neto de efectivo (FNE) se refiere a una
                  entrada o salida de dinero. En el año cero se están
                  invirtiendo $10,000, en virtud de que es una salida de dinero
                  el FNE es negativo; esta inversión nos dará ingresos (FNE
                  positivos) de $5,000, $5,000 y 2,000 en los años 1, 2 y 3
                  respectivamente.
                </li>
                <li>
                  <b>C. </b>Esta columna muestra el flujo descontado; es decir,
                  el valor presente (VP) de los flujos netos de efectivo. En el
                  año cero se toma el FNE (inversión), ya está a valor presente;
                  no sucede lo mismo para los otros FNE que están expresados a
                  valor futuro (VF), por lo que hay que traerlos a su valor
                  presente. Para realizar los cálculos utilizaremos la fórmula
                  de valor presente de una cantidad única. Es de esta forma que:
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`VP=\frac{VF}{{(1+i)}^{n}}=\frac{5,000}{{(1+0.09)}^{1}}=5,585`}
              />
              <MathComponent
                tex={String.raw`VP=\frac{VF}{{(1+i)}^{n}}=\frac{5,000}{{(1+0.09)}^{2}}=4,210`}
              />
              <MathComponent
                tex={String.raw`VP=\frac{VF}{{(1+i)}^{n}}=\frac{2,000}{{(1+0.09)}^{3}}=1,544`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <b>Paso 2: </b>Nos ubicamos en la columna C y determinamos la
                diferencia de los ingresos actualizados y los egresos
                actualizados; es decir (+ 4,585 + 4,210 + 1,544 - 10,000) = +399
              </p>
              <p>
                Recordemos que el valor de la TIR se encuentra cuando la
                diferencia de los ingresos actualizados y los egresos
                actualizados es de cero; dado que nuestro resultado es de +399
                aún no hemos encontrado el valor de la TIR.
              </p>
              <p>
                <b>Paso 3: </b>. Seguir con el método de ensayo y error; de
                acuerdo con muestro ejemplo debemos probar con una i mayor
                buscando que el resultado se acerque a cero. Por lo que ahora
                vamos a intentar con una i del 12%, realizamos el mismo
                procedimiento que hemos venido realizando, y la nueva tabla nos
                queda de la siguiente forma:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center center-table-rows">
            <Col sm={8}>
              <Table striped bordered hover responsive size="sm">
                <thead>
                  <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                  </tr>
                  <tr>
                    <th>Año(n)</th>
                    <th>FNE</th>
                    <th>Flujo descontado con i=9</th>
                    <th>Flujo descontado con i=12</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>-10,000</td>
                    <td>$-10,000</td>
                    <td>$10,000</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>5,000</td>
                    <td>$4,585</td>
                    <td>$4,465</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>5,000</td>
                    <td>$4,210</td>
                    <td>$3,985</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>2,000</td>
                    <td>$1,544</td>
                    <td>$1,424</td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td>
                      <b>$399</b>
                    </td>
                    <td>
                      <b>$126</b>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Como se puede observar con i = 12% la diferencia de los ingresos
                actualizados y los egresos actualizados es (+ 4,465 + 3,985 +
                1424 - 10,000) = -126 Ahora el resultado es menor que cero, lo
                que significa que el valor de la TIR se encuentra entre el 9% y
                el 12%
              </p>
              <p>
                <b>Paso 4: </b>Para obtener un valor más exacto de la TIR más se
                usa la técnica de interpolación, para lo cual podemos usar
                alguna de las siguientes fórmulas:
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`TIR={{T}_{m}}\left[({{T}_{M}}-{{T}_{m}})\left(\frac{{{VAN}_{{T}_{m}}}}{{{VAN}_{{T}_{m}}}-{{VAN}_{{T}_{M}}}}\right)\right ]`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Donde:</p>
              <MathComponent display={false} tex={String.raw`{{T}_{m}}=`} />
              <span>Tasa mínima</span>
              <br />
              <MathComponent display={false} tex={String.raw`{{T}_{M}}=`} />
              <span>Tasa máxima</span>
              <br />
              <MathComponent
                display={false}
                tex={String.raw`{{VAN}_{{T}_{M}}}`}
              />
              <span>Valor actual neto a la tasa mínima</span>
              <br />
              <MathComponent
                display={false}
                tex={String.raw`{{VAN}_{{T}_{m}}}`}
              />
              <span>Valor actual neto a la tasa máxima</span>
              <br />
              <MathComponent display={false} tex={String.raw`i=`} />
              <span>Tasa de descuento</span>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`TIR=11+\left[(1)\left(\frac{27}{27+126}\right)\right ]=11.1764\%`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Otra forma que se utiliza para interpolar es:</p>
            </Col>
          </Row>
          <Row className="justify-content-center overflow-auto">
            <Col>
              <MathComponent
                tex={String.raw`TIR=\frac{[({VAN}_{1})({T}_{2})]-[({VAN}_{2})({T}_{1})]}{{VAN}_{1}-{VAN}_{2}}=\frac{(27)(0.12)-(-126)(0.11)}{27-(-126)}=11.7\%`}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Donde:</p>
              <MathComponent display={false} tex={String.raw`{VAN}_{1}=`} />
              <span>Valor actual neto a la tasa mínima</span>
              <br />
              <MathComponent display={false} tex={String.raw`{T}_{1}=`} />
              <span>Tasa mínima</span>
              <br />
              <MathComponent display={false} tex={String.raw`{VAN}_{2}=`} />
              <span>Valor actual neto a la tasa máxima</span>
              <br />
              <MathComponent display={false} tex={String.raw`{T}_{2}=`} />
              <span>Tasa máxima</span>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Paso 5:</p>Determinar la conveniencia de invertir en el
              proyecto dadas las siguientes premisas:
              <p className="center-text m-v-space">
                <b>
                  TIR &gt; TMAR se acepta el proyecto
                  <br /> TIR &lt; TMAR se rechaza el proyecto
                </b>
              </p>
              <p>
                En este caso la TIR resultó de 11.17% y la TMAR o costo de
                capital es del 15% por lo tanto se rechaza el proyecto
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default FiveThreeFive;

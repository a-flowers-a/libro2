import React, { useEffect } from "react";
import { Row, Col, Container, Image, Accordion } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Info from "../../components/Info";
import { scrollTop } from "../../helpers/general";

const ThreeTwoOneTwo = () => {
  const razonesSimples = "../../assets/images/razonesSimples.png";
  const margen1 = "../../assets/images/margen1.png";
  const margenE = "../../assets/images/margenE.png";
  const rat1 = "../../assets/images/rat1.png";
  const ratE = "../../assets/images/ratE.png";
  const roe1 = "../../assets/images/roe1.png";
  const roeE = "../../assets/images/roeE.png";
  const razonCorrienteF = "../../assets/images/razonCorrienteF.png";
  const razonCorrienteE = "../../assets/images/razonCorrienteE.png";
  const pruebaAcidoF = "../../assets/images/pruebaAcidoF.png";
  const pruebaAcidoE = "../../assets/images/pruebaAcidoE.png";
  const capitalTrabajoF = "../../assets/images/capitalTrabajoF.png";
  const capitalTrabajoE = "../../assets/images/capitalTrabajoE.png";
  const cicloOperativoF = "../../assets/images/cicloOperativoF.png";
  const cicloOperativoE = "../../assets/images/cicloOperativoE.png";
  const apalancamientoF = "../../assets/images/apalancamientoF.png";
  const apalancamientoE = "../../assets/images/apalancamientoE.png";
  const coberturaF = "../../assets/images/coberturaF.png";
  const coberturaE = "../../assets/images/coberturaE.png";
  const rotacionCobrarF = "../../assets/images/rotacionCobrarF.png";
  const rotacionCobrarE1 = "../../assets/images/rotacionCobrarE1.png";
  const rotacionCobrarE2 = "../../assets/images/rotacionCobrarE2.png";
  const rotacionPagarF = "../../assets/images/rotacionPagarF.png";
  const rotacionPagarE1 = "../../assets/images/rotacionPagarE1.png";
  const rotacionPagarE2 = "../../assets/images/rotacionPagarE2.png";
  const rotacionInventariosF = "../../assets/images/rotacionInventariosF.png";
  const rotacionInventariosE1 = "../../assets/images/rotacionInventariosE1.png";
  const rotacionInventariosE2 = "../../assets/images/rotacionInventariosE2.png";
  const rotacionActivosFijosF = "../../assets/images/rotacionActivosFijosF.png";
  const rotacionActivosFijosE = "../../assets/images/rotacionActivosFijosE.png";
  const rotacionActivosTotF = "../../assets/images/rotacionActivosTotalesF.png";
  const rotacionActivosTotE = "../../assets/images/rotacionActivosTotalesE.png";
  const utilidadAccionF = "../../assets/images/utilidadAccionF.png";
  const utilidadAccionE = "../../assets/images/utilidadAccionE.png";
  const valorLibrosF = "../../assets/images/valorLibrosF.png";
  const valorLibrosE = "../../assets/images/valorLibrosE.png";
  const precioValorF = "../../assets/images/precioValorF.png";
  const precioValorE = "../../assets/images/precioValorE.png";
  const rendDividendosF = "../../assets/images/rendimientoDividendosF.png";
  const rendDividendosE = "../../assets/images/rendimientoDividendosE.png";

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
              <h2>3.2.1.2 Método de razones simples</h2>
            </Col>
          </Row>
          <Row className="justify-text">
            <Col>
              <p>
                Las razones o índices (ratios en el idioma inglés), se ocupan en
                la vida diaria, por ejemplo, algunas personas decidirán comprar
                un automóvil considerando el recorrido por litro de gasolina, es
                decir; utilizan índices para valorar un desempeño específico, en
                este caso de un automóvil. Del mismo modo, los índices o razones
                financieras se utilizan para ponderar y evaluar el desempeño
                operativo de las empresas.
              </p>
              <p>
                Matemáticamente se denomina "razón" a la relación que existe
                entre dos cantidades de la misma especie. Ahora bien, entre los
                diversos rubros que constituyen a los estados financieros
                existen ciertas relaciones, que dan información sobre la
                estructura financiera y la productividad de la entidad.
              </p>
              <p>
                El análisis financiero por el método de razones simples es de
                gran apoyo para las empresas, permite identificar puntos fuertes
                y probables puntos débiles (principales problemas) en el negocio
                y, adicionalmente puede utilizarse también para determinar
                probabilidades y tendencias. Es importante considerar que este
                método es solo una herramienta; sirve como auxiliar para el
                estudio de las cifras de los negocios, por lo que es necesario
                reconocer sus limitaciones y en este sentido resaltar la
                relevancia que tiene el <i>feeling</i> del analista financiero.
              </p>
              <p>
                Cabe señalar que no es conveniente limitar el número de las
                razones ni su aplicación en cada caso concreto; pueden existir
                tantas razones financieras como relaciones se deseen hacer entre
                los diferentes renglones de los estados financieros, siempre y
                cuando dicha relación entre los elementos se describa y tenga un
                sentido lógico.
              </p>
              <p>
                Para efectos de este curso, nos enfocaremos en los siguientes
                grupos de razones simples: índices de rentabilidad, índices de
                liquidez, índices de endeudamiento, índices de rotación o
                administración de activos e índices para la valuación de las
                inversiones <b>(Figura x)</b>.
              </p>
            </Col>
          </Row>
          <Row className="center-text">
            <Col>
              <Image
                className="mid-img"
                src={razonesSimples}
                alt="Estado de resultados"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Enseguida encontrarás la explicación con su respectivo ejemplo
                de los índices incluidos en cada uno de los grupos de razones
                simples antes mencionados.
              </p>
              <Info color="purple">
                NOTA: Antes de continuar descarga los siguientes estados
                financieros, porque en éstos se basa el cálculo de todas las
                razones financieras que se explican a continuación
              </Info>
            </Col>
          </Row>
          <Row className="m-v-space">
            <b>I. Índices de rentabilidad</b>
            <p>
              Los índices de rentabilidad miden la capacidad que tiene la
              empresa para generar rendimiento sobre las ventas, sobre los
              activos totales y sobre el patrimonio (capital contable). Los
              índices de rentabilidad más usados son:
            </p>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    I.1 Margen de utilidad o de rentabilidad
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={margen1}
                        alt="Fórmula margen de utilidad"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={margenE}
                        alt="Ejemplo margen de utilidad"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Indica el porcentaje de utilidad en relación con las
                      ventas, en este ejemplo, también se puede leer de la
                      siguiente manera: por cada peso vendido 7.87 centavos son
                      de utilidad.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    I.2 Retorno sobre Activos Totales (RAT) o Retorno de la
                    Inversión (ROI) o ROA por sus siglas en inglés
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={rat1}
                        alt="Fórmula RAT"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={ratE}
                        alt="Ejemplo RAT"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Indica el porcentaje de utilidad que se obtiene con el
                      empleo de todos los recursos (activos) propios y ajenos de
                      la empresa. Entre más alto sea dicho rendimiento, mejor
                      será.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    I.3 Retorno sobre el capital contable (ROE)
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={roe1}
                        alt="Fórmula ROE"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={roeE}
                        alt="Ejemplo ROE"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Mide el rendimiento que obtiene una empresa sobre el
                      patrimonio de los accionistas. El ejemplo se puede
                      interpretar: por cada peso invertido en patrimonio
                      (capital contable) se está obteniendo 37 centavos de la
                      utilidad.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-v-space ">
            <b>II. Índices de liquidez</b>
            <p>
              Se entiende por liquidez la capacidad que tiene la empresa para
              cumplir con sus obligaciones en el corto plazo a medida que se van
              venciendo, en otras palabras, la liquidez es la capacidad para
              convertir el activo circulante en dinero.
            </p>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    II.1 Razón de liquidez, razón circulante o razón corriente
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={razonCorrienteF}
                        alt="Fórmula razón de liquidez"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={razonCorrienteE}
                        alt="Ejemplo razón de liquidez"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Indica el número de veces que con el activo circulante se
                      puede pagar el pasivo circulante; en el ejemplo, el
                      resultado es una razón de 2.32 a 1, lo cual significa que
                      por cada peso que la empresa debe a corto plazo se tienen
                      $2.32 pesos para pagar.
                    </p>

                    <p>
                      <u>
                        Sí la razón de liquidez, razón circulante o razón
                        corriente >1 se puede decir que sí hay liquidez.
                      </u>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    II.2 Prueba del ácido o razón de liquidez inmediata
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={pruebaAcidoF}
                        alt="Fórmula prueba del ácido"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={pruebaAcidoE}
                        alt="Ejemplo prueba del ácido"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Esta razón financiera es una medición más estricta de la
                      liquidez de la empresa que la razón circulante. Indica qué
                      tanto se pueden pagar las obligaciones en el corto plazo
                      sin convertir los inventarios en efectivo inmediatamente.
                      En otras palabras, al activo circulante se le quitan los
                      inventarios por tratarse del activo menos líquido, de esta
                      manera se puede saber que tanta liquidez tiene una empresa
                      sin recurrir a la venta de sus inventarios.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>II.3 Capital de trabajo</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Expresa en términos monetarios el valor que le quedaría a
                      la empresa, representado en efectivo u otros activos
                      corrientes, después de pagar todos sus pasivos de corto
                      plazo, en el caso de que tuvieran que ser pagados de
                      inmediato.
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={capitalTrabajoF}
                        alt="Fórmula capital de trabajo"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={capitalTrabajoE}
                        alt="Ejemplo capital de trabajo"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Se llama capital de trabajo al dinero que tiene la empresa
                      para poder operar adecuadamente. Si la diferencia da por
                      resultado un número positivo la empresa tiene superávit de
                      lo contrario tiene déficit, lo cual nos indica de un buen
                      o mal funcionamiento respectivamente.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    II.4 Ciclo de conversión de efectivo o ciclo operativo
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={cicloOperativoF}
                          alt="Fórmula ciclo de conversión"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>Donde:</p>
                    <p>R.I = Rotación de inventarios</p>
                    <p>R.CxC= Rotación de cuentas por cobrar</p>
                    <p>R.CxP= Rotación de cuentas por pagar</p>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={cicloOperativoE}
                          alt="Ejemplo ciclo de conversión"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      Esta razón es importante debido a que demuestra la
                      efectividad en la que la compañía transforma sus
                      inventarios en ventas y las ventas en efectivo para poder
                      pagar a sus proveedores y acreedores. En el ejemplo, la
                      empresa está tardando aproximadamente 54.44 días en
                      realizar su ciclo de conversión de efectivo.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-v-space ">
            <b>III. Índices de endeudamiento</b>
            <p>
              Estos índices miden el grado de utilización que hace una empresa
              del apalancamiento financiero (uso de deuda). Es decir, indica el
              porcentaje de activos que son financiados por proveedores y
              acreedores.
            </p>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    III.1 Apalancamiento o deuda sobre el activo total
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={apalancamientoF}
                        alt="Fórmula apalancamiento"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={apalancamientoE}
                        alt="Ejemplo apalancamiento"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Indica el porcentaje del activo total que es financiado
                      por proveedores y acreedores. Cuando la razón de
                      apalancamiento es demasiado elevada, aumenta el riesgo de
                      incumplimiento de las deudas y obligaciones por parte de
                      la empresa.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    III.2 Razón de cobertura de intereses
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={coberturaF}
                        alt="Fórmula cobertura de intereses"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={coberturaE}
                        alt="Ejemplo cobertura de intereses"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Indica en qué medida los ingresos actuales de la empresa
                      pueden cumplir con los pagos de intereses corrientes. En
                      otras palabras, indica el número de veces que con la
                      utilidad de operación la entidad puede pagar los intereses
                      generados en el periodo. Cuando la razón de cobertura de
                      intereses cae por debajo de 1.0, la empresa se ve
                      amenazada debido a su incapacidad para pagar los intereses
                      a su vencimiento, lo cual la puede llevar a la bancarrota.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-v-space grey-font">
            <b>IV. Índices de rotación o administración de activos</b>
            <p>
              Indican cuánto ha invertido una empresa en un determinado activo o
              grupo de éstos, en relación con los ingresos que produce. Estas
              razones en general miden la eficiencia de una empresa para
              administrar y utilizar sus activos.
            </p>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    IV.1 Rotación de la cartera o rotación de cuentas por cobrar
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rotacionCobrarF}
                          alt="Fórmula rotación de cartera"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rotacionCobrarE1}
                          alt="Ejemplo rotación cartera"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rotacionCobrarE2}
                          alt="Ejemplo rotación cartera"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      La rotación de cuentas por cobrar demuestra el número de
                      días en promedio en que la empresa tarda en cobrar a sus
                      deudores, en otras palabras, el tiempo en el que convierte
                      sus cuentas por cobrar en efectivo.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    IV.2 Rotación de cuentas por pagar
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rotacionPagarF}
                          alt="Fórmula rotación de cuentas por pagar"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rotacionPagarE1}
                          alt="Ejemplo rotación de cuentas por pagar"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rotacionPagarE2}
                          alt="Ejemplo rotación de cuentas por pagar"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      La rotación de cuentas por pagar arroja el número de días
                      que en promedio la empresa tarda en pagar a sus
                      proveedores y acreedores las deudas adquiridas. Existen
                      múltiples factores que afectan esta razón por lo que su
                      análisis y comparación se vuelve complicada siendo
                      necesario realizar un análisis retrospectivo para poder
                      obtener una opinión fundamentada.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    IV.3 Rotación de inventarios
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rotacionInventariosF}
                          alt="Fórmula rotación de inventarios"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rotacionInventariosE1}
                          alt="Ejemplo rotación de inventarios"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rotacionInventariosE2}
                          alt="Ejemplo rotación de inventarios"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      La rotación de inventarios permite al analista observar el
                      tiempo en que tarda en sustituirse el inventario antiguo
                      por uno nuevo. Esta razón se mide en días. No es
                      conveniente mantener por mucho tiempo los inventarios por
                      los costos que implica. Es importante mencionar que la
                      actividad que realiza una unidad económica es factor
                      determinante para establecer el ciclo económico y
                      considerarlo adecuado, toda vez que no es lo mismo una
                      empresa dedicada a la fabricación de bienes de capital en
                      donde su ciclo económico es lento, que una empresa
                      dedicada a la comercialización de productos de consumo
                      generalizado, donde la rotación de inventarios es ágil y
                      probablemente no genere ventas a crédito y de hacerlo su
                      recuperación sería casi inmediata.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    IV.4 Rotación de activos fijos
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={rotacionActivosFijosF}
                        alt="Fórmula rotación de activos fijos"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={rotacionActivosFijosE}
                        alt="Ejemplo rotación de activos fijos"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Mide la eficiencia de la empresa para utilizar su planta y
                      equipo (activo fijo) y así ayudar a generar ventas. En el
                      ejemplo, por cada peso de activo fijo se generan 5.79
                      pesos de ventas. Esta razón puede utilizarse como índice
                      de orientación para determinar el exceso de inversión en
                      activo fijo o la insuficiencia en ventas.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    IV.5 Rotación de activos totales
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={rotacionActivosTotF}
                        alt="Fórmula rotación de activos totales"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={rotacionActivosTotE}
                        alt="Ejemplo rotación de activos totales"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      Esta razón financiera es muy útil para la empresa, ya que
                      indica si es productiva o no de acuerdo con los activos
                      que se tienen en la entidad. Cuando el resultado es menor
                      a 1.0, significa que no se vendió ni siquiera una vez el
                      valor de los activos, lo que quiere decir que la empresa
                      tiene activos subutilizados, o que no están generando
                      ningún valor, y por tanto debe decidirse qué hacer con
                      ellos, ya sea hacerlos productivos, o bien desecharlos y
                      venderlos. En conclusión, esta razón mide la eficiencia de
                      la empresa al utilizar su activo total y así contribuir a
                      generar un mayor nivel de ventas. Es importante considerar
                      que el resultado variará de acuerdo a la actividad que
                      desarrolle la empresa, ya que una unidad económica del
                      ramo industrial tendrá una fuerte inversión en activos
                      fijos y una comercial su mayor inversión radicará en
                      activos circulantes.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-v-space grey-font">
            <b>V. Razones para valuación de inversiones</b>
          </Row>
          <Row>
            <Col>
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    V.1 Razón de precio a utilidad por acción
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={utilidadAccionF}
                          alt="Fórmula precio a utilidad por acción"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={utilidadAccionE}
                          alt="Ejemplo precio a utilidad por acción"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      Esta razón es una de las más utilizadas por los analistas
                      y considerada una de las más importantes. Su
                      interpretación es ¿a cuántas veces equivale el precio la
                      utilidad de la empresa? o bien, el precio de la acción
                      cotiza a “X” veces la utilidad. En nuestro ejemplo el
                      precio de la acción cotiza alrededor de 9.52 veces la
                      utilidad de la empresa.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    V.2 Razón de valor en libros
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Image
                        src={valorLibrosF}
                        alt="Fórmula razón de valor en libros"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Image
                        src={valorLibrosE}
                        alt="Ejemplo razón de valor en libros"
                        className="razones-img"
                      />
                    </Row>
                    <p>
                      El valor en libros de una acción representa el monto
                      contable o nominal al que equivale una acción de la
                      empresa. No considera las expectativas del mercado ni los
                      factores externos que afectan a la empresa.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    V.3 Razón precio de mercado a valor en libros
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={precioValorF}
                          alt="Fórmula razón precio de mercado a valor en libros"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={precioValorE}
                          alt="Ejemplo razón precio de mercado a valor en libros"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      Representa el número de veces en que una acción cotiza en
                      mercado públicos contra el valor en libros (el registrado
                      en la compañía) de la acción. Esta razón permite observar
                      las expectativas que tienen los inversionistas sobre el
                      crecimiento de la empresa. En nuestro ejemplo, el precio
                      de la acción en mercados públicos cotiza 3.55 veces de lo
                      que está registrado en la empresa o dicho en otras
                      palabras “la acción cotiza 3.55 veces el valor en libros
                      que se tiene en compañía”. Este indicador permite saber si
                      una acción está sobrevaluada o premiada por el mercado
                      (indicador positivo) o subvaluada o castigada (indicador
                      negativo).
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    V.4 Razón de rendimiento de dividendos
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rendDividendosF}
                          alt="Fórmula razón de rendimiento de dividendos"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      <u>Ejemplo:</u>
                    </p>
                    <Row className="justify-content-center">
                      <Col md={6}>
                        <Image
                          src={rendDividendosE}
                          alt="Ejemplo razón de rendimiento de dividendos"
                          className="razones-img"
                        />
                      </Col>
                    </Row>
                    <p>
                      Esta razón se utiliza para calcular la tasa de dividendos
                      que pagará la empresa de forma anual. Normalmente las
                      empresas publican el valor del dividendo por acción.
                      Tomando en cuenta nuestro ejemplo, pensemos que de la
                      utilidad neta se van a repartir 80,000 pesos de dividendos
                      entre 1,000 acciones comunes, lo que significa que a cada
                      acción le tocan 80 pesos de dividendos.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="m-t-space">
            <i>
              Fuente: Elaboración propia, con base en Moyer, Mcguigan, Kretlow
              (2005); Actinver (s.f).
            </i>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default ThreeTwoOneTwo;

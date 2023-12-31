import { useEffect } from "react";
import { Row, Col, Container, Image, Accordion } from "react-bootstrap";
import { MathComponent } from "mathjax-react";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Info from "../../components/Info";
import Actividad from "../../components/Actividad";
import { scrollTop } from "../../helpers/general";

const ThreeTwoOneTwo = () => {
  const razonesSimples = "../../assets/images/razonesSimples.png";

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
                Las razones o índices (ratios en el idioma inglés) se ocupan en
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
                y probables puntos débiles (red flags) en el negocio y,
                adicionalmente puede utilizarse también para determinar
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
                inversiones <b>(Figura 3.6)</b>.
              </p>
            </Col>
          </Row>
          <Row className="img-source center-text m-v-space">
            <Col>
              <b>Figura 3.6 Método de razones simples (por grupos).</b>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={6}>
              <Image
                className="full-img"
                src={razonesSimples}
                alt="Razones simples"
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
                <p>
                  <b>Nota:</b>
                </p>
                Antes de continuar descarga los siguientes estados financieros,
                porque en éstos se basa el cálculo de todas las razones
                financieras que se explican a continuación
                <Row className="justify-content-center m-t-space">
                  <Col md={4}>
                    <Actividad
                      color="purple"
                      icon={faDownload}
                      link={"to-do"}
                      type={"Estados financieros"}
                      number={""}
                    />
                  </Col>
                </Row>
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
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Margen\;de\;utilidad\;o\;de\;rentabilidad=\frac{Utilidad\;neta}{Ventas\;netas}`}
                      />
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Margen\;de\;utilidad\;o\;de\;rentabilidad=\frac{315,000}{4,000,000}=7.87\%`}
                      />
                    </Row>
                    <p>
                      Indica el porcentaje de utilidad en relación con las
                      ventas.
                    </p>
                    <p>
                      El resultado del ejemplo se puede interpretar así: se está
                      obteniendo un 7.87% de utilidad en relación con las ventas
                      o bien, por cada peso vendido 7.87 centavos son de
                      utilidad.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    I.2 Retorno sobre activos totales (RAT) o Retorno de la
                    Inversión (ROI) o ROA por sus siglas en inglés
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Rendimiento\;sobre\;activos\;totales=\frac{Utilidad\;neta}{Activo\;total}`}
                      />
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Rendimiento\;sobre\;activos\;totales=\frac{315,000}{1,490,000}=21.14\%`}
                      />
                    </Row>
                    <p>
                      Indica el porcentaje de utilidad que se obtiene con el
                      empleo de todos los recursos (propios y ajenos de la
                      empresa).
                    </p>
                    <p>
                      El resultado del ejemplo se puede interpretar así: se está
                      obteniendo un 21.14% de utilidad con el empleo del activo;
                      también se puede leer de la siguiente manera: por cada
                      peso invertido en el activo total se están obteniendo
                      21.14 centavos son de utilidad.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    I.3 Retorno sobre el capital contable (ROE)
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Rendimiento\;sobre\;el\;capital\;contable=\frac{Utilidad\;neta}{Capital\;contable}`}
                      />
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Rendimiento\;sobre\;el\;capital\;contable=\frac{315,000}{845,000}=37.28\%`}
                      />
                    </Row>
                    <p>
                      Mide el rendimiento sobre el patrimonio o capital contable
                      de los accionistas.
                    </p>
                    <p>
                      El resultado del ejemplo indica que se está obteniendo un
                      37.28% de utilidad en relación con el capital contable; es
                      decir, por cada peso que se tiene en el capital contable
                      se están obteniendo 37.28 centavos de utilidad.
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
              venciendo; en otras palabras, la liquidez es la capacidad para
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
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Raz\acute{o}n\;de\;liquidez,\;raz\acute{o}n\;circulante\;o\;raz\acute{o}n\;corriente=\frac{Activo\;circulante}{Pasivo\;circulante}`}
                      />
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Raz\acute{o}n\;de\;liquidez,\;raz\acute{o}n\;circulante\;o\;raz\acute{o}n\;corriente=\frac{800,000}{345,000}=2.32\;veces`}
                      />
                    </Row>

                    <p>
                      Indica el número de veces que con el activo circulante se
                      puede pagar el pasivo circulante.
                    </p>
                    <p>
                      En este ejemplo el resultado es una razón de 2.32 a 1; lo
                      que significa que por cada peso que la empresa debe en el
                      corto plazo se tienen $2.32 pesos en el activo circulante
                      para poder pagar.
                    </p>
                    <p>
                      <b>
                        Si la razón de liquidez, razón circulante o razón
                        corriente &gt; 1, se puede decir que sí hay liquidez.
                      </b>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    II.2 Prueba del ácido o razón de liquidez inmediata
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Prueba\;del\;\acute{a}cido\;o\;raz\acute{o}n\;de\;liquidez\;inmediata=\frac{Activo\;circulante-Inventario}{Pasivo\;circulante}`}
                      />
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Prueba\;del\;\acute{a}cido\;o\;raz\acute{o}n\;de\;liquidez\;inmediata=\frac{800,000-370,000}{345,000}=1.25\;veces`}
                      />
                    </Row>
                    <p>
                      Indica qué tanto se pueden pagar las obligaciones en el
                      corto plazo sin convertir los inventarios en efectivo
                      inmediatamente, por tratarse del activo menos líquido.
                    </p>
                    <p>
                      En el ejemplo, el resultado se interpreta: con el activo
                      circulante (sin considerar el inventario) se podría pagar
                      1.25 veces el pasivo circulante o a corto plazo.
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
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Capital\;de\;trabajo\;=Activo\;circulante-Pasivo\;circulante`}
                      />
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Capital\;de\;trabajo\;=800,000-345,000=455,000`}
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
                    II.4 Ciclo de conversión de efectivo
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Ciclo\;operativo\;=R.I+R.CxC-R.CxP`}
                      />
                    </Row>
                    <p>Donde:</p>
                    <p>R.I = Rotación de inventarios</p>
                    <p>R.CxC= Rotación de cuentas por cobrar</p>
                    <p>R.CxP= Rotación de cuentas por pagar</p>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Ciclo\;operativo\;=46.23+28.74-20.53=54.44\;d\acute{i}as`}
                      />
                    </Row>
                    <p>
                      Indica la efectividad con la que la compañía transforma
                      sus inventarios en ventas y las ventas en efectivo y así
                      poder pagar a sus proveedores y acreedores.
                    </p>
                    <p>
                      El resultado del ejemplo nos indica que la empresa está
                      tardando aproximadamente 54 días en realizar su ciclo de
                      conversión de efectivo.
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
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Apalancamiento\;o\;deuda\;sobre\;activo\;total=\frac{Pasivo\;total}{Activo\;total}`}
                      />
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Apalancamiento\;o\;deuda\;sobre\;activo\;total=\frac{645,000}{1,490,000}=43.29\%`}
                      />
                    </Row>
                    <p>
                      Indica el porcentaje del activo total que es financiado
                      por proveedores y acreedores. Cuando la razón de
                      apalancamiento es demasiado elevada, aumenta el riesgo de
                      incumplimiento de las deudas y obligaciones por parte de
                      la empresa.
                    </p>
                    <p>
                      El resultado del ejemplo indica que el 43.29% de los
                      activos están siendo financiados (se deben).
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    III.2 Razón de cobertura de intereses
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Raz\acute{o}n\;de\;cobertura\;de\;intereses=\frac{Utilidad\;de\;operaci\acute{o}n}{Intereses}`}
                      />
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Raz\acute{o}n\;de\;cobertura\;de\;intereses=\frac{500,000}{50,000}=10\;veces`}
                      />
                    </Row>
                    <p>
                      Indica el número de veces que con la utilidad de operación
                      se pueden pagar los intereses generados en el período.
                      Cuando la razón de cobertura de intereses es menor a uno,
                      la empresa puede verse amenazada debido a su incapacidad
                      para pagar los intereses a su vencimiento, lo cual la
                      puede llevar a la bancarrota.
                    </p>
                    <p>
                      El resultado del ejemplo indica que con la utilidad de
                      operación se podrían cubrir hasta 10 veces los intereses
                      del período.
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
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <MathComponent
                        tex={String.raw`Rotaci\acute{o}n\;de\;cuentas\;por\;cobrar=\frac{\frac{CxC\;al\;inicio\;del\;perido\;+CxC\;al\;final\;del\;perido}{2}}{\frac{ventas\;a\;cr\acute{e}dito}{365}}`}
                      />
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;cuentas\;por\;cobrar=\frac{\frac{280,000+350,000}{2}}{\frac{4,000,000}{365}}`}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;cuentas\;por\;cobrar=\frac{315,000}{10,958.90}=28.74\;d\acute{\imath}as`}
                        />
                      </Col>
                    </Row>
                    <p>
                      La rotación de cuentas por cobrar indica el número de días
                      en promedio que la empresa tarda en cobrar a sus deudores,
                      en otras palabras, el tiempo en el que convierte sus
                      cuentas por cobrar en efectivo.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    IV.2 Rotación de cuentas por pagar
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;cuentas\;por\;pagar=\frac{\frac{CxP\;al\;inicio\;del\;periodo\;+CxP\;al\;final\;del\;periodo}{2}}{\frac{ventas\;netas}{365}}`}
                        />
                      </Col>
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;cuentas\;por\;pagar=\frac{\frac{400,000+50,000}{2}}{\frac{4,000,000}{365}}`}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;cuentas\;por\;pagar=\frac{225,000}{10,958.90}=20.53\;d\acute{\imath}as`}
                        />
                      </Col>
                    </Row>
                    <p>
                      La rotación de cuentas por pagar arroja el número de días
                      que, en promedio, la empresa tarda en pagar las deudas
                      adquiridas con proveedores y acreedores. Existen múltiples
                      factores que afectan esta razón financiera, por lo que su
                      análisis y comparación se vuelven complicados, siendo
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
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;inventarios=\frac{\frac{Inventario\;al\;inicio\;del\;periodo\;+Inventario\;al\;final\;del\;perido}{2}}{\frac{Costo\;de\;ventas}{365}}`}
                        />
                      </Col>
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;inventarios=\frac{\frac{390,000+370,000}{2}}{\frac{3,000,000}{365}}`}
                        />
                      </Col>
                    </Row>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;inventarios=\frac{380,000}{8,219.18}=46.23\;d\acute{\imath}as`}
                        />
                      </Col>
                    </Row>
                    <p>
                      La rotación de inventarios permite al analista observar el
                      tiempo en que tarda en sustituirse el inventario antiguo
                      por uno nuevo; esta razón se mide en número de días. No es
                      conveniente mantener por mucho tiempo los inventarios por
                      los costos que implica.
                    </p>
                    <p>
                      Es importante mencionar que la actividad que realiza una
                      unidad económica es factor determinante para establecer el
                      ciclo económico y considerarlo adecuado, toda vez que no
                      es lo mismo una empresa dedicada a la fabricación de
                      bienes de capital en donde su ciclo económico es lento,
                      que una empresa dedicada a la comercialización de
                      productos de consumo generalizado, donde la rotación de
                      inventarios es ágil y probablemente no genere ventas a
                      crédito y de hacerlo su recuperación sería casi inmediata.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    IV.4 Rotación de activos fijos
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;activos\;fijos=\frac{Ventas\;netas}{Activo\;fijo\;neto}`}
                        />
                      </Col>
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;activos\;fijos=\frac{4,000,000}{690,000}=5.79\;veces`}
                        />
                      </Col>
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
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;activos\;totales=\frac{Ventas\;netas}{Activo\;total}`}
                        />
                      </Col>
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rotaci\acute{o}n\;de\;activos\;totales=\frac{4,000,000}{1,490,000}=2.68\;veces`}
                        />
                      </Col>
                    </Row>
                    <p>
                      Esta razón financiera es muy útil para la empresa, ya que
                      indica qué tan productiva es de acuerdo con los activos
                      que se tienen en la entidad. Cuando el resultado es menor
                      a 1.0, significa que no se vendió ni siquiera una vez el
                      valor de los activos, lo que podría significar que la
                      empresa tiene activos subutilizados, o que no están
                      generando ningún valor, y por tanto debe decidirse qué
                      hacer con ellos, ya sea hacerlos productivos, o bien
                      desecharlos y venderlos. En conclusión, esta razón mide la
                      eficiencia de la empresa al utilizar su activo total y así
                      contribuir a generar un mayor nivel de ventas. Es
                      importante considerar que el resultado variará de acuerdo
                      a la actividad que desarrolle la empresa, ya que una
                      unidad económica del ramo industrial tendrá una fuerte
                      inversión en activos fijos y una comercial su mayor
                      inversión radicará en activos circulantes.
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
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Precio\;utilidad\;por\;acci\acute{o}n=\frac{(Precio\;por\;acci\acute{o}n)(n\acute{u}mero\;de\;acciones)}{Utilidades}`}
                        />
                      </Col>
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Precio\;utilidad\;por\;acci\acute{o}n=\frac{(3,000)(1,000)}{315,000}=9.52\;veces`}
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
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Valor\;en\;libros=\frac{Capital\;contable}{n\acute{u}mero\;de\;acciones}`}
                        />
                      </Col>
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Valor\;en\;libros=\frac{845,000}{1,000}=845`}
                        />
                      </Col>
                    </Row>
                    <p>
                      El valor en libros de una acción representa el monto
                      contable o nominal al que equivale una acción de la
                      empresa, sin considerar las expectativas del mercado ni
                      los factores externos que afectan a la empresa.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    V.3 Razón precio de mercado a valor en libros
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Precio/Valor\;en\;libros=\frac{Precio\;por\;acci\acute{o}n}{Valor\;en\;libros}`}
                        />
                      </Col>
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Precio/Valor\;en\;libros=\frac{3,000}{845}=3.55\;veces`}
                        />
                      </Col>
                    </Row>
                    <p>
                      Representa el número de veces en que una acción cotiza en
                      el mercado público contra el valor en libros (el
                      registrado en la compañía) de la acción. Esta razón
                      permite observar las expectativas que tienen los
                      inversionistas sobre el crecimiento de la empresa.
                    </p>
                    <p>
                      En nuestro ejemplo, el precio de la acción en mercados
                      públicos cotiza 3.55 veces de lo que está registrado en la
                      empresa o dicho en otras palabras “la acción cotiza 3.55
                      veces el valor en libros que se tiene en la compañía”.
                      Este indicador permite saber si una acción está
                      sobrevaluada o premiada por el mercado (indicador
                      positivo) o subvaluada o castigada (indicador negativo).
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    V.4 Razón de rendimiento de dividendos
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rendimiento\;de\;dividendos=\frac{Dividendo\;anual\;por\;acci\acute{o}n}{Precio\;de\;la\;acci\acute{o}n}`}
                        />
                      </Col>
                    </Row>
                    <p>Ejemplo:</p>
                    <Row className="justify-content-center overflow-auto m-v-space">
                      <Col>
                        <MathComponent
                          tex={String.raw`Rendimiento\;de\;dividendos=\frac{80}{3,000}=2.66\%`}
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

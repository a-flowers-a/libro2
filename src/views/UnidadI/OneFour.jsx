import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import { scrollTop } from "../../helpers/general";

const OneFour = () => {
  const img19 = "../../assets/images/19.png";
  const img110 = "../../assets/images/110.png";
  const img111 = "../../assets/images/111.png";
  const img112 = "../../assets/images/112.png";
  const img113 = "../../assets/images/113.png";
  const img114 = "../../assets/images/114.png";
  const img115 = "../../assets/images/115.png";
  const img116 = "../../assets/images/116.png";
  const img117 = "../../assets/images/117.png";
  const img118 = "../../assets/images/118.png";
  const img119 = "../../assets/images/119.png";
  const img120 = "../../assets/images/120.png";

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
                  <h2>
                    1.4. Factores del micro y macro ambiente que impactan a la
                    empresa y a sus finanzas
                  </h2>
                </Col>
              </Row>
              <Row className="m-v-space justify-text">
                <Col>
                  <p>
                    La empresa es un sistema abierto porque tiene elementos
                    interrelacionados entre sí y con el entorno; es decir no
                    existe en forma aislada, sino que interactúa con su entorno
                    existiendo un impacto bidireccional. El entorno se conforma
                    por el micro y macro ambiente.
                  </p>

                  <p>
                    <b>Micro ambiente. </b>
                    Representado por elementos que tienen relación directa con
                    la empresa e influyen en ella.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <b>Proveedores</b>
                  </p>
                  <p>
                    Venden bienes o prestan servicios a la empresa. Por ejemplo:
                    materia prima, equipo de cómputo, mobiliario y equipo de
                    oficina, servicios de internet, servicios de mantenimiento,
                    etc.
                  </p>
                </Col>
                <Col md={4}>
                  <Image className="full-img" src={img19} alt="Proveedor" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <b>Clientes</b>
                  </p>
                  <p>Compran bienes o adquieren servicios de la empresa</p>
                </Col>
                <Col md={4}>
                  <Image className="full-img" src={img110} alt="Clientes" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <b>Competidores</b>
                  </p>
                  <p>
                    Ofrecen el mismo producto o productos sustitutos (cubren la
                    misma necesidad aunque no son idénticos).
                  </p>
                </Col>
                <Col md={4}>
                  <Image className="full-img" src={img111} alt="Competidores" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <b>Entidades financieras</b>
                  </p>
                  <p>
                    Prestan dinero cobrando una tasa de interés. Las entidades
                    financieras más comunes son los bancos y estos constituyen
                    una fuente de financiamiento importante.
                  </p>
                </Col>
                <Col md={4}>
                  <Image
                    className="full-img"
                    src={img112}
                    alt="Entidades financieras"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <b>Comunidad</b>
                  </p>
                  <p>
                    Constituye una fuente de empleos y manifiesta preocupación
                    por el medio ambiente, Hay zonas demarcadas para uso
                    comercial o habitacional; las empresas que generan desechos
                    tóxicos deben estar alejadas de la comunidad.
                  </p>
                </Col>
                <Col md={4}>
                  <Image className="full-img" src={img113} alt="Comunidad" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    <b>Alcaldías o municipio</b>
                  </p>
                  <p>
                    Se realizan trámites y permisos, por ejemplo: trámite de uso
                    de suelo y permisos de apertura, entre otros.
                  </p>
                </Col>
                <Col md={4}>
                  <Image
                    className="full-img"
                    src={img114}
                    alt="Alcaldías o municipios"
                  />
                </Col>
              </Row>
              <Row className="m-v-space">
                <Col>
                  <p>
                    <b>Macro ambiente. </b>
                    Factores que tienen una gran influencia en la empresa.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Image className="full-img" src={img115} alt="Económicos" />
                </Col>
                <Col>
                  <p>
                    <b>Económicos</b>
                  </p>
                  <p>
                    Los precios, la inflación, las tasas de interés, entre
                    otros.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Image className="full-img" src={img116} alt="Tecnológicos" />
                </Col>
                <Col>
                  <p>
                    <b>Tecnológicos</b>
                  </p>
                  <p>
                    Las nuevas tecnologías facilitan el trabajo, lo automatizan
                    lo que recude los costos y sobre todo abre nuevas
                    oportunidades de negocio.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Image
                    className="full-img"
                    src={img117}
                    alt="Político-legales"
                  />
                </Col>
                <Col>
                  <p>
                    <b>Político-legales</b>
                  </p>
                  <p>
                    Las iniciativas, la legislación y en general las decisiones
                    del gobierno afectan a las empresas. Por ejemplo: en materia
                    laboral, impuestos e inversión extranjera.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Image className="full-img" src={img118} alt="Demográficos" />
                </Col>
                <Col>
                  <p>
                    <b>Demográficos</b>
                  </p>
                  <p>
                    Datos sobre la población como edad, cantidad de hombres y de
                    mujeres, nivel de ingresos, etc. Información muy útil para
                    decidir ¿qué vender? ¿a quién vender? Y ¿dónde se localizan
                    los clientes?
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Image
                    className="full-img"
                    src={img119}
                    alt="Socio culturales"
                  />
                </Col>
                <Col>
                  <p>
                    <b>Socio culturales</b>
                  </p>
                  <p>
                    Se conforma por los estilos de vida, costumbres, hábitos
                    alimenticios, religión y demás aspectos que condicionan el
                    comportamiento de las personas.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <Image
                    className="full-img"
                    src={img120}
                    alt="Medioambientales"
                  />
                </Col>
                <Col>
                  <p>
                    <b>Medioambientales</b>
                  </p>
                  <p>
                    Consiste en minimizar el impacto medio ambiental, lo que
                    supone un esfuerzo y un costo para las empresas. Existen
                    leyes que regulan aspectos ambientales y quienes no las
                    cumplan son acreedores a sanciones.
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

export default OneFour;

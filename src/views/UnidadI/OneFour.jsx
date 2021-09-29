import React from "react";
import { Row, Col, Container, Table, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";

const OneFour = () => {
  const proveedor = "../../assets/images/proveedor.png";
  const cliente = "../../assets/images/cliente.png";
  const competidores = "../../assets/images/competidores.png";
  const entidades = "../../assets/images/entidades.png";
  const comunidad = "../../assets/images/comunidad.png";
  const alcaldia = "../../assets/images/alcaldia.png";

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <Row>
            <Col className="justify-text">
              <Row>
                <Col>
                  <h2>
                    1.4 Factores del micro y macro ambiente que impactan a la
                    empresa y a sus finanzas
                  </h2>
                </Col>
              </Row>
              <Row className="m-v-space">
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
                  <Image className="full-img" src={proveedor} alt="Proveedor" />
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
                  <Image className="full-img" src={cliente} alt="Clientes" />
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
                  <Image
                    className="full-img"
                    src={competidores}
                    alt="Competidores"
                  />
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
                    src={entidades}
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
                  <Image className="full-img" src={comunidad} alt="Comunidad" />
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
                    src={alcaldia}
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
                <Col>
                  <Table striped bordered size="sm">
                    <tbody>
                      <tr>
                        <td>Económicos</td>
                        <td>
                          Los precios, la inflación, las tasas de interés, entre
                          otros.
                        </td>
                      </tr>
                      <tr>
                        <td>Tecnológicos</td>
                        <td>
                          Las nuevas tecnologías facilitan el trabajo, lo
                          automatizan lo que recude los costos y sobre todo abre
                          nuevas oportunidades de negocio.
                        </td>
                      </tr>
                      <tr>
                        <td>Político-legales</td>
                        <td>
                          Las iniciativas, la legislación y en general las
                          decisiones del gobierno afectan a las empresas. Por
                          ejemplo: en materia laboral, impuestos e inversión
                          extranjera.
                        </td>
                      </tr>
                      <tr>
                        <td>Demográficos</td>
                        <td>
                          Datos sobre la población como edad, cantidad de
                          hombres y de mujeres, nivel de ingresos, etc.
                          Información muy útil para decidir ¿qué vender? ¿a
                          quién vender? Y ¿dónde se localizan los clientes?
                        </td>
                      </tr>
                      <tr>
                        <td>Socio culturales</td>
                        <td>
                          Se conforma por los estilos de vida, costumbres,
                          hábitos alimenticios, religión y demás aspectos que
                          condicionan el comportamiento de las personas.
                        </td>
                      </tr>
                      <tr>
                        <td>Medioambientales</td>
                        <td>
                          Consiste en minimizar el impacto medio ambiental, lo
                          que supone un esfuerzo y un costo para las empresas.
                          Existen leyes que regulan aspectos ambientales y
                          quienes no las cumplan son acreedores a sanciones.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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

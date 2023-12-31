import { useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Actividad from "../../components/Actividad";
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
              <Row className="justify-text">
                <Col>
                  <Row className="m-v-space justify-text">
                    <Col>
                      <p>
                        La empresa es un sistema abierto porque tiene elementos
                        interrelacionados entre sí y con el entorno; es decir no
                        existe en forma aislada, sino que interactúa con su
                        entorno existiendo un impacto bidireccional. El entorno
                        se conforma por el micro y macro ambiente.
                      </p>
                      <div className="inline bold light-navy">
                        Micro ambiente
                      </div>
                      <p>
                        Representado por elementos que tienen relación directa
                        con la empresa e influyen en ella.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        <b>Proveedores</b>
                      </p>
                      <p>
                        Son las entidades que venden bienes o prestan servicios
                        a la empresa. Por ejemplo: materia prima, equipo de
                        cómputo, mobiliario y equipo de oficina, servicios de
                        internet, servicios de mantenimiento, etc.
                      </p>
                    </Col>
                    <Col md={3}>
                      <Image className="full-img" src={img19} alt="Proveedor" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        <b>Clientes</b>
                      </p>
                      <p>
                        Son quienes compran bienes o adquieren servicios de la
                        empresa.
                      </p>
                    </Col>
                    <Col md={3}>
                      <Image className="full-img" src={img110} alt="Clientes" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        <b>Competidores</b>
                      </p>
                      <p>
                        Ofrecen el mismo producto o productos sustitutos (cubren
                        la misma necesidad, aunque no son idénticos).
                      </p>
                    </Col>
                    <Col md={3}>
                      <Image
                        className="full-img"
                        src={img111}
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
                        Las entidades financieras más comunes son los bancos,
                        estos son una fuente de financiamiento importante,
                        prestan dinero y a cambio cobran una tasa de interés.
                      </p>
                    </Col>
                    <Col md={3}>
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
                        La comunidad en la que se inserta la empresa tiene
                        ciertas características, tales como: ideología,
                        costumbres, inquietud por el medio ambiente y en general
                        un estilo de vida. Dichos aspectos definitivamente
                        influyen en la empresa.
                      </p>
                    </Col>
                    <Col md={3}>
                      <Image
                        className="full-img"
                        src={img113}
                        alt="Comunidad"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        <b>Alcaldías o municipios</b>
                      </p>
                      <p>
                        Las empresas al realizar algunos trámites y permisos
                        tienen relación con las alcaldías o municipios. Por
                        ejemplo: trámite de uso de suelo y permisos de apertura,
                        por mencionar algunos.
                      </p>
                    </Col>
                    <Col md={3}>
                      <Image
                        className="full-img"
                        src={img114}
                        alt="Alcaldías o municipios"
                      />
                    </Col>
                  </Row>
                  <Row className="m-v-space">
                    <Col>
                      <div className="inline bold light-navy">
                        Macro ambiente
                      </div>
                      <p>
                        Conformado por todos aquellos factores que tienen una
                        gran influencia en la empresa.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <Image
                        className="full-img"
                        src={img115}
                        alt="Económicos"
                      />
                    </Col>
                    <Col>
                      <p>
                        <b>Económicos</b>
                      </p>
                      <p>
                        La inflación, las tasas de interés, y el tipo de cambio,
                        entre otros, son factores que inciden en los costos y
                        por tanto en el precio y en el resultado de la empresa.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <Image
                        className="full-img"
                        src={img116}
                        alt="Tecnológicos"
                      />
                    </Col>
                    <Col>
                      <p>
                        <b>Tecnológicos</b>
                      </p>
                      <p>
                        Las nuevas tecnologías no solo facilitan y/o automatizan
                        el trabajo, también abren nuevas oportunidades de
                        negocio.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
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
                        Las iniciativas, la legislación y en general las
                        decisiones del gobierno afectan a las empresas. Por
                        ejemplo: en materia laboral, impuestos e inversión
                        extranjera, por mencionar algunos.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
                      <Image
                        className="full-img"
                        src={img118}
                        alt="Demográficos"
                      />
                    </Col>
                    <Col>
                      <p>
                        <b>Demográficos</b>
                      </p>
                      <p>
                        La información sobre la población, como por ejemplo:
                        edad, cantidad de hombres y de mujeres, nivel de
                        ingresos, nivel socioeconómico, entre otros, son datos
                        en los que las empresas podrían apoyarse para
                        identificar ¿qué vender? ¿a quién vender? y ¿dónde se
                        localizan los clientes?, entre otras interrogantes.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3}>
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
                        Corresponde a los estilos de vida, costumbres, hábitos
                        alimenticios, religión y demás aspectos que condicionan
                        el comportamiento de las personas.
                      </p>
                    </Col>
                  </Row>
                  <Row className="justify-content-center m-b-space">
                    <Col md={3}>
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
                        Hoy día existe una preocupación mundial por minimizar el
                        impacto medio ambiental, lo que supone un esfuerzo y un
                        costo para las empresas. Existen leyes que regulan
                        aspectos ambientales y quienes no las cumplan son
                        acreedores a sanciones.
                      </p>
                    </Col>
                  </Row>
                  <Row className="justify-content-center m-b-space">
                    <Col>
                      {
                        "Es momento de aplicar lo que has aprendido en esta unidad temática, realiza la siguiente actividad de aprendizaje:"
                      }
                    </Col>
                  </Row>
                  <Row className="justify-content-center m-b-space">
                    <Col md={3}>
                      <Actividad
                        color="aqua"
                        icon={faPuzzlePiece}
                        link={
                          "https://drive.google.com/file/d/1qq4C3UEpfppd4zL9SuYJGNZK8bFs-gnv/view"
                        }
                        type={"Actividad 1.3"}
                        number={""}
                      />
                    </Col>
                    <Col md={6} className="v-center-content text-descrip">
                      Actividad 1.3 La empresa, sus finanzas y su relación con
                      el entorno
                    </Col>
                  </Row>
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

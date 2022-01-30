import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import SideMenu from "../../components/SideMenu/SideMenu";
import Actividad from "../../components/Actividad";
import { faBookReader, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { scrollTop } from "../../helpers/general";

const MaterialApoyo1 = () => {
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
              <h2>Material de apoyo</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={3}>
              <Actividad
                color="aqua"
                icon={faBookReader}
                link={"TODO://link"}
                type={"Lectura"}
                number={""}
              />
              <Actividad
                color="aqua"
                icon={faPuzzlePiece}
                link={"TODO://link"}
                type={"Actividad 1.1"}
                number={""}
              />
              <Actividad
                color="aqua"
                icon={faPuzzlePiece}
                link={"TODO://link"}
                type={"Actividad 1.2"}
                number={""}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
};

export default MaterialApoyo1;

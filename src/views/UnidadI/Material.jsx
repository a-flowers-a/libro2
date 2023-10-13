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
                link={
                  "https://drive.google.com/file/d/1Iq2UPaA-xyxm2_3quJc2OFy1Tr5_nRDV/view"
                }
                type={"Lectura"}
                number={""}
              />
              <Actividad
                color="aqua"
                icon={faPuzzlePiece}
                link={
                  "https://drive.google.com/file/d/1qq4C3UEpfppd4zL9SuYJGNZK8bFs-gnv/view"
                }
                type={"Actividad 1.1"}
                number={""}
              />
              <Actividad
                color="aqua"
                icon={faPuzzlePiece}
                link={
                  "https://drive.google.com/file/d/1wfSNJHqnOdg56pfnvvORsJvzrRGrCnyE/view"
                }
                type={"Actividad 1.2"}
                number={""}
              />
              <Actividad
                color="aqua"
                icon={faPuzzlePiece}
                link={
                  "https://drive.google.com/file/d/1wfSNJHqnOdg56pfnvvORsJvzrRGrCnyE/view"
                }
                type={"Actividad 1.3"}
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

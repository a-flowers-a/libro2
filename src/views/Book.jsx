import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CardButton from "../components/CardButton";
import Facebook from "../components/Facebook";
import PoliHeader from "../components/Header";
import PoliFooter from "../components/Footer";
import { CustomNavbar } from "../components/CustomNavbar";

function Book() {
  function sendTo(page) {
    window.location.href = page;
  } //sendTo

  return (
    <div className="primary-div">
      <PoliHeader />
      <CustomNavbar />
      <Container fluid>
        <Row className="m-v-space">
          <Col>
            <div className="back-card">
              <CardButton
                cardColor={"light-blue"}
                icon={faArrowLeft}
                iconFirst={true}
                clickFunc={() => sendTo("/")}
                text={"Regresar a Bienvenida"}
                textColor={"white"}
              />
            </div>
          </Col>
        </Row>
        <Row className="m-v-space">
          <Facebook />
        </Row>
      </Container>
      <PoliFooter />
    </div>
  );
} //Book

export default Book;

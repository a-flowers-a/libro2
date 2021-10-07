import React from "react";
import PoliHeader from "../components/Header";
import PoliFooter from "../components/Footer";
import { Container, Image, Row, Col } from "react-bootstrap";
import CardButton from "../components/CardButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../components/SideMenu/SideMenu";

function Welcome() {
  const frontImg = "../../assets/images/girl-books.svg";
  function sendTo(page) {
    window.location.href = page;
  } //sendTo

  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <SideMenu />
        <Container className="padding-md">
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Welcome

export default Welcome;

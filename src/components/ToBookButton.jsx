import React from "react";
import { Row, Col } from "react-bootstrap";
import CardButton from "./CardButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ToBookButton() {
  function sendTo(page) {
    window.location.href = page;
  } //sendTo

  return (
    <Row className="m-v-space">
      <Col>
        <div className="enter-card" onClick={() => sendTo("/content/II/intro")}>
          <CardButton
            cardColor={"light-blue"}
            icon={faArrowRight}
            text={"Ir a polilibro"}
            textColor={"white"}
          />
        </div>
      </Col>
    </Row>
  );
}

export default ToBookButton;

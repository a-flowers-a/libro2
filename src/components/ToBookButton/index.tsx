import { Row, Col } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardButton from "../CardButton";

function ToBookButton() {
  function sendTo(page: string) {
    window.location.href = page;
  } //sendTo

  return (
    <Row className="m-v-space">
      <Col>
        <div className="enter-card">
          <CardButton
            cardColor={"light-blue"}
            icon={faArrowRight}
            text={"Ir a polilibro"}
            textColor={"white"}
            clickFunc={() => sendTo("/content/I/intro")}
          />
        </div>
      </Col>
    </Row>
  );
}

export default ToBookButton;

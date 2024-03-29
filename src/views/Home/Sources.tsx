import { Container, Row, Col, Image } from "react-bootstrap";
import PoliHeader from "../../components/Header";
import PoliFooter from "../../components/Footer";
import HomeMenu from "../../components/HomeSideMenu/HomeMenu";
import ToBookButton from "../../components/ToBookButton";
import itemSources from "../../content/sources";

function Sources() {
  const bibliography = "../../../../assets/images/biblio.png";
  return (
    <div className="primary-div">
      <PoliHeader />
      <div className="flexContainer">
        <HomeMenu />
        <Container className="padding-md">
          <Row>
            <ToBookButton />
          </Row>
          <Row className="m-v-space ">
            <Col>
              <h2>Fuentes</h2>
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={4}>
              <Image className="full-img" src={bibliography} alt="Reading" />
            </Col>
          </Row>
          <Row className="justify-content-center m-v-space">
            <Col sm={11}>
              <div className="full-card justify-text">
                {itemSources.map((item) => (
                  <p className="indent-text">{item}</p>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <PoliFooter />
    </div>
  );
} //Sources

export default Sources;

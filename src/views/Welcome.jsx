import React from 'react';
import PoliHeader from '../components/Header';
import PoliFooter from '../components/Footer';
import { Container, Image, Row, Col } from 'react-bootstrap';
import CardButton from '../components/CardButton';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Welcome(){
    const frontImg = "../../assets/images/up_books.svg";
    function sendTo(page){
        window.location.href = page;
    }//sendTo

    return(
        <div className="primary-div">
            <PoliHeader />
                <Container fluid>
                    <Row className="m-v-space">
                        <Col>
                            <div className="enter-card">
                                <CardButton
                                    cardColor={"light-blue"}
                                    icon={faArrowRight}
                                    clickFunc={() => sendTo('/book')}
                                    text={"Ir a polilibro"}
                                    textColor={"white"}
                                />
                            </div>  
                        </Col>
                    </Row>
                    <Row className="justify-content-center m-v-space">
                        <Col sm={4}>
                            <Image 
                                className="full-img"
                                src={frontImg}
                                alt="Books" 
                            />
                        </Col>
                    </Row>
                    <Row className="m-v-space">
                        <Col sm={4}>
                            <CardButton 
                                cardColor={"dark-blue"}
                                text={"Bienvenida"}
                                textColor={"white"}
                            />
                        </Col>
                        <Col sm={4}>
                            <CardButton 
                                cardColor={"dark-blue"}
                                text={"Fuentes"}
                                textColor={"white"}
                            />
                        </Col>
                        <Col sm={4}>
                            <CardButton
                                cardColor={"dark-blue"}
                                text={"Metodología"}
                                textColor={"white"}
                            />
                        </Col>
                    </Row>
                </Container> 
                <PoliFooter />
        </div>
    );
}//Welcome

export default Welcome;
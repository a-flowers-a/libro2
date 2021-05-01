import React from 'react';
import PoliHeader from '../components/Header';
import PoliFooter from '../components/Footer';
import { Container, Image, Row, Col } from 'react-bootstrap';

function Welcome(){
    const frontImg = "../../assets/images/up_books.svg";
    return(
        <div>
            <PoliHeader />
                <Container>
                    <Row>
                        <Col>
                            <div>Hollaaa perrote</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image 
                                className="big-img"
                                src={frontImg}
                                alt="Books" 
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {/* image*/}
                        </Col>
                        <Col>
                            {/* image*/}
                        </Col>
                        <Col>
                            {/* image*/}
                        </Col>
                    </Row>
                </Container>
            <PoliFooter />
        </div>
    );
}//Welcome

export default Welcome;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CardButton from '../components/CardButton';
import PoliHeader from '../components/Header';
import PoliFooter from '../components/Footer';

function Method(){
    function sendTo(page){
        window.location.href = page;
    }//sendTo

    return (
        <div className="primary-div">
            <PoliHeader />
            <Container fluid >
                <Row className="m-v-space">
                    <Col>
                        <div className="back-card">
                            <CardButton
                                cardColor={"light-blue"}
                                icon={faArrowLeft}
                                iconFirst={true}
                                clickFunc={() => sendTo('/')}
                                text={"Regresar a Bienvenida"}
                                textColor={"white"}
                            />
                        </div>  
                    </Col>
                </Row>
            </Container>
            <PoliFooter />
        </div>
    );
}//Method

export default Method;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CardButton from '../components/CardButton';
import PoliHeader from '../components/Header';
import PoliFooter from '../components/Footer';
import itemSources from '../content/sources';

function Sources(){
    console.log(itemSources);
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
                <Row className="justify-content-center m-v-space">
                    <Col sm={10}>
                        <div className="full-card">
                            {itemSources.map(item => <p>{item}</p>)}
                        </div>
                    </Col>
                </Row>
            </Container>
            <PoliFooter />
        </div>
    );
}//Sources

export default Sources;
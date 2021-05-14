import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import Unit1 from './Unit1';
import Unit2 from './Unit2';
import Unit3 from './Unit3';
import Unit4 from './Unit4';
import Unit5 from './Unit5';

function Facebook() {

    return (
        <Container>
            <Tab.Container id="right-tabs" defaultActiveKey="U1">
                <Row>
                    <Col xs={9} sm={11}>
                        <Tab.Content>
                            <Tab.Pane eventKey="U1">
                                <Unit1 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="U2">
                                <Unit2 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="U3">
                                <Unit3 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="U4">
                                <Unit4 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="U5">
                                <Unit5 />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    <Col xs={3} sm={1}>
                        <Nav fill variant="tabs">
                            <Nav.Item className="rotate-text">
                                <Nav.Link eventKey="U1">Unidad I</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="rotate-text">
                                <Nav.Link eventKey="U2" >Unidad II</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="rotate-text">
                                <Nav.Link eventKey="U3">Unidad III</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="rotate-text">
                                <Nav.Link eventKey="U4">Unidad IV</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="rotate-text">
                                <Nav.Link eventKey="U5">Unidad V</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}//Facebook

export default Facebook;
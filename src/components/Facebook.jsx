import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Tab from './Tab';

function Facebook(){
    const frontImg = "../../assets/images/up_books.svg";
    const unities = [
        {
            name: "Unidad I",
            color: "yellow",
        },
        {
            name: "Unidad II",
            color: "red",
        },
        {
            name: "Unidad III",
            color: "blue",
        },
        {
            name: "Unidad IV",
            color: "blue",
        },
        {
            name: "Unidad V",
            color: "red",
        }
    ];
    return (
        <Container>
            <Row>
                <Col>
                    <Image 
                        className="big-img"
                        src={frontImg}
                        alt="Books" 
                    />
                </Col>
                <Col xs={2}>
                    {unities.map(unit => {
                        return (<Tab 
                            tabColor={unit.color}
                            unitName={unit.name}
                        />);
                    })}
                </Col>  
            </Row>
        </Container>
    );
}//Facebook

export default Facebook;
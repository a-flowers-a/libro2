import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Tab(props){
    const {tabColor, unitName} = props;

    return (
        <Row>
            <Col>
                <div className={"tab " + tabColor+"-bg"}>
                    <div className="tab-text">
                        {unitName}
                    </div>
                </div>
            </Col>
        </Row>     
    );
}//Tab

export default Tab;
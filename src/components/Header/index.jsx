import React, { useState, useEffect } from "react";
import { Row, Col, Container, Image, Badge } from "react-bootstrap"; //style
import "./style.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const ipn = "../../assets/images/Logo_IPN.png";
  const escom = "../../assets/images/Logo_ESCOM.png";
  const currentUnit = useSelector((state) => state.unitReducer);
  const [unitNumber, setUnitNumber] = useState("1");
  const [colorClass, setColorClass] = useState("aqua");

  useEffect(() => {
    let _unitNumber = "1";
    let _colorClass = "aqua";

    switch (currentUnit.name) {
      case "unitOne":
        _colorClass = "aqua";
        _unitNumber = "1";
        break;
      case "unitTwo":
        _colorClass = "blue";
        _unitNumber = "2";
        break;
      case "unitThree":
        _colorClass = "purple";
        _unitNumber = "3";
        break;
      case "unitFour":
        _colorClass = "pink";
        _unitNumber = "4";
        break;
      case "unitFive":
        _colorClass = "orange";
        _unitNumber = "5";
        break;
      default:
        break;
    }
    setUnitNumber(_unitNumber);
    setColorClass(_colorClass);
  }, [currentUnit, unitNumber, colorClass]);

  return (
    <Container fluid className="header">
      <Row>
        <Col xs={{ span: 2, order: 1 }} className="center-flex-content">
          <Image className="header-image ipn-img" src={ipn} alt="Logo IPN" />
        </Col>
        <Col xs={{ span: 2, order: 3 }} className="center-flex-content">
          <Image className="escom-img" src={escom} alt="Logo ESCOM" />
        </Col>
        <Col
          xs={{ span: 8, order: 2 }}
          className="center-flex-content header-title-container"
        >
          <Row>
            <Col xs={12}>Polilibro Académico de Finanzas Empresariales</Col>
            {location.pathname.startsWith("/content") && (
              <Col>
                <Badge
                  className={`${colorClass}-bg`}
                  bg="secondary"
                  text="light"
                >
                  Unidad {unitNumber}
                </Badge>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
} //Header

export default Header;

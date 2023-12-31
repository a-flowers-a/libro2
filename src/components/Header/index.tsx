import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Container, Image, Badge } from "react-bootstrap";
import { UnitContext } from "../../context/UnitProvider/context";
//style
import "./style.css";

function Header() {
  //Context
  const { state: currentUnit } = UnitContext();

  const location = useLocation();
  const ipn = "../../assets/images/Logo_IPN.png";
  const escom = "../../assets/images/Logo_ESCOM.png";
  const [unitNumber, setUnitNumber] = useState("1");
  const [colorClass, setColorClass] = useState("aqua");

  useEffect(() => {
    let _unitNumber = "1";
    let _colorClass = "aqua";

    switch (currentUnit.name) {
      case "unitOne":
        _colorClass = "aqua";
        _unitNumber = "1. La empresa y su entorno";
        break;
      case "unitTwo":
        _colorClass = "blue";
        _unitNumber =
          "2. Importancia y utilización de la información financiera";
        break;
      case "unitThree":
        _colorClass = "purple";
        _unitNumber = "3. Análisis de la información financiera";
        break;
      case "unitFour":
        _colorClass = "pink";
        _unitNumber =
          "4. Elementos de matemáticas financieras y planeación financiera";
        break;
      case "unitFive":
        _colorClass = "orange";
        _unitNumber = "5. Métodos de evaluación de proyectos de inversión";
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
          <Row className="center-flex-content">
            <Col xs={10}>Polilibro Académico de Finanzas Empresariales</Col>
            {location.pathname.startsWith("/content") && (
              <Col xs={10}>
                <Badge
                  className={`${colorClass}-bg wrap-text`}
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

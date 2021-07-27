import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../css/styles.css";

export function CustomNavbar() {
  return (
    <Navbar
      bg={"primary"}
      variant="dark"
      expand="sm"
      sticky="top"
      collapseOnSelect
    >
      <Container className={styles.purple}>
        <Navbar.Brand href="/">-Here goes topic-</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/intro">Introducción</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="/content/II/2.1">
              2.1 La información financiera
            </Nav.Link>
            <Nav.Link href="/content/II/2.2">
              2.2 Las Normas de Información Financiera (NIF)
            </Nav.Link>
            <Nav.Link href="/content/II/2.3">
              2.3 Estados Financieros Básicos
            </Nav.Link>
            <Nav.Link href="/content/II/2.3.1">
              2.3.1 Estado de situación financiera
            </Nav.Link>
            <Nav.Link href="/content/II/2.3">
              2.3.2 Estado de resultados
            </Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="/intro">Cierre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

/*
Introducción
-->2.1 La información financiera
-->2.2 Las Normas de Información Financiera (NIF)
    2.2.1 Importancia de las Normas de Información Financiera (NIF)
-->2.3 Estados Financieros Básicos
    -->2.3.1 Estado de situación financiera
        2.3.1.1 Estructura del estado de situación financiera
        2.3.1.2 Formas de presentar el estado de situación financiera
    -->2.3.2 Estado de resultados
        2.3.2.1 Estructura del estado de resultados
        2.3.2.2 Cuentas del estado de resultados
*/

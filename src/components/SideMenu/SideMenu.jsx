import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import Item from "./Item";
import "./styles.css";

function SideMenu(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <div className="sideMenuContainer">
          <div className="chevronContainer" onClick={() => setOpen(false)}>
            <FontAwesomeIcon
              className="chevronLeft"
              icon={faChevronLeft}
              size="2x"
            />
          </div>
          <NavDropdown title="Unidades" id="drop">
            <NavDropdown.Item href="#action3">Unidad I</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Unidad II</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Unidad III</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Unidad IV</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Unidad V</NavDropdown.Item>
          </NavDropdown>
          {unitTwo.map((topic) => (
            <Item topic={topic.name} key={topic.name} path={topic.path} />
          ))}
        </div>
      ) : (
        <div className="burguerIcon" onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faBars} size={"2x"} />
        </div>
      )}
    </>
  );
}

const unitTwo = [
  {
    name: "2.1 La información financiera",
    icon: "",
    path: "/content/II/2.1",
  },
  {
    name: "2.2 Las Normas de Información Financiera (NIF)",
    icon: "",
    path: "/content/II/2.2",
  },
  {
    name: "2.3. Estados Financieros Básicos",
    icon: "",
    path: "/content/II/2.3",
  },
  {
    name: "2.3.1 Estado de situación financiera",
    icon: "",
    path: "/content/II/2.3.1",
  },
  {
    name: "2.3.2 Estado de resultados",
    icon: "",
    path: "/content/II/2.3.2",
  },
];

export default SideMenu;

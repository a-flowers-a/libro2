import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import { isMobile } from "react-device-detect";
import Item from "./Item";
import "./styles.css";
import { classes } from "typestyle";

function SideMenu(props) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    isMobile ? setOpen(false) : setOpen(true);
  }, [setOpen]);

  return (
    <>
      {open ? (
        <div
          className={classes("sideMenuContainer", {
            ["sideMenuMobileContainer"]: isMobile === true,
          })}
        >
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
            <Item
              topic={topic.name}
              key={topic.name}
              path={topic.path}
              level={topic.level}
            />
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
  { name: "2.1 La información financiera", path: "/content/II/2.1", level: 1 },
  {
    name: "2.2 Las Normas de Información Financiera (NIF)",
    path: "/content/II/2.2",
    level: 1,
  },
  {
    name: "2.2.1 Importancia de las Normas de Información Financiera (NIF)",
    path: "/content/II/2.2",
    level: 2,
  },
  {
    name: "2.3. Estados Financieros Básicos",
    path: "/content/II/2.3",
    level: 1,
  },
  {
    name: "2.3.1 Estado de situación financiera",
    path: "/content/II/2.3.1",
    level: 2,
  },
  {
    name: "2.3.1.1 Estructura del estado de situación financiera",
    path: "/content/II/2.3.1",
    level: 3,
  },
  {
    name: "2.3.1.2 Formas de presentar el estado de situación financiera",
    path: "/content/II/2.3.1",
    level: 3,
  },
  { name: "2.3.2 Estado de resultados", path: "/content/II/2.3.2", level: 2 },
  {
    name: "2.3.2.1 Estructura del estado de resultados",
    path: "/content/II/2.3.2",
    level: 3,
  },
  {
    name: "2.3.2.2 Cuentas del estado de resultados",
    path: "/content/II/2.3.2",
    level: 3,
  },
];

export default SideMenu;

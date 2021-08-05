import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import "./styles.css";

function SideMenu(props) {
  const [open, setOpen] = useState(true);
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

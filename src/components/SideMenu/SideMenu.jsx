import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import { classes } from "typestyle";
import NavDropdown from "react-bootstrap/NavDropdown";
import unitTwo from "./unitTwo";
import unitOne from "./unitOne";
import Item from "./Item";
import "./styles.css";

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
            <NavDropdown.Item href="#action1">Unidad I</NavDropdown.Item>
            <NavDropdown.Item href="/content/II/intro">
              Unidad I
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">Unidad III</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Unidad IV</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Unidad V</NavDropdown.Item>
          </NavDropdown>
          {unitOne.map((topic) => (
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

export default SideMenu;

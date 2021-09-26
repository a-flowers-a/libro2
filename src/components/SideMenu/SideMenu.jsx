import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import { classes } from "typestyle";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown } from "react-bootstrap";
import unitOne from "../../constants/unitOne";
import unitTwo from "../../constants/unitTwo";
import Item from "./Item";
import "./styles.css";
import { setUnit } from "../../actions";

function SideMenu(props) {
  // context
  const currentUnit = useSelector((state) => state.unitReducer);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const setCurrentUnit = (unitNumber) => dispatch(setUnit(unitNumber));

  useEffect(() => {
    isMobile ? setOpen(false) : setOpen(true);
  }, [setOpen]);
  console.log(currentUnit);
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

          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-menu">
              Unidades
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setCurrentUnit(unitOne)}>
                Unidad I
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCurrentUnit(unitTwo)}>
                Unidad II
              </Dropdown.Item>
              <Dropdown.Item>Unidad III</Dropdown.Item>
              <Dropdown.Item>Unidad IV</Dropdown.Item>
              <Dropdown.Item>Unidad V</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {currentUnit.map((topic) => (
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

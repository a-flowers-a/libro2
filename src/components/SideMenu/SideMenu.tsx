import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import { classes } from "typestyle";
import { Dropdown } from "react-bootstrap";
import { UnitContext } from "../../context/UnitProvider/context";
import unitOne from "../../constants/unitOne";
import unitTwo from "../../constants/unitTwo";
import unitThree from "../../constants/unitThree";
import unitFour from "../../constants/unitFour";
import unitFive from "../../constants/unitFive";
import Item from "./Item";
import "./styles.css";

function SideMenu() {
  const {
    state: currentUnit,
    actions: { setUnit },
  } = UnitContext();
  const history = useHistory();

  // context
  const [open, setOpen] = useState(true);
  const [colorClass, setColorClass] = useState("aqua");
  const [hoverClass, setHoverClass] = useState("aquaHover");

  useEffect(() => {
    isMobile ? setOpen(false) : setOpen(true);
  }, [setOpen]);

  useEffect(() => {
    let _colorClass = "aqua";
    let _hoverClass = "aquaHover";

    switch (currentUnit.name) {
      case "unitOne":
        _colorClass = "aqua";
        _hoverClass = "aquaHover";
        break;
      case "unitTwo":
        _colorClass = "blue";
        _hoverClass = "blueHover";
        break;
      case "unitThree":
        _colorClass = "purple";
        _hoverClass = "purpleHover";
        break;
      case "unitFour":
        _colorClass = "pink";
        _hoverClass = "pinkHover";
        break;
      case "unitFive":
        _colorClass = "orange";
        _hoverClass = "orangeHover";
        break;

      default:
        break;
    }
    setColorClass(_colorClass);
    setHoverClass(_hoverClass);
  }, [colorClass, hoverClass, currentUnit]);

  return (
    <>
      {open ? (
        <div
          className={classes(
            "sideMenuContainer",
            `${colorClass}-bg`,
            isMobile ? "sideMenuMobileContainer" : null
          )}
        >
          <div className={"iconsContainer"}>
            <FontAwesomeIcon
              className="homeIcon"
              icon={faHome}
              size="2x"
              onClick={() => history.push("/")}
            />
            <FontAwesomeIcon
              className="crossIcon"
              icon={faTimes}
              size="2x"
              onClick={() => setOpen(false)}
            />
          </div>
          <Item topic="Glosario" level={1} path="/glossary" />
          <Dropdown className="m-b-space">
            <Dropdown.Toggle variant="secondary" id="dropdown-menu">
              Unidades
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  history.push("/content/I/intro");
                  setUnit(unitOne);
                }}
              >
                Unidad 1
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push("/content/II/intro");
                  setUnit(unitTwo);
                }}
              >
                Unidad 2
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setUnit(unitThree);
                }}
              >
                Unidad 3
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setUnit(unitFour);
                }}
              >
                Unidad 4
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setUnit(unitFive);
                }}
              >
                Unidad 5
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {currentUnit.content.map((topic) => (
            <Item
              topic={topic.name}
              key={topic.name}
              path={topic.path}
              level={topic.level}
            />
          ))}
        </div>
      ) : (
        <div
          className={`burguerIcon ${colorClass}-bg ${hoverClass}`}
          onClick={() => setOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} size={"2x"} />
        </div>
      )}
    </>
  );
}

export default SideMenu;

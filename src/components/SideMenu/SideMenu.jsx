import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import { classes } from "typestyle";
import { Dropdown } from "react-bootstrap";
import { setUnit } from "../../actions";
import unitOne from "../../constants/unitOne";
import unitTwo from "../../constants/unitTwo";
import unitThree from "../../constants/unitThree";
import Item from "./Item";
import "./styles.css";

function SideMenu(props) {
  // context
  const dispatch = useDispatch();
  const currentUnit = useSelector((state) => state.unitReducer);
  const [open, setOpen] = useState(true);
  const [colorClass, setColorClass] = useState("blue");
  const [hoverClass, setHoverClass] = useState("blueHover");

  const setCurrentUnit = (unitObject) => dispatch(setUnit(unitObject));

  useEffect(() => {
    isMobile ? setOpen(false) : setOpen(true);
  }, [setOpen]);

  useEffect(() => {
    let _colorClass = "blue";
    let _hoverClass = "blueHover";

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
          className={classes("sideMenuContainer", `${colorClass}`, {
            ["sideMenuMobileContainer"]: isMobile === true,
          })}
        >
          <div className={"chevronContainer"} onClick={() => setOpen(false)}>
            <FontAwesomeIcon
              className="chevronLeft"
              icon={faChevronLeft}
              size="2x"
            />
          </div>

          <Dropdown className="m-b-space">
            <Dropdown.Toggle variant="secondary" id="dropdown-menu">
              Unidades
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setCurrentUnit(unitOne);
                }}
              >
                Unidad I
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setCurrentUnit(unitTwo);
                }}
              >
                Unidad II
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setCurrentUnit(unitThree);
                }}
              >
                Unidad III
              </Dropdown.Item>
              <Dropdown.Item>Unidad IV</Dropdown.Item>
              <Dropdown.Item>Unidad V</Dropdown.Item>
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
          className={`burguerIcon ${colorClass} ${hoverClass}`}
          onClick={() => setOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} size={"2x"} />
        </div>
      )}
    </>
  );
}

export default SideMenu;

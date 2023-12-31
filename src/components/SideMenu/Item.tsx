import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { UnitContext } from "../../context/UnitProvider/context";
import { ItemProps } from "./types";

export default function Item({ icon, topic, path, level }: ItemProps) {
  const { state: currentUnit } = UnitContext();

  const [colorClass, setColorClass] = useState("");
  const [hoverClass, setHoverClass] = useState("");

  useEffect(() => {
    let _colorClass = "blue";
    let _hoverClass = "blueHover";

    switch (currentUnit.name) {
      case "unitOne":
        _colorClass = "itemActiveAqua";
        _hoverClass = "itemAquaHover";
        break;
      case "unitTwo":
        _colorClass = "itemActiveBlue";
        _hoverClass = "itemBlueHover";
        break;
      case "unitThree":
        _colorClass = "itemActivePurple";
        _hoverClass = "itemPurpleHover";
        break;
      case "unitFour":
        _colorClass = "itemActivePink";
        _hoverClass = "itemPinkHover";
        break;
      case "unitFive":
        _colorClass = "itemActiveOrange";
        _hoverClass = "itemOrangeHover";
        break;

      default:
        break;
    }
    setColorClass(_colorClass);
    setHoverClass(_hoverClass);
  }, [colorClass, hoverClass, currentUnit]);

  return (
    <NavLink to={path} activeClassName={"activeItem"}>
      <div
        className={`itemContainer ${hoverClass} ${colorClass}`}
        style={{ paddingLeft: `calc(1em*${level})` }}
      >
        {icon && (
          <FontAwesomeIcon className="chevronLeft" icon={icon} size="2x" />
        )}
        {topic}
      </div>
    </NavLink>
  );
}

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Item(props) {
  const currentUnit = useSelector((state) => state.unitReducer);
  const { icon, topic, path, level } = props;
  const [colorClass, setColorClass] = useState("");
  const [hoverClass, setHoverClass] = useState("");

  /*switch (currentUnit) {
    case "unitOne":
      setColorClass("itemActivePurple");
      setHoverClass("itemPurpleHover");
      break;
    case "unitTwo":
      setColorClass("itemActiveBlue");
      setHoverClass("itemBlueHover");
      break;
    default:
      break;
  }*/

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

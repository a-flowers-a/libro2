import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useHistory } from "react-router-dom";

export default function Item(props) {
  let history = useHistory();
  const { icon, topic, path, level, currentUnit } = props;
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

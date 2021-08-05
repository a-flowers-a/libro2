import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function Item(props) {
  const { icon, topic, path } = props;

  return (
    <NavLink to={path} activeClassName={"activeItem"}>
      <div className={"itemContainer"}>
        {icon && (
          <FontAwesomeIcon className="chevronLeft" icon={icon} size="2x" />
        )}
        {topic}
      </div>
    </NavLink>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ItemProps } from "../SideMenu/types";

export default function Item({ icon, topic, path, level }: ItemProps) {
  return (
    <NavLink to={path} activeClassName={"activeItem"}>
      <div
        className={"itemContainer"}
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

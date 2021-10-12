import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
import { classes } from "typestyle";
import home from "../../constants/home";
import Item from "./HomeMenuItem";
import "./styles.css";

function HomeMenu(props) {
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

          {home.content.map((topic) => (
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

export default HomeMenu;

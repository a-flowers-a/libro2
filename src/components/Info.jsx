import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

function Info({ children }) {
  return (
    <div className="soft-blue-bg information-card ">
      <div className="d-flex justify-content-end">
        <FontAwesomeIcon icon={faLightbulb} size="2x" className="soft-grey" />
      </div>
      {children}
    </div>
  );
}

export default Info;

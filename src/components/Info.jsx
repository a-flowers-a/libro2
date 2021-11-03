import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

function Info({ children, color }) {
  return (
    <div className={`soft-${color}-bg information-card`}>
      <div className="d-flex justify-content-end">
        <FontAwesomeIcon icon={faLightbulb} size="2x" className="soft-grey" />
      </div>
      {children}
    </div>
  );
}

export default Info;

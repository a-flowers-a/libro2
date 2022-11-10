import React from "react";

function Info({ children, color }) {
  return (
    <div className={`soft-${color}-bg information-card`}>
      <div className="d-flex justify-content-end"></div>
      {children}
    </div>
  );
}

export default Info;

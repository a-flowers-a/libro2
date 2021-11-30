import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Actividad(props) {
  const { link, number, type, icon, color } = props;
  function download() {
    window.open(link);
  }
  console.log("color", color);
  return (
    <div className={`card-button ${color}-bg white`} onClick={download}>
      <FontAwesomeIcon className={"icon"} icon={icon} size="2x" />
      <div>{`${type} ${number}`}</div>
    </div>
  );
} //Actividad

export default Actividad;

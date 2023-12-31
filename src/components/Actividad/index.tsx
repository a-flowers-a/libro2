import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActividadProps } from "./types";

function Actividad({ link, number, type, icon, color }: ActividadProps) {
  function download() {
    window.open(link);
  }

  return (
    <div className={`card-button ${color}-bg white`} onClick={download}>
      <FontAwesomeIcon className={"icon"} icon={icon} size="2x" />
      <div>{`${type} ${number}`}</div>
    </div>
  );
} //Actividad

export default Actividad;

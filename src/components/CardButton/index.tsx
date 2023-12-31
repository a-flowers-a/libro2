import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardButtonProps } from "./types";

function CardButton({
  cardColor,
  icon,
  iconFirst,
  text,
  textColor,
  clickFunc,
}: CardButtonProps) {
  return (
    <div className={`card-button ${cardColor}-bg`}>
      <div onClick={clickFunc} className={textColor}>
        {iconFirst && icon && (
          <FontAwesomeIcon className={"icon"} icon={icon} />
        )}
        {text}
        {!iconFirst && icon && (
          <FontAwesomeIcon className={"icon"} icon={icon} />
        )}
      </div>
    </div>
  );
} //CardButton

export default CardButton;
